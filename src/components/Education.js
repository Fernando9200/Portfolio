import React from "react";
import livros from "../PBooks8.jpg";

const Education = () => {
  return (
    <div id="education" className="py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img2" src={livros} alt="author..."></img>
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">Education</h1>
          <p
            style={{
              textAlign: "justify",
              marginRight: "100px",
              marginTop: "25px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec tincidunt erat. Nulla facilisi. Donec scelerisque massa nec libero luctus, vitae ullamcorper massa posuere. In ac tincidunt metus, a volutpat turpis. Pellentesque facilisis velit in libero bibendum, nec ultricies odio gravida. Sed viverra.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
