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
          date="2020-2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            St. Xavier's high school, Nerul
          </h3>
          <p> HSC </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020-2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Vivekanand Education Society's Institute of Technology
          </h3>
          <p> BE Engineering </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 "
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Worked with major open source organizations like Layer5,
            Moja-Global, Ethereum.org, Node.js, Kubernetes, OpenEBS, Meshery,
            Blitz.js, Wordpress plugins, Stylelint, Dynamoose, Appwrite,
            Elastic, Eclipse, etc.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Feb 2021 - Today
          </h4>
          <p>Open Source Contributor</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 "
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Open Source Contributor
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            March 2021 - June 2021
          </h4>
          <p>GSSoC'2021</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 "
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Open Source Contributor
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            June 2021 - August 2021
          </h4>
          <p>LGM-Soc-2021</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 "
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Open Source Mentor
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            July 2021 - August 2021
          </h4>
          <p>DCP'2021</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 "
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Angelhack student ambassador
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            September 2021 - June 2022
          </h4>
          <p>AngelHack</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 "
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Hacktober Fest 2021
          </h3>
          <h4 className="vertical-timeline-element-subtitle">October 2021</h4>
          <p>Completed 4 pull requests for Hacktober Fest 2021</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 "
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Jr. web Editor</h3>
          <h4 className="vertical-timeline-element-subtitle">
            December 2021 - May 2022
          </h4>
          <p>CSI VESIT</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 "
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Postman Student Expert
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            January 2022 - Today
          </h4>
          <p>Postman</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
