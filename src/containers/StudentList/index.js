import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const StudentList = () => {
  const [users, setUsers] = useState([]);
  const getAllUsers = async () => {
    await axios.get(`/api/users`).then((res) => {
      console.log(res);
      setUsers(res.data.users);
    });
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <div>
        <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>SN</th>
                <th>Username</th>
                {/* <th>Phone Number</th> */}
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users?.map((a, index) => {
                  return (
                    <>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{a.name}</td>
                        {/* <td>9847236589</td> */}
                        <td>{a.email}</td>
                        <td>
                          <Link
                            to={`/studentdetails/${a._id}`}
                            style={{
                              textDecoration: "none",
                            }}
                          >
                            Details
                          </Link>{" "}
                          <Link
                            to=""
                            style={{
                              color: "red",
                              textDecoration: "none",
                              paddingLeft: "25px",
                            }}
                          >
                            Delete
                          </Link>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </Table>
        </Container>
      </div>
    </>
  );
};

export default StudentList;
