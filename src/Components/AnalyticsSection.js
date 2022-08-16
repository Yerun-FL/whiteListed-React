import { Container, Card, ListGroup } from "react-bootstrap";
import "./Anly.css";

const AnalyticsSection = () => {
  return (
    <>
      <Container>
        {" "}
        <h4 className="head-sec">Analytics & Reports List </h4>
        <Card style={{ marginTop: "30px" }}>
          <ListGroup variant="flush">
            <ListGroup.Item className="dataCard">
              Events Report
              <h2>&#8594;</h2>
            </ListGroup.Item>
            <ListGroup.Item className="dataCard">
              Skill Report
              <h2>&#8594;</h2>
            </ListGroup.Item>
            <ListGroup.Item className="dataCard">
              Language Report
              <h2>&#8594;</h2>
            </ListGroup.Item>
            <ListGroup.Item className="dataCard">
              Company Report
              <h2>&#8594;</h2>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
    </>
  );
};

export default AnalyticsSection;
