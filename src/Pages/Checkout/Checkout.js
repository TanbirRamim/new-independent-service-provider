import { Button } from "bootstrap";
import React from "react";
import { Card } from "react-bootstrap";

const Checkout = () => {
  return (
    <Card className="text-center">
      <Card.Header>
        {" "}
        <h2>This is featured</h2>
      </Card.Header>
      <Card.Body>
        <Card.Title>You're seeing, Because you're special to us</Card.Title>
        <Card.Text>
          Having a coaching niche can make the difference between having a
          profitable coaching business or spending years trying to find clients.
          With a clear niche, you will have a steady stream of your ideal
          clients that are seeking you, fill your programs and courses with ease
          and have more time for self-care and relaxation. Yet, determining a
          niche is perhaps one of the most perplexing and stressful decisions
          for a coach. Join Master Coach Karen Cappello to learn the simple
          steps to defining a coaching niche that will allow you to have a
          thriving and profitable business with clients that you truly love to
          work with.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default Checkout;
