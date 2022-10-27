import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div className='container mt-5'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><b>Question 1: About this site</b></Accordion.Header>
                    <Accordion.Body>
                        XOXO Course partners with more than 300 leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide. We offer a range of learning opportunities—from hands-on projects and courses to job-ready certificates and degree programs.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><b>Question 2: How to buy Premium Subscription</b></Accordion.Header>
                    <Accordion.Body>
                        If you're taking a course for any type of university credit or as part of a Degree program, you won't have the option to subscribe. If you're already subscribed and become a Degree or for-credit learner, your subscription will stop at the end of the current pay period and you'll need to pay for courses individually.

                        You can cancel a subscription at any time.

                        We’re currently not able to offer subscriptions to Specializations and Professional Certificates for learners in India. Learners in India can purchase a learning pass or subscribe to Coursera Plus to access learning programs
                    </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="3">
                    <Accordion.Header><b>Question 3: How to cancel a subscription</b></Accordion.Header>
                    <Accordion.Body>
                        On a computer: <br />
                        <ul>
                            <li>Log into your account</li>
                            <li>Open your My Purchases page</li>
                            <li>Click the Manage Subscriptions tab</li>
                            <li>Next to the subscription you want to cancel, click Cancel</li>
                        </ul>
                        <br />
                        Canceling your Specialization subscription won't refund past payments, but will stop all future payments.

                        After you cancel you won't be able to access paid course materials in that Specialization (including graded assignments). You'll keep any Certificates you earned while subscribed. Work you did in unfinished courses will reappear if you subscribe or pay for the Specialization again.
                    </Accordion.Body>
                </Accordion.Item>
                
            </Accordion>
        </div>
    );
};

export default FAQ;