import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Nav, Button, Container, Form } from "react-bootstrap";
import "./Search.scss";
import UserTable from "./UserTable";

const Blog = ({ posts, auth }) => {
  const inputRef = useRef(null);
  const [search, setSearch] = useState("");
  // const [display, setDisplay] = useState(false);

  const handleChange = (e) => {
    setSearch(inputRef.current.value.toLowerCase());
  };

  useEffect(() => {

  }, []);

  return (
    <React.Fragment>
      <div className="mx-3">
        <Nav className="justify-content-between mt-2 mb-2">
          <Form>
            <Form.Group controlId="searchBar">
              <Form.Control
                type="text"
                placeholder="Real time Search User..."
                style={{ height: 40 }}
                ref={inputRef}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Nav>
      </div>
      <Container
        style={{ height: "50vh" }}
        // className="d-flex flex-column justify-content-center align-items-center"
      >
        <UserTable />
      </Container>
    </React.Fragment>
  );
};

Blog.propTypes = {
  auth: PropTypes.bool.isRequired,
  posts: PropTypes.array.isRequired,
};

export default Blog;
