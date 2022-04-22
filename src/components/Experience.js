import React from "react";
import notebook from "../metricas-de-TI-sucesso.jpg";

const Experience = () => {
  return (
  <div id="experience" className="py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-5">
                <img className="profile-img2" src={notebook} alt="author..."></img>
            </div>
        </div>
        <div className="col-lg-6 col-xm-12">
            <h1 className="about-heading">Experience</h1>
            <p style={{textAlign: 'justify', marginRight: '100px'}}>
            I currently work as an intern full stack developer at Locus Custom Software, implementing modifications and fixing bugs in web applications using Django and mobile applications using Flutter. I also have a lot of experience in other stacks, such as React and Bootstrap. Finally, I've worked as a freelancer with Search Engine Optimization (SEO), implementing improvements in online content.
            </p>
        </div>
      </div>
  </div>);
};

export default Experience;
