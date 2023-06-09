import "./App.css";
import Sound from "./sounds/Snowfall Butterflies - Asher Fulero.mp3";
import {
  ScrollControls,
  Scroll,
  Environment,
  Float,
  Sparkles,
  PositionalAudio,
} from "@react-three/drei";

import { useEffect, useRef } from "react";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";

import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Flower } from "./models/Flower";
import { Lavender } from "./models/Lavender";
import { FlowerBloom } from "./models/FlowerBloom";

function App() {
  const music = useRef();

  useEffect(() => {
    console.log(music);
  });

  return (
    <>
      <color attach="background" args={["#ffffff"]}></color>
      <ambientLight intensity={0.1} />

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
      <ScrollControls pages={7} damping={0.25}>
        {/* canvas elements */}
        <Scroll>
          {/* top */}
          <Float
            speed={0.6} // Animation speed, defaults to 1
            rotationIntensity={2} // XYZ rotation intensity, defaults to 1
            floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <FlowerBloom className="model" scale={0.4} position={[-2, -2, 1]} />
            <FlowerBloom className="model" scale={0.5} position={[4, 0, -2]} />
            <FlowerBloom className="model" scale={0.3} position={[2, -5, 0]} />
            <FlowerBloom
              className="model"
              scale={0.6}
              position={[-11, -8, -4]}
            />
            <FlowerBloom
              className="model"
              scale={0.5}
              position={[-4, -13, -4]}
            />
            {/* <Flower scale={5} position={[-5, -9, -1]} /> */}
            {/* <Lavender scale={0.5} position={[6, -4, -2]} /> */}
            {/* <Butterfly scale={0.01} position={[-2, 0, 2]} /> */}
          </Float>
          {/* top */}

          {/* middle */}
          <Float
            speed={0.6}
            rotationIntensity={0.5}
            floatIntensity={0.2}
            floatingRange={[0.1, 0.11]} // R
          >
            <Lavender
              className="model"
              scale={0.8}
              position={[-6, -26.5, -2]}
            />
            <Lavender className="model" scale={1} position={[2, -21, -2]} />
          </Float>
          {/* middle */}

          {/* middle */}
          <Float
            speed={0.2}
            rotationIntensity={2}
            floatIntensity={0.2}
            floatingRange={[0.5, 0.5]}
          ></Float>
          {/* middle */}

          {/* middle */}
          <Float
            speed={0.2}
            rotationIntensity={0.5}
            floatIntensity={0.03}
            floatingRange={[0.5, 0.5]}
          >
            <Flower scale={5} position={[1, -35, 0]} />
          </Float>
          {/* middle */}

          {/* bottom */}
          <Float
            speed={0.2}
            rotationIntensity={2}
            floatIntensity={0.2}
            floatingRange={[1, 1]}
          ></Float>
          {/* bottom */}

          <Sparkles
            noise={0}
            count={200}
            speed={0.1}
            size={10}
            color={"#FFDF68"}
            opacity={1}
            scale={[20, 100, 20]}
          ></Sparkles>
          <Sparkles
            noise={0}
            count={200}
            speed={0.1}
            size={10}
            color={"#FFDF68"}
            opacity={1}
            scale={[30, 100, 20]}
          ></Sparkles>

          <group position={[0, 0, 0]}>
            <PositionalAudio
              ref={music}
              autoplay
              loop
              url={Sound}
              distance={1.2}
            />
          </group>
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
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px 0px",
                top: "600vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>~</h1>
                </div>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px 0px",
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
          </Container>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
