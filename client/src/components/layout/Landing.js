import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import mongo from "../../static/mongo.png";
// import express from "../../static/express.png";
// import react from "../../static/react.png";
// import node from "../../static/node.png";
import "./Landing.css";

const Landing = () => (
  <Container
    style={{ height: "75vh" }}
    className="d-flex flex-column justify-content-center align-items-center"
  >
    {" "}
    <Row className="mb-4">
      <p className="text-secondary h3">
        {" "}
        <i>RNF-Tech AssignMent</i>
      </p>
      <p className="text-secondary h4">
        It's an MERN-Stack Application, <br />
        It has Features like Succesfull User Registartion,Login and Having Home
        Page with All user Data
      </p>
      <p>
         1.Current Status Of Project: Registration,Login,Home Page completed<br />
         2.Needs to made an fetch all user data to table and search funtionality and connection req.

      </p>
    </Row>
  </Container>
);

export default Landing;
