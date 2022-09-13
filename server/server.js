const path = require('path');
const express = require('express');
const db = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const cors = require('cors');
const { v4 } = require("uuid")
const dotenv = require('dotenv')
dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();
const stripe = require('stripe')(process.env.STRIPE_KEY);

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.post('/checkout',(req, res) => {
    const { token, donationAmount } = req.body;
    const idempotencyKey = v4();

    return stripe.customers.create({
        email: token.email,
        source: token.id
        }).then(customer => { stripe.charges.create(
            {
                amount: donationAmount * 100 ,
                currency: "usd",
                customer: customer.id,
                receipt_email: token.email,
                description: "Donation for the MOVIE SCENE",
            },
            {
                idempotencyKey
            })
        })
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => console.log(err));

})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Now listening on 127.0.0.1:${PORT}`);
        console.log(`Use GraphQL at http://127.0.0.1:${PORT}${server.graphqlPath}`);
    });
});