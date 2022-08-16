import { Card, Container } from "react-bootstrap";
import "./CardSection.css";
import reports from "../Images/reports.png";
import whitelist from "../Images/whitelisted.png";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { useState } from "react";

const CardSection = () => {
  const [spinnerAnabled, setSpinnerAnabled] = useState(false);

  const navigate = useNavigate();

  const changePath = (path) => {
    setSpinnerAnabled(true);
    setTimeout(() => {
      setSpinnerAnabled(false);
      navigate(path);
    }, 2000);
  };

  return (
    <>
      {!spinnerAnabled && (
        <div className="Card_fullBody">
          <Container>
            <div className="container" style={{ width: "95%" }}>
              {/* <NavLink style={{ textDecoration: "none" }} to="/whitelisted"> */}
              <Card
                className="card-body shadow-lg p-3 mb-5 bg-white rounded "
                onClick={() => {
                  changePath("/whitelisted");
                }}
              >
                <Card.Body>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src={whitelist} alt="#" width="50px" />
                    <h4>Whitelist</h4>
                  </div>
                  <h2>&#8594;</h2>
                </Card.Body>
              </Card>
              {/* </NavLink> */}
            </div>
            <div
              onClick={() => {
                changePath("/analyticsSection");
              }}
            >
              <div className="container " style={{ width: "95%" }}>
                <Card
                  className="card-body rrr shadow-lg p-3 mb-5 bg-white rounded"
                  // style={{ width: "90%" }}
                >
                  <Card.Body>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <img src={reports} alt="#" width="50px" />
                      <h4>Analytics & Reports List </h4>
                    </div>
                    <h2>&#8594;</h2>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Container>
        </div>
      )}
      {spinnerAnabled && (
        <div className="spinner-body">
          <Spinner animation="border" />
          <h5>Loading..</h5>
        </div>
      )}
    </>
  );
};

export default CardSection;
