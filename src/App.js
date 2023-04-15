import "./App.css";
import { ScrollControls, Scroll, Environment, Float } from "@react-three/drei";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Flower } from "./models/Flower";
import { Lavender } from "./models/Lavender";
import { Butterfly } from "./models/Butterfly";
import { FlowerBloom } from "./models/FlowerBloom";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";

function App() {
  return (
    <>
      <color attach="background" args={["#ffffff"]}></color>
      <ambientLight intensity={1.1} />

      <Environment preset="warehouse" />

      <EffectComposer>
        <Bloom
          intensity={2}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.5}
          height={1000}
        />
        <Vignette eskil={false} offset={0.1} darkness={0.5} />
      </EffectComposer>

      {/* REACT THREE DREI */}
      <ScrollControls pages={6} damping={0.25}>
        {/* canvas elements */}
        <Scroll>
          {/* top */}
          <Float
            speed={0.6} // Animation speed, defaults to 1
            rotationIntensity={2} // XYZ rotation intensity, defaults to 1
            floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <FlowerBloom scale={0.5} position={[0, -2, 1]} />
            <FlowerBloom scale={0.5} position={[6, -2, -2]} />
            <FlowerBloom scale={0.5} position={[-8, 2, -6]} />
            {/* <Flower scale={5} position={[-5, -9, -1]} /> */}
            {/* <Lavender scale={0.5} position={[6, -4, -2]} /> */}
            {/* <Butterfly scale={0.01} position={[-2, 0, 2]} /> */}
          </Float>
          {/* top */}
        </Scroll>

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
