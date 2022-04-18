import React from "react";
import { Accordion } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="container">
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {" "}
            #1 Difference Between Authorization and Authentication
          </Accordion.Header>
          <Accordion.Body>
            The process of verifying a user is called authentication. whether
            verifying what type of things they have access to is called
            authorization. They are fundamentally different by functions to be
            very explicit. Authentication challenges the user for their
            credential. It is usually done before authorization while
            authorization is done after you successfully done with
            authentication.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            #2 Why are you using firebase? What other options do you have to
            implement authentication?
          </Accordion.Header>
          <Accordion.Body>
            Backend services key are being provided by Firebase Authentication.
            It helps to do authentication in a versatile way. Like you can
            authenticate using email, password, phone number or any other
            identity providers like github, google, facebook, twitter etc.
            Firebase makes it easier to get the user signed in, in a very simple
            way. Even you don't need to understand the complexities behind that.
            by simply just following some steps will make it happen. Other than
            that, Cookie, token, third party access, OpenId, SAML are the other
            ways you can authenticate a web application.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            #3 What other services does firebase provide other than
            authentication
          </Accordion.Header>
          <Accordion.Body>
            There are many services which Firebase provides, Most useful of them
            are: <br />
            1. Cloud Firestore <br />
            2. Cloud Functions <br />
            3. Authentication <br />
            4. Hosting <br />
            5. Cloud Storage <br />
            6. Google Analytics <br />
            7. Predictions <br />
            8. Cloud Messaging <br />
            9. Dynamic Links
            <br />
            10. Remote Config
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;
