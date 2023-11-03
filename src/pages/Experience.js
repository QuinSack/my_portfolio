import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
                St. Peters Senior High School, Kwahu-Nkwatia
          </h3>
          <p>WASSCE</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Ghana, Legon
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p>Computer Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Computer Networking Intern - University of Ghana Computing Systems
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Legon
          </h4>
          <p>Helped the team install and configure Access Points in 4 different hostel buildings on the University of Ghana campus.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="November 2022 - October 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Backend Developer - Petra Trust Company Limited
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Dzorwulu
          </h4>
          <p>
            Developed a comprehensive mutual fund reporting service using .NET and ClosedXML library to generate and deliver daily reports with the aid of a cron to clients via mail, leveraging data from a financial API.
          </p>
          <p>
            Provided maintenance support for 6+ .NET in-house applications. Achieved 100% stakeholder satisfaction and on-time completion.
          </p>
          <p>
            Generated business reports upon request by stakolders using Postgresql and Metabase.
          </p>
          <p>
            Collaborated with cross-functional teams, including frontend developers, business analysts and system administrators to ensure end-to-end functionality and resolve business challenges.
          </p>
          <p>
            Actively participated in code reviews ensuring high code quality, adherence to coding standards, and knowledge sharing with the development team.
          </p>
          <p>
            Demonstrated strong problem-solving skills through debugging technical issues and implementing effective error-handling mechanisms.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="April 2023 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer - Jupeta Technologies
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
              Contract
          </h4>
          <p>
            Assisted in the development of user interfaces for client projects using React.
          </p>
          <p>
            Collaborated with team members to implement new features and enhance existing ones.
          </p>
          <p>
            Participated actively in code reviews and provided constructive feedback.
          </p>
          <p>
            Troubleshot and debugged technical issues.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
