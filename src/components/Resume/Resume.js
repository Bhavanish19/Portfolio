import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Bhavanish Dhamnaskar.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";  // eslint-disable-next-line
  const [spojRank, upadteSpojRank] = useState(0); // eslint-disable-next-line
  const [hackerrank, upadteHackerank] = useState(0); 
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank); // eslint-disable-next-line
        upadteHackerank(res.data.message[1].hackerrank); // eslint-disable-next-line
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Web Developer [Sparks foundation]"
              date="April 2021 - May 2021"
              content={[
                "web development task were completed.",
                " Task were assigned to us as soon as the task were completed we use to upload it on linkldn then the professional and other colleagues use to review it.",
              ]}
              />
              <Resumecontent
              title="Social Internship [Nazreth Foundation]"
              content={[
                "Helping Senior citzen With COVID information and booking Vaccine for them Helping with information for the foundation for vaccine and slot bookings",
              ]}
            />
            <Resumecontent
              title="Image Processing and Open CV [Inhouse Internship]"
              content={[
                "Learned the basics of Image Processing using OpenCV and Tensorflow. Completed a Project about Vehicle Detection an Classification using concept of HAAR Cascade and Tensorflow.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Deep Learning [Multicon-W 2019 Technical Fest of TCET]"
              content={[
                "AI Controlled Robotics Workshop",
                "Made car controlled by ardino and .....  ",
              ]}
            />
            <Resumecontent
              title="Web Developer [Multicon-W 2019 Technical Fest of TCET]"
              content={[
                "Operated on developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="IT Engineer [Thakur College of Engineering, Mumbai] "
              date="2021 - Present"
              content={[`CGPA: ${cgpa} (Till ${sem}th Sem)`]}
            />
            <Resumecontent
              title="12TH BOARD [Nirmala College]"
              date="2016 - 2018"
              content={["Precentage: 78%"]}
            />
            <Resumecontent
              title="10TH BOARD [HVB Academy] "
              date="2000 - 2016"
              content={["Precentage: 86%"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "Presented Paper in EWPPC-2021",

                "Qualified for National Round in NASA Space Apps Hackathon",
              ]}   
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
