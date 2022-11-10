import React from "react";
import { Helmet } from "react-helmet-async";

const Blog = () => {
    return (
        <div>
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
                    What is <code>cors</code> ?
                </div>
                <div className="collapse-content">
                    <p>
                        Cross-origin resource sharing (CORS) is a HTTP-header
                        based browser security mechanism which enables
                        controlled access to resources located outside of a
                        given domain. It allows a service (API) to indicate any
                        origin other than its own from which the client can
                        request resources. CORS also relies on a mechanism by
                        which browsers make a "preflight" request to the server
                        hosting the cross-origin resource, in order to check
                        that the server will permit the actual request. It
                        enables JavaScripts running in browsers to connect to
                        APIs and other web resources like fonts, and stylesheets
                        from multiple different providers.
                    </p>
                </div>
            </div>

            <div
                tabIndex={1}
                className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-8"
            >
                <div className="collapse-title text-xl font-medium">
                    Why are you using <code>firebase</code> ? What other options
                    do you have to implement authentication?
                </div>
                <div className="collapse-content">
                    <p>
                        Firebase is an app development platform that helps one
                        to build and grow web apps, mobile apps and
                        games.Firebase is a platform that offers active backend
                        as a service (BaaS) for building dynamic web and mobile
                        apps. <br></br>
                        We can use firebase for different Authentication, Remote
                        Config, Analytics, Database and Cloud Messaging. <br />
                        Some authentication service providers are STYTCH, Ory,
                        Supabase, Okta, PingIdentity, Keycloak, Frontegg,
                        Authress, Auth0, Amazon Cognito and OneLogin.
                    </p>
                </div>
            </div>

            <div
                tabIndex={2}
                className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-8"
            >
                <div className="collapse-title text-xl font-medium">
                    How does the private route work?
                </div>
                <div className="collapse-content">
                    <p>
                        Private route is also called Protected route is just
                        similar as public route, the only change is that
                        redirect URL and authenticate condition.If the user is
                        not authenticated he will be redirected to the login
                        page and the user can only access the authenticated
                        routes If he is authenticated (Logged in). <br />
                        Private route is used as wrapping of other route we want
                        to provide authentication. User is directed to private
                        route before getting access to targeted route, private
                        route check user access permission based on pre given
                        condition. Based on that condition private route allow
                        user to enter into the targeted route or redirect to
                        login or other page.
                    </p>
                </div>
            </div>
            <div
                tabIndex={3}
                className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-8"
            >
                <div className="collapse-title text-xl font-medium">
                    What is Node? How does Node work?
                </div>
                <div className="collapse-content">
                    <p>
                        Node and NodeJS are the same thing, node is just a
                        shorter way to say Node JS. Node JS is an open-source,
                        cross-platform and asynchronous event-driven JavaScript
                        runtime. It is used for running web applications outside
                        the client’s browser. Node.js is designed to build
                        scalable network applications. <br />
                        Node.js is open source means that it is free to use and
                        constantly being tweaked and improved by a global
                        community of developers. Node.js is actually neither a
                        framework or a library, but a runtime environment. A
                        runtime environment contains Web API’s that a developer
                        can access to build a code, and a JavaScript engine that
                        parses that code. This makes it lightweight, flexible
                        and easy to deploy, all features that will help to
                        optimize and speed up your application project. <br />
                        <b>Working of Node.js:</b> Node.js is the JavaScript
                        runtime environment which is based on Google’s V8
                        Engine. Node.js accepts the request from the clients and
                        sends the response, while working with the request
                        node.js handles them with a single thread. To operate
                        I/O (input-output) operations or requests node.js use
                        the concept of threads. Thread is a sequence of
                        instructions that the server needs to perform. It runs
                        parallel on the server to provide the information to
                        multiple clients. It can handle concurrent requests with
                        a single thread without blocking it for one request.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
