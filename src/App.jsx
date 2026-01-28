import React, { useEffect, useCallback, useMemo } from "react";
import Slide from "./components/Slide.jsx";
import Navigation from "./components/Navigation.jsx";
import profileImg from "./assets/profile.png";
import pixelPhone from "./assets/pixel_mobile.png";
import robot_model1_img from "./project_assets/robot_model01.png";
import robot_model1_vid from "./project_assets/robot_model01.mp4";
import teleopx_demo from "./project_assets/teleopx_demo.mp4";
import nav2_bot_demo from "./project_assets/nav2_bot_demo.mp4";
import nav2_bot_demo2 from "./project_assets/nav2_bot_demo2.mp4";

const SLIDES = [
  {
    id: "intro",
    title: "Intro",
    content: (
      <div className="slide-intro">
        <p className="intro-kicker">Systems & Autonomy Portfolio</p>
        <h1 className="intro-title">Guru Manohar Gupta</h1>
        <p className="intro-quote">
          “Designing intelligent systems that translate decision-making into
          dependable real-world behavior.”
        </p>
      </div>
    ),
  },

  {
    id: "about",
    title: "About Me",
    content: (
      <div className="slide-two-column">
        <div className="about-photo">
          <img
            src={profileImg}
            alt="Manohar Gupta profile"
            className="about-photo-img"
          />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am an undergraduate in Computer Science and Artificial
            Intelligence focused on robotics software systems. I work on
            problems that involve designing, simulating, and integrating
            autonomous behavior, with particular interest in how perception,
            planning, and control operate together as a complete system. I
            follow a simulation-first approach to validate system behavior
            before deployment, and leverage my background in web development to
            build supporting tools and interfaces when needed.
          </p>

          <div className="about-list-group">
            <div>
              <h3>Interests</h3>
              <ul>
                <li>Autonomous systems software</li>
                <li>Robot software architecture and integration</li>
                <li>State estimation, decision-making, and motion execution</li>
                <li>Simulation-driven development and validation</li>
              </ul>
            </div>
            <div>
              <h3>What I&apos;m Aiming For</h3>
              <ul>
                <li>Robotics software system development</li>
                <li>Simulation-to-real system transfer</li>
                <li>Real-world navigation constraints</li>
                <li>Research and system innovation </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "skills",
    title: "Skills",
    content: (
      <div className="slide-skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <section>
            <h3>Robotics</h3>
            <ul>
              <li>SLAM, localization</li>
              <li>Path planning (NAV2)</li>
              <li>ROS (Robotic Operating System)</li>
              <li>Computer Vison</li>
              <li>Nav2 stack</li>
              <li>Gazebo & RViz</li>
            </ul>
          </section>
          <section>
            <h3>Programming</h3>
            <ul>
              <li>Python</li>
              <li>Pandas</li>
              <li>C++ (Basic) </li>
              <li>Javascript</li>
              <li>SQL</li>
              <li>MongoDB</li>
              <li>Data Structures</li>
            </ul>
          </section>
          <section>
            <h3>Tools & Libraries</h3>
            <ul>
              <li>Linux, Git</li>
              <li>Figma</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>React</li>
              <li>Docker</li>
              <li>Testing & debugging</li>
            </ul>
          </section>
        </div>
      </div>
    ),
  },

  {
    id: "project-1",
    title: "Project 1",
    content: (
      <div className="slide-project">
        <div className="project-header">
          <h2>ROS2-AGENT-01 – Mobile Robot & Manipulator Simulation</h2>
          <br></br>
          <p className="project-summary">
            A realistic ROS 2–based simulation of a mobile robotic platform with
            a mounted manipulator arm and camera sensor, designed for motion
            control and sensor visualization.
          </p>
        </div>
        <br></br>
        <div className="project-scroll-area">
          <div className="project-layout">
            <div>
              <h3>Overview</h3>
              <br></br>
              <p>
                ROS2-AGENT-01 models a robotic car with an articulated arm using
                URDF/Xacro and simulates its behavior in Gazebo with accurate
                kinematics and joint control. The system includes a camera
                sensor that streams live visual data to ROS 2 topics, enabling
                real-time visualization and inspection in RViz. The project
                demonstrates the complete simulation pipeline, from robot
                description and sensor integration to motion execution and
                visualization.
              </p>
            </div>

            <div className="project-meta">
              <div>
                <h3>Tech Stack</h3>
                <ul>
                  <li>ROS 2</li>
                  <li>Python</li>
                  <li>XML</li>
                  <li>URDF / Xacro</li>
                  <li>Gazebo</li>
                  <li>RViz</li>
                  <li>ROS 2 Control</li>
                </ul>
              </div>
              <div>
                <h3>Links</h3>
                <a
                  href="https://github.com/GuruManoharGuptaBaratam/ROS2-Agent-01"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
          <div />
          <div className="project-media">
            <img src={robot_model1_img} alt="Robot model" />
            <br></br>
            <video
              src={robot_model1_vid}
              autoPlay
              loop
              muted
              playsInline
              ref={(el) => {
                if (el) el.playbackRate = 1.5;
              }}
            />
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "project-2",
    title: "Project 2",
    content: (
      <div className="slide-project">
        <h2>TeleopX Controller</h2>
        <br></br>
        <p className="project-summary">
          A lightweight, browser-based teleoperation interface for remotely
          controlling a ROS 2–powered robot and monitoring live camera feedback
          over a secure web connection.
        </p>
        <br></br>
        <div className="project-scroll-area">
          <div className="project-layout">
            <div>
              <h3>Overview</h3>
              <p>
                TeleopX enables remote manual control of a robot from a web
                browser by bridging ROS 2 communication with modern web
                technologies. The system exposes robot control and sensor data
                through a secure HTTPS endpoint using a Cloudflare Tunnel,
                allowing external access without directly exposing the robot’s
                local network.
              </p>
            </div>
            <div className="project-meta">
              <div>
                <h3>Tech Stack</h3>
                <ul>
                  <li>ROS 2</li>
                  <li>JavaScript (ROS 2 web client library)</li>
                  <li>React.js</li>
                  <li>WebRTC (real-time camera streaming)</li>
                  <li>Cloudflare Tunnel (secure remote access)</li>
                </ul>
              </div>
              <div>
                <h3>Links</h3>
                <a
                  href="https://github.com/GuruManoharGuptaBaratam/TeleOpX-Controller"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </a>
                <h2></h2>
                <a
                  href="https://teleop-x-controller.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hosted Link
                </a>
              </div>
            </div>
          </div>

          <div className="project-media">
            <video
              src={teleopx_demo}
              autoPlay
              loop
              muted
              playsInline
              controls
              ref={(el) => {
                if (el) el.playbackRate = 1.5;
              }}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "project-3",
    title: "Project 3",
    content: (
      <div className="slide-project">
        <h2>Nav2_BOT — Autonomous Mobile Robot Navigation</h2>
        <br></br>
        <p className="project-summary">
          A ROS 2–based autonomous mobile robot simulation implementing the Nav2
          navigation stack for goal-directed motion in indoor environments.
        </p>

        <br />

        <div className="project-scroll-area">
          <div className="project-layout">
            <div>
              <h3>Overview</h3>
              <p>
                This project focuses on building and understanding a complete
                autonomous navigation pipeline using ROS 2 Nav2. The robot is
                capable of localizing itself within a known map, planning global
                paths to user-defined goals, avoiding dynamic obstacles, and
                executing recovery behaviors when navigation fails.
              </p>

              <p>
                Emphasis was placed on configuration level understanding how
                costmaps, planners, controllers, and localization parameters
                influence real navigation behavior in simulation.
              </p>
            </div>

            <div className="project-meta">
              <div>
                <h3>Tech Stack</h3>
                <ul>
                  <li>ROS 2 </li>
                  <li>Nav2 stack (Planner, Controller, BT Navigator)</li>
                  <li>SLAM toolbox</li>
                  <li>URDF / Xacro robot modeling</li>
                  <li>Gazebo simulation</li>
                  <li>RViz2 visualization & goal setting</li>
                  <li>LiDAR-based localization (AMCL)</li>
                </ul>
              </div>

              <div>
                <h3>Links</h3>
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  View on GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-media">
            <video
              src={nav2_bot_demo}
              autoPlay
              loop
              muted
              playsInline
              controls
              ref={(el) => {
                if (el) el.playbackRate = 1.5;
              }}
            />
            <br></br>
            <video
              src={nav2_bot_demo2}
              autoPlay
              loop
              muted
              playsInline
              controls
              ref={(el) => {
                if (el) el.playbackRate = 1.5;
              }}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "project-4",
    title: "Project 4",
    content: (
      <div className="slide-project">
        <h2>Harmonixor API</h2>
        <br></br>
        <p className="project-summary">
          A backend service built to simplify how developers manage, stream, and
          organize music data, providing clean APIs for search, playback
          metadata, and real-time client synchronization while remaining
          scalable and reliable.
        </p>

        <br />

        <div className="project-scroll-area">
          <div className="project-layout">
            <div>
              <h3>Overview</h3>
              <p>
                Harmonixor API is a backend audio-processing engine platform
                that converts a user query or media identifier into a clean,
                stream-ready audio source. it mirrors real-world software
                infrastructure patterns such as middleware services,
                asynchronous processing, and data pipeline reliability.
              </p>
              <br></br>
              <p>
                The system acts as an intermediary layer that abstracts external
                platform complexity and exposes a stable, predictable interface.
              </p>
            </div>

            <div className="project-meta">
              <div>
                <h3>Tech Stack</h3>
                <ul>
                  <li>RESTful API architecture</li>
                  <li>Javascript</li>
                  <li>React.js</li>
                  <li>Node.js & Express</li>

                  <li>YT-dlp & FFMPEG (Pipleline handling)</li>
                  <li>Asynchronous data pipelines</li>
                  <li>Process orchestration & error handling</li>
                </ul>
              </div>

              <div>
                <h3>Links</h3>
                <a
                  href="https://github.com/GuruManoharGuptaBaratam/Harmonixor-API"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </a>
                <h2></h2>
                <a
                  href="https://harmonixor-api.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hosted Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "contact",
    title: "Contact",
    content: (
      <div className="slide-contact slide-contact-layout">
        <div className="contact-info">
          <h2>Contact</h2>
          <p>
            I am actively seeking internships, research opportunities, and
            early-career roles in robotics software, autonomous systems, and
            simulation-driven development. I am particularly interested in teams
            working on real-world robotic deployment and system-level problem
            solving.
          </p>

          <ul className="contact-list">
            <li>
              <span>GitHub</span>
              <a
                href="https://github.com/GuruManoharGuptaBaratam/"
                target="_blank"
                rel="noreferrer"
              >
                github.com/GuruManoharGuptaBaratam
              </a>
            </li>

            <li>
              <span>LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/guru-manohar-gupta"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/guru-manohar-gupta
              </a>
            </li>

            <li>
              <span>Email</span>
              <a href="mailto:baratam.gupta2024@nst.rishihood.edu.in">
                baratam.gupta2024@nst.rishihood.edu.in
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-visual">
          <img src={pixelPhone} alt="" className="contact-phone-image" />
        </div>
      </div>
    ),
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isFaqOpen, setIsFaqOpen] = React.useState(false);

  const totalSlides = SLIDES.length;

  const goNext = useCallback(() => {
    if (isFaqOpen) return;
    setCurrentIndex((i) => (i < totalSlides - 1 ? i + 1 : i));
  }, [totalSlides, isFaqOpen]);

  const goPrev = useCallback(() => {
    if (isFaqOpen) return;
    setCurrentIndex((i) => (i > 0 ? i - 1 : i));
  }, [isFaqOpen]);

  useEffect(() => {
    const handler = (e) => {
      if (isFaqOpen) return;

      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev, isFaqOpen]);

  const progressLabel = useMemo(
    () => `${currentIndex + 1} / ${totalSlides}`,
    [currentIndex, totalSlides],
  );

  return (
    <div className="app-root">

      <header className="app-header">
        <div className="app-header-left">
          <span className="app-name">Guru Manohar Gupta</span>
          <span className="app-role">Autonomous Systems-Focused Engineer</span>
        </div>

        <div className="app-header-right">
          <button
            className="app-faq-button"
            onClick={() => setIsFaqOpen((prev) => !prev)}
          >
            {isFaqOpen ? "Back" : "FAQs"}
          </button>

          <span className="app-progress">{progressLabel}</span>
        </div>
      </header>

      <main className="slides-container">
        {!isFaqOpen &&
          SLIDES.map((slide, i) => (
            <Slide
              key={slide.id}
              title={slide.title}
              active={i === currentIndex}
              position={i - currentIndex}
            >
              {slide.content}
            </Slide>
          ))}


        {isFaqOpen && (
          <Slide active position={0}>
            <div className="slide-faq">
              <div className="faq-header">
                <h2>Frequently Asked Questions</h2>
              </div>
              <br></br>
              <div className="faq-scroll">
                <div className="faq-item">
                  <h3>1. Do you have industry or professional experience?</h3>
                  <p>
                    I don’t have formal industry experience yet. Instead, my
                    projects function as structured experiments. Each project
                    creates a space where I define the problem, model the
                    system, implement it, and observe where assumptions break. A
                    large part of my time goes into figuring out how to learn
                    effectively— testing ideas, analyzing failures, and
                    iterating—rather than just producing outcomes.
                  </p>
                </div>
                <br></br>

                <div className="faq-item">
                  <h3>
                    2. How should I evaluate your skills without formal work
                    experience?
                  </h3>
                  <p>
                    By looking at how I reason about systems and how they evolve
                    over time. My projects reflect how I structure state, define
                    interfaces, and manage complexity as requirements change. I
                    document decisions and limitations because I care about
                    whether a system can be understood and extended, not just
                    whether it works once.
                  </p>
                </div>
                <br></br>
                <div className="faq-item">
                  <h3>
                    3. Are your projects tutorial-based or independently built?
                  </h3>
                  <p>
                    Some projects begin with learning references, but they don’t
                    remain there. Once the fundamentals are clear, I move into
                    independent exploration—changing assumptions, redesigning
                    flows, and testing variations. Most learning happens when
                    expected behavior differs from actual behavior and I have to
                    trace interactions across components.
                  </p>
                </div>
                <br></br>
                <div className="faq-item">
                  <h3>4. How do you approach a new or unclear problem?</h3>
                  <p>
                    I approach it as an investigation rather than a task. I
                    start by identifying unknowns, defining boundaries, and
                    building a minimal version that exposes system behavior.
                    From there, I iterate by adjusting structure, state
                    handling, or data flow based on what I observe, instead of
                    optimizing too early.
                  </p>
                </div>
                <br></br>
                <div className="faq-item">
                  <h3>5. How do you make technical and design decisions?</h3>
                  <p>
                    My decisions are guided by clarity and observability. I
                    prefer designs where data flow, state transitions, and
                    responsibilities are explicit—whether in a component
                    hierarchy, an API boundary, or a larger system. If a design
                    becomes difficult to reason about, I treat that as a signal
                    to simplify.
                  </p>
                </div>
                <br></br>
                <div className="faq-item">
                  <h3>
                    6. How do you handle mistakes, bugs, or project setbacks?
                  </h3>
                  <p>
                    I expect systems to fail in unexpected ways, and I see that
                    as part of the learning process. When something breaks, I
                    focus on isolating variables and understanding the
                    underlying mechanism rather than patching symptoms.
                    Afterwards, I usually refactor or document the insight to
                    improve the system going forward.
                  </p>
                </div>
                <br></br>
                <div className="faq-item">
                  <h3>7. What are you currently improving or learning?</h3>
                  <p>
                    I’m currently focused on improving how I design and reason
                    about evolving systems. This includes better state modeling,
                    clearer separation of concerns, and more deliberate
                    performance considerations. My goal is to build systems that
                    stay understandable as they grow, not just under ideal
                    conditions.
                  </p>
                </div>
                <br></br>
                <div className="faq-item">
                  <h3>
                    8. What kind of roles or problems are you aiming to work on?
                  </h3>
                  <p>
                    I’m interested in problems where experimentation, iteration,
                    and understanding system behavior are central to the work. I
                    prefer environments where I can explore how components
                    interact, validate assumptions through implementation, and
                    gradually build depth—whether the interface is visual,
                    programmatic, or something in between.
                  </p>
                </div>
              </div>
            </div>
          </Slide>
        )}
      </main>


      <Navigation
        onNext={goNext}
        onPrev={goPrev}
        disablePrev={currentIndex === 0 || isFaqOpen}
        disableNext={currentIndex === totalSlides - 1 || isFaqOpen}
      />
    </div>
  );
}

export default App;
