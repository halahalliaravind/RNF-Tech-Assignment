import React from "react";
import {Table} from 'react-bootstrap';

const UserTable = () => {

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Aravind</td>
            <td>Kumar</td>
            <td>aravindhalahalli.81@gmail.com &nbsp; <a href="#">Send Connection</a></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Kiran</td>
            <td>M</td>
            <td>Kiran@gmail.com &nbsp; <a href="#">Send Connection</a></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Dinesh</td>
            <td>K</td>
            <td>dinshk@gmail.com &nbsp; <a href="#">Send Connection</a></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Ravi</td>
            <td>K</td>
            <td>ravi@gmail.com &nbsp; <a href="#">Send Connection</a></td>
          </tr>
          <tr>
            <td>5</td>
            <td>Dinesh K</td>
            <td>KL</td>
            <td>Dineshh@gmail.com &nbsp; <a href="#">Send Connection</a></td>
          </tr>
          <tr>
            <td>6</td>
            <td>Dinesh</td>
            <td>K</td>
            <td>dieshk@gmail.com &nbsp; <a href="#">Send Connection</a></td>
          </tr>
          <tr>
            <td>7</td>
            <td>mahesh</td>
            <td>K</td>
            <td>mahesh@gmail.com &nbsp; <a href="#">Send Connection</a></td>
          </tr>
          <tr>
            <td>8</td>
            <td>Dinesh</td>
            <td>K</td>
            <td>dieshk@gmail.com &nbsp; <a href="#">Send Connection</a></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default UserTable;
