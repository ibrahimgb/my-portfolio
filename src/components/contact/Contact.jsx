import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { MdOutlineMail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_dgd7dy1",
                "template_rth9yhl",
                form.current,
                "WbwaHXtafiI_VOIPd"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineMail className="icon" />
                        <h4>Email</h4>
                        <h5 className="small">ibrahim.guoual.b@gmail.com</h5>
                        <a
                            href="mailto:ibrahim.guoual.b@gmail.com"
                            target="_blank"
                        >
                            {" "}
                            Send a massage
                        </a>
                    </article>

                    <article className="contact__option">
                        <BsLinkedin className="icon" />
                        <h4>Linkedin</h4>
                        <h5>@ibrahimgb</h5>
                        <a
                            href="https://www.linkedin.com/in/ibrahimgb/"
                            target="_blank"
                        >
                            Send a massage
                        </a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="name"
                        placeholder="your name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="your email"
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="your email"
                        required
                    />
                    <textarea
                        name="message"
                        rows="7"
                        placeholder="your message"
                        required
                    ></textarea>
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
