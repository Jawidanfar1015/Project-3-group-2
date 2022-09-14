import { Form } from "react-bootstrap";
import React from 'react';
import { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
 toast.configure();

const Donations = () => {
    const [donationAmount, setAmount] = useState("")

    function handleChange(e) {
        const value = e.target.value;
        setAmount(value);
    }
    
    function handleToken(token){
        const body = {
            token,
            donationAmount
        }
        const headers = {
            "Content-Type": "application/json",
        }

        return fetch("http://127.0.0.1:3001/checkout", {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        })
        .then(response => {
            const { status } = response;
            
            if (status === 200){
                toast("Success! check your email for the confirmation", { type: "success" });
            } else {
                toast("Sorry! something went wrong", { type: "error" });
            }
        })
        .catch(error => console.log(error));
    }

    return (
        <>
            <h2 className="donation_title text-center mt-5">Please help us to develop the application</h2>  
            <Form className="mt-4">
                <Form.Group>
                    <Form.Label className="donation_title w-100 text-center">Amount you wish to donate</Form.Label>
                    <Form.Control className="mx-auto w-50 text-center " required placeholder='0.00' type='text'
                        onChange={handleChange}/>
                </Form.Group>
            </Form>
            <div className="container text-center">
                <StripeCheckout 
                stripeKey="pk_test_51LhSdxEZOqI5j8vNVIvqDBKNzi3WgdkJLRmflQLB8YlmxIsc5UYLIHR26jtDJBptd5fDlwX6QtiVXx5fC3mjPR6v00NkOLxur9"
                token={handleToken}
                amount={donationAmount * 100 }
                />
            </div>
        </>
    );
}
 
export default Donations;
