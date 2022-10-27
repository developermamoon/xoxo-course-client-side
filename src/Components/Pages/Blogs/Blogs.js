import React from 'react';
import Image from 'react-bootstrap/Image'
import Accordion from 'react-bootstrap/Accordion';
import image1 from '../../../Images/WorkingofNodejs1.png'

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><b>1. What is cors?</b></Accordion.Header>
                    <Accordion.Body>
                        CORS Stands for <b>Cross-Origin Resource Sharing</b>.  
                        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><b>2. Why I am using firebase? What other options I have to implement authentication?</b></Accordion.Header>
                    <Accordion.Body>
                        <b>The reason I use firebase:</b> <br /> 
                        Firebase is great for quick projects. it's easy to set up, fast, in many cases requires only front-end logic. It lets me focus on my app instead of implementing custom authentication, web sockets or database connections. <br /> <br />
                        <b>Other options I have to implement authentications are: </b>
                        <ul>
                            <li>Auth0</li>
                            <li>Passport</li>
                            <li>Keycloak</li>
                            <li>MongoDB</li>
                            <li>Okta</li>
                            <li>JSON Web Token</li>
                            <li>Amazon Cognito</li>
                            <li>STYTCH</li>
                            <li>Ory</li>
                            <li>Supabase</li>
                            <li>Frontegg</li>
                            <li>Authress</li>
                            <li>OneLogin</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><b>3. How does the private route work?</b></Accordion.Header>
                    <Accordion.Body>
                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><b>4. What is Node? How does Node work?</b></Accordion.Header>
                    <Accordion.Body>
                        Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications. <br /> <br />

                        Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications. Node.js is written in C, C++, and JavaScript, and it is built on the open-source V8 JavaScript engine which also powers JS in browsers such as Google Chrome. As V8 supports new features in JavaScript, they are incorporated into Node. <br /> <br />
                        <b>How it Works:</b> <br />
                        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. <br /> <br />
                        Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                        <br /> <br />
                        Node.js basically works on two concept
                        <ul>
                            <li>Asynchronous</li>
                            <li>Non-blocking I/O</li>
                        </ul>
                        <br /> <br />
                        <b>Non-blocking I/o:</b> Non-blocking i/o  means working with multiple requests without blocking the thread for a single request. I/O basically interacts with external systems such as files, databases. Node.js is not used for CPU-intensive work means for calculations, video processing because a single thread cannot handle the CPU works. <br /> <br />
                        <b>Asynchronous:</b> Asynchronous is executing a callback function. The moment we get the response from the other server or database it will execute a callback function. Callback functions are called as soon as some work is finished and this is because the node.js uses an event-driven architecture. The single thread doesn’t work with the request instead it sends the request to another system which resolves the request and it is accessible for another request.

                        To implement the concept of the system to handle the request  node.js uses the concept of Libuv.

                        Libuv is an open-source library built-in C. It has a strong focus on asynchronous and  I/O, this gives node access to the underlying computer operating system, file system, and networking.

                        <br /> <br /> Libuv implements two extremely important features of node.js  
                        <ul>
                            <li>Events are emitted.</li>
                            <li>Event loop picks them up.</li>
                            <li>Callbacks are called.</li>
                        </ul>
                        <br />
                        <b>Event queue:</b>  As soon as the request is sent the thread places the request into a queue. It is known as an event queue. The process like app receiving HTTP request or server or a timer will emit event as soon as they are done with the work and event loop will pick up these events and call the callback functions that are associated with each event and response is sent to the client.

                        <br /> The event loop is an indefinite loop that continuously receives the request and processes them.It checks the queue and waits for the incoming request indefinitely. <br /> <br />
                        <b>Thread pool:</b>  Though node.js is single-threaded it internally maintains a thread pool. When non-blocking requests are accepted there are processed in an event loop, but while accepting blocking requests it checks for available threads in a thread pool, assigns a thread to the client’s request which is then processed and send back to the event loop, and response is sent to the respective client.

                        <br /> The thread pool size can be change:
                        <br />

                        process.env.UV_THREADPOOL_SIZE = 1; <br /> <br />

                    <div className='text-center'>
                            <Image fluid src={image1}></Image>
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
                
            </Accordion>
        </div>
    );
};

export default Blogs;