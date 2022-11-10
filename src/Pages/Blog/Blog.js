import React from "react";
import { Helmet } from "react-helmet-async";

const Blog = () => {
    return (
        <div className="my-10">
            <Helmet>
                <title>Blog-Travel Go</title>
            </Helmet>
            <h2 className="text-center text-3xl font-bold m-4">
                Get answered of some topic (Blog)
            </h2>

            <div
                tabIndex={0}
                className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-8"
            >
                <div className="collapse-title text-xl font-medium">
                    Difference between SQL and NoSQL
                </div>
                <div className="collapse-content">
                    <p>
                        1. SQL databases are primarily called as Relational
                        Databases (RDBMS); whereas NoSQL database are primarily
                        called as non-relational or distributed database. <br />
                        2. SQL databases use structured query language and have
                        a predefined schema. SQL requires you to use predefined
                        schemas to determine the structure of your data before
                        you work with it. NoSQL databases have dynamic schemas
                        for unstructured data. Means data is stored here in many
                        ways which means it can be document-oriented,
                        column-oriented, graph-based or organized as a KeyValue
                        store. <br />
                        3. SQL databases are vertically scalable, while NoSQL
                        databases are horizontally scalable. <br />
                        SQL databases are table-based, while NoSQL databases are
                        document, key-value, graph, or wide-column stores.{" "}
                        <br />
                        4. SQL databases are better for multi-row transactions,
                        while NoSQL is better for unstructured data like
                        documents or JSON. <br />5 SQL databases are better for
                        multi-row transactions, while NoSQL is better for
                        unstructured data like documents or JSON.
                    </p>
                </div>
            </div>

            <div
                tabIndex={1}
                className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-8"
            >
                <div className="collapse-title text-xl font-medium">
                    What is JWT, and how does it work?
                </div>
                <div className="collapse-content">
                    <p>
                        JWT Means JSON Web Token, is an open standard used to
                        share security information between two parties — a
                        client and a server. Each JWT contains encoded JSON
                        objects, including a set of claims. JWTs are signed
                        using a cryptographic algorithm to ensure that the
                        claims cannot be altered after the token is issued.{" "}
                        <br />
                        First of all server generate a TWT with a secret
                        signature. When a user sign-in using username and
                        password or google/facebook. Server verifies the
                        credentials and issues a signed jwt for the user, that
                        token is stored in local storage or browser cookies.
                        After that, when user request for any restricted data
                        from server it sent JWT also with the request. Server
                        collect the request and provided JWT. Then server match
                        verify the JWT with redefined rules. Finally if the JTW
                        get verified server provide the requested data,
                        otherwise provide any error.
                    </p>
                </div>
            </div>

            <div
                tabIndex={2}
                className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-8"
            >
                <div className="collapse-title text-xl font-medium">
                    What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content">
                    <p>
                        1. JavaScript is a client-side scripting language that
                        generally run in browser. NodeJS is v-8 based
                        cross-platform and open source Javascript runtime
                        environment that allows the javascript to be run on the
                        server-side. <br />
                        2. Javascript Manly used in client-side. NodeJS is
                        mostly used on the server-side. <br />
                        3. Javascript itself can only be run in the browsers.
                        Javascript can run outside the browser with the help of
                        NodeJS. <br />
                        4. Some of the javascript library are reactJS, ViewJS
                        etc.Some of the Nodejs modules are Lodash, express etc.
                    </p>
                </div>
            </div>
            <div
                tabIndex={3}
                className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-8"
            >
                <div className="collapse-title text-xl font-medium">
                    How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content">
                    <p>
                        NodeJS receives multiple client requests and places them
                        into EventQueue. NodeJS has its own EventLoop which is
                        an infinite loop that receives requests and processes
                        them. EventLoop is the listener for the EventQueue. This
                        is called Asynchronous and Non-blocking behavior.in this
                        way Node accept the first client’s request, send the
                        request to a pool of working threads, and become free to
                        accept the second client’s request (non-blocking
                        behavior). This way it can handle multiple or concurrent
                        client requests at the same time. As soon as the
                        response is ready, the pool of threads sends it back to
                        the main thread via callbacks (asynchronous behavior).
                        As soon as the thread receives the response, it returns
                        the response to the respective client. This is how Node
                        JS multiple requests at the same time.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
