import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import custom components
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import SearchMovies from './pages/SearchMovies';
import SavedMovies from './pages/SavedMovies';
import Footer from './components/Footer';
import Donations from './components/Donations';

// import GlobalState Provider
import { MovieSceneProvider } from "./utils/GlobalState";

// stylesheets
import './App.scss';

const client = new ApolloClient({
    request: operation => {
        const token = localStorage.getItem('id_token');

        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : ''
            }
        })
    },
    uri: '/graphql'
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <MovieSceneProvider>
                    <div className="app-container">
                        <div className="app-content">
                            <Navbar />
                            <Switch>
                                <Route exact path='/' component={Homepage} />
                                <Route exact path='/search' component={SearchMovies} />
                                <Route exact path='/saved' component={SavedMovies} />
                                <Route exact path='/donation' component={Donations} />
                                <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
                            </Switch>
                        </div>
                    </div>
                    <Footer />
                </MovieSceneProvider>
            </Router>
        </ApolloProvider>
    );
}

export default App;