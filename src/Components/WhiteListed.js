import { useState } from "react";
import {
  Button,
  Container,
  Table,
  Modal,
  Form,
  Spinner,
} from "react-bootstrap";
import "./Whitelisted.css";
import dataDomain from "./Data";
import { BsFillTrashFill } from "react-icons/bs";

const WhitelistedComp = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    // console.log("is this run?");
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const [companyName, setCompanyName] = useState({ valueof: "", valid: true });
  const [domain, setDomain] = useState({ valueof: "", valid: true });
  const [list, setList] = useState(dataDomain);

  const [visable, setVisable] = useState(false);
  const handleCloseVisable = () => setVisable(false);
  const handleShowViable = () => setVisable(true);
  const [deleteSpinner, setDeleteSpinner] = useState(false);
  const [delDomainDetails, setDelDomainDetails] = useState();
  // const [alertMessage, setAlertMessage] = useState();

  const delHandler = (id, domain) => {
    setDelDomainDetails({ id: id, domain: domain });
    handleShowViable();
  };
  const deleteHandler = (id) => {
    // console.log(id);
    setDeleteSpinner(true);
    setList(list.filter((e) => e.id !== id));
    setTimeout(() => {
      setDeleteSpinner(false);
    }, 2000);
    handleCloseVisable();
  };

  const validateDomain = (domainValue) => {
    if (
      domainValue === "" ||
      !/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/i.test(
        domainValue
      )
    ) {
      setDomain((prevState) => {
        return { ...prevState, valid: false };
      });
    }
  };

  const createHandler = (e) => {
    e.preventDefault();

    ////////////////
    if (companyName.valueof === "") {
      setCompanyName((prevState) => {
        return { ...prevState, valid: false };
      });
    }

    validateDomain(domain.valueof);

    /////////////////

    if (companyName.valueof === "") {
      alert("Please enter company");
      setCompanyName((prevState) => {
        return { ...prevState, valid: false };
      });
    } else if (
      domain.valueof === "" ||
      !/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/i.test(
        domain.valueof
      )
    ) {
      let errorMsg = "Domain name field is empty";
      if (domain.valueof !== "") {
        errorMsg = "enter valid Domain name";
      }
      alert(errorMsg);
      setDomain((prevState) => {
        return { ...prevState, valid: false };
      });
    } else {
      setShow(false);
      setCompanyName({ valueof: "", valid: true });
      setDomain({ valueof: "", valid: true });
      let id;
      if (list.length !== 0) {
        id = list[list.length - 1].id + 1;
      } else {
        id = 1;
      }
      console.log(id);
      list.push({
        id: id,
        Company: companyName.valueof,
        Domain: domain.valueof,
        Action: <BsFillTrashFill />,
      });
    }
  };

  return (
    <>
      {!deleteSpinner && (
        <div>
          <Container>
            <div className="sec1">
              <p className="whdm">Whitelisted Domain</p>
              <Button
                style={{ backgroundColor: " #014271" }}
                onClick={handleShow}
              >
                Add New Domain
              </Button>
            </div>
            <div style={{ marginTop: "40px" }}>
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Company</th>
                    <th>Domain</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {list.map((e) => {
                  return (
                    <tbody>
                      <tr>
                        <td>{e.id}</td>
                        <td>{e.Company}</td>
                        <td>{e.Domain}</td>
                        <td>
                          <button
                            onClick={() => delHandler(e.id, e.Domain)}
                            style={{ color: "red" }}
                            className="actionSubmit"
                          >
                            {e.Action}
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </Table>
            </div>
            <div>
              <Modal show={show} onHide={handleClose} centered>
                <Modal.Header>
                  <Modal.Title>Add new Domain</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Container>
                    <h5>
                      Company Name<span style={{ color: "red" }}>*</span>
                    </h5>
                    <Form.Group
                      className={companyName.valid ? "mb-3" : "inputFieldError"}
                    >
                      <Form.Control
                        // value={companyName}
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Enter Company Name"
                        onChange={(e) => {
                          setCompanyName((prevState) => {
                            return {
                              valid: e.target.value !== "",
                              valueof: e.target.value,
                            };
                          });
                        }}
                      />
                    </Form.Group>

                    <h5 style={{ marginTop: "20px" }}>
                      Domain<span style={{ color: "red" }}>*</span>
                    </h5>
                    <Form.Group
                      className={domain.valid ? "mb-3" : "mb-3 inputFieldError"}
                    >
                      <Form.Control
                        // value={domain}
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Enter Company - Eg: example.com"
                        onChange={(e) => {
                          setDomain((prevState) => {
                            return { valid: true, valueof: e.target.value };
                          });
                          validateDomain(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Container>
                </Modal.Body>
                <Modal.Footer
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setCompanyName({ valueof: "", valid: true });
                      setDomain({ valueof: "", valid: true });
                      handleClose();
                    }}
                  >
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={createHandler}>
                    Create
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* {-.-} */}
              {visable && (
                <Modal
                  show={visable}
                  onHide={handleCloseVisable}
                  backdrop="static"
                  keyboard={false}
                  centered
                >
                  <Modal.Header>
                    <Modal.Title>Delete Whitelisted Domain</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Are you sure you want to delete{" "}
                    <span style={{ fontWeight: 700, fontSize: "18px" }}>
                      {delDomainDetails.domain}
                    </span>{" "}
                    whitelisted domain?
                  </Modal.Body>
                  <Modal.Footer
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button variant="secondary" onClick={handleCloseVisable}>
                      Close
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => deleteHandler(delDomainDetails.id)}
                    >
                      Delete
                    </Button>
                  </Modal.Footer>
                </Modal>
              )}
            </div>
            {list.length === 0 && (
              <h3 className="domainSt">No Domains found</h3>
            )}
          </Container>
        </div>
      )}
      {deleteSpinner && (
        <div className="spinner-body">
          <Spinner animation="border" />
          <h5>Loading..</h5>
        </div>
      )}
    </>
  );
};
export default WhitelistedComp;
