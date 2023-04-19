import React, { Component } from "react";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";

class Education extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/COEP.jpg" ;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
          <section id="about">
      <div className="col-md-12 mx-auto">
                  <div className="col-md-12">
                    <h1 className="section-title" style={{ color: "black" }}>
                      <span className="text-black" style={{ textAlign: "center" }}>
                        Education
                      </span>
                    </h1>
                  </div>
                </div>
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="company-info polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />

                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} </span>
                    I am a highly qualified individual with a strong academic background. I completed my Engineering degree from the prestigious College of Engineering, Pune with a Bachelor's in Information Technology and a CGPA of 7.89. During my undergraduate studies, <br /> I focused on core computer science courses such as Data Structures, Algorithm Design, Operating Systems, Database Management Systems, and Networking.
                       <br />
                    In addition to the regular coursework, I have also completed advanced courses in UNIX programming. <br /> As a final year project, I worked on Natural Language Processing and Machine Learning, which helped me gain valuable experience in the field.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;
