import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import VehicleDetection from "../../Assets/Projects/VehicleDetection.png";
import food from "../../Assets/Projects/food.png";
import chatify from "../../Assets/Projects/chatify.png";
import job from "../../Assets/Projects/job.png";
import moocs from "../../Assets/Projects/moocs.png";
import hospital from "../../Assets/Projects/hospital.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Real-Time-Chat-App"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              link="https://github.com/Bhavanish19/Real-Time-Chat-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospital}
              isBlog={false}
              title="Hospital Management System (PHP)"
              description="Our Website, Health Tracker,It will be running through ‘HTML’ and ‘php’ codes along CSS codes to enhance the design of the website. Along with that, we would be having MySql and php MyAdmin as the backend database server,"
              link="https://github.com/Bhavanish19/HealthTracker_System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food-App"
              description="we’ll take a look at how to create a food-App in React. IT will all the info like recipe and ingredients for the searched product"
              link="https://github.com/Bhavanish19/Food-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={job}
              isBlog={false}
              title="Student Skill Development System (Hired.net)"
              description="A Job Posting and Job-Hunting Portal with special emphasis on the skills of the Job Descriptions. A Job Description Page with skill set required and list of courses to develop those skills accessible to all."
              link="https://github.com/Bhavanish19/-Hired.net-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VehicleDetection}
              isBlog={false}
              title="Vehicle_Detection_-_Classification"
              description="Detection of vehicles in the traffic and classifying them in the categories of Bikes, Cars, Bus and Trucks to analyze the flow of traffic and set rules to reduce it. Using Python, OpenCV, HAAR Cascade, Tensorflow"
              link="https://github.com/Bhavanish19/image_processing_Vehicle_Detection_-_Classification"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={moocs}
              link=""
              title="LCM model to increase productivity of MOOCs"
              site="https://futureofmassiveopenonlinecourses.blogspot.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
