import "./App.css";
import { ScrollControls, Scroll } from "@react-three/drei";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <>
      <color attach="background" args={["#FFFFFF"]}></color>

      {/* RECT THREE DREI */}
      <ScrollControls pages={6} damping={0.25}>
        {/* canvas elements */}
        <Scroll></Scroll>

        {/* HTML Bootstrap elements */}
        <Scroll html style={{ width: "100%" }}>
          <Container style={{ position: "relative" }}>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>
                    Take time to grow some flowers
                  </h1>
                </div>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px",
                top: "100vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>
                    Love them, Care for them
                  </h1>
                </div>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px",
                top: "200vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>
                    When they are ready, pick them
                  </h1>
                </div>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px",
                top: "300vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>
                    Make tea out of them, Bathe in them
                  </h1>
                </div>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px",
                top: "500vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>
                    When you're done, say thank you and let your flowers go
                  </h1>
                </div>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px",
                top: "400vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>
                    Just appreciate them like how they appreciated your care for
                    them
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
