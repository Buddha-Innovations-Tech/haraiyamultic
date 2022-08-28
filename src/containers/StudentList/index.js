import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";

const StudentList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const tokenAuth = localStorage.getItem("user");

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenAuth}`,
    },
  };
  const getAllUsers = async () => {
    await axios.get(`/api/forms/`, config).then((res) => {
      console.log(res);
      setUsers(res.data.users);
    });
  };

  useEffect(() => {
    if (localStorage.getItem("isAdmin") === "false") {
      navigate("/");
    } else {
      getAllUsers();
    }
  }, []);

  return (
    <>
      <ScrollToTop />
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
                        <td>{a.user.name}</td>
                        {/* <td>9847236589</td> */}
                        <td>{a.user.email}</td>
                        <td>
                          <Link
                            to={`/studentdetails/${a.user._id}`}
                            style={{
                              textDecoration: "none",
                            }}
                          >
                            Details
                          </Link>{" "}
                          {/* <Link
                            to=""
                            style={{
                              color: "red",
                              textDecoration: "none",
                              paddingLeft: "25px",
                            }}
                          >
                            Delete
                          </Link> */}
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
