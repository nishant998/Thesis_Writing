import React from "react";
import "./Contact.css";
import { useState, useEffect } from "react";
import MessageIcon from "@material-ui/icons/Message";
import contact_us_image from "./contact_us_page.jpg";
import SendIcon from "@material-ui/icons/Send";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";

function Contact() {
  const [input_values, set_input_Values] = useState({
    full_name: "",
    email: "",
    phone: "",
    company_name: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    set_input_Values({
      ...input_values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact_page">
      <div className="contact_page_container1">
        <img className="contact_us_img" src={contact_us_image} alt="" />
        <div className="contact_page_container1_title">CONTACT US.</div>
        <div className="contact_page_container1_description">
          Just message us without any hesitation and we will contact you soon .
        </div>
      </div>
      <div className="contact_page_container2">
        <div className="contact_page_container2_left">
          <span className="contact_page_container2_left_title">
            <span className="text">Send us a message</span>
            <span className="icon">
              <MessageIcon />
            </span>
          </span>

          <form action="" onSubmit={handleSubmit}>
            <div className="only_inputfields">
              <div className="form__full_name">
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  placeholder="Enter name"
                  value={input_values.full_name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form__email">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  value={input_values.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form__phone">
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="Enter phone"
                  value={input_values.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form__company_name">
                <input
                  type="text"
                  name="company_name"
                  id="company_name"
                  placeholder="Enter company name"
                  value={input_values.company_name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form__msg">
              <span className="label_message">Write your message</span>
              <textarea
                name="message"
                value={input_values.message}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              onSubmit={handleSubmit}
              className="contact_us_button"
            >
              Send us Message
              <span className="send_icon">
                <SendIcon />
              </span>
            </button>
          </form>
        </div>
        <div className="contact_page_container2_right">
          <span className="container2__right_1">Contact Information</span>
          <span className="container2__right_2">
            <span className="con_icon">
              <LocationOnIcon />
            </span>{" "}
           G-21 Dmall , Indirapuram Ghaziabad , Uttar Pradesh 201014
          </span>
          <span className="container2__right_2">
            <span className="con_icon">
              <PhoneAndroidIcon />
            </span>{" "}
            +91 8368037530
          </span>
          <span className="container2__right_2">
            <span className="con_icon">
              <EmailIcon />
            </span>{" "}
            rahulprojects12@gmail.com
          </span>
          <span className="container2__right_3">
            <div className="con_icon_fb">
              <a href="https://www.facebook.com/">
                <FacebookIcon className="con_icon_fb_icon" />
              </a>
            </div>

            <div className="con_icon_wt">
            <a href="https://wa.me/8368037530">
              <WhatsAppIcon className="con_icon_wt_icon" />
            </a>
          </div>
          <div className="con_icon_ig">
            <a href="https://www.instagram.com">
              <InstagramIcon className="con_icon_ig_icon" />
            </a>
          </div>

          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
