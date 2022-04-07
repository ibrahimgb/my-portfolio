import React from "react";
import CV from "../../assets/CV.pdf";

const Btns = () => {
    return (
        <div className="btns">
            <a href={CV} download className="btn">
                check out my resume
            </a>
            {/*
            <a href="#contact" className="btn btn-primary">
                Let's talk
            </a>
            */}
        </div>
    );
};

export default Btns;
