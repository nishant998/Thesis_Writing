import React from "react";
import "./Home.css";
import FacebookIcon from "@material-ui/icons/Facebook";
// import { Link } from 'react-router-dom'
// import { Button } from 'semantic-ui-react';
import Button from "@material-ui/core/Button";
import My_blog from "./My_blog.js";
import Home__form from "./Home__form.js";
import Home_card from "./Home_card.js";
import Order_process_card from "./Order_process_card.js";
import Service_card from "./Service_card.js";
import RateReviewIcon from "@material-ui/icons/RateReview";
import testimonial_image from "./Testimonial_pic.jpg";
import about_photo1 from "./about_photo1.jpg";
import about_photo2 from "./about_photo2.jpg";
import about_photo3 from "./about_photo3.jpg";
import about_photo4 from "./about_photo4.jpg";
import about_photo5 from "./about_photo5.jpg";
import about_photo6 from "./about_photo6.jpg";
import services1 from "./services1.png";
import services2 from "./services2.png";
import services3 from "./services3.png";
import services4 from "./services4.png";
import order1 from "./order1.svg";
import order2 from "./order2.jpg";
import order3 from "./order3.svg";
import order4 from "./order4.svg";
import just_dial from "./just_dial.svg";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import arrow from "./arrow_png.png";
import company_logo from "./company_logo.png";
import home_cont3 from "./home_cont_3.svg";
import name1 from "./name1.png";
import { Link } from "@material-ui/core";

function Home() {
  return (
    <div className="home">
      <div className="svg_container_back">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30rem"
        preserveAspectRatio="xMinYMin meet"
        className="s_v_g"
        viewBox="0 0 765 290"
      >
        <path
          fill="#fcce98"
          fill-opacity="1"
          d="M0,288L1440,32L1440,0L0,0Z"
        ></path>
      </svg>
      </div>
      <div className="home__container1">
        <div className="home__container1_left_text">
          <img src={company_logo} alt="" id="compa_logo" />
        </div>

        <div className="home__container1_middle">
          <img src={home_cont3} alt=""  id="home_middle_image"/>
          <span className="home__title_down">
            WANT TO MAKE YOUR DISSERTATION WITH PLAGRIASM FREE CONTENT
          </span>
        </div>

        <div className="home__container1_right ">
          <div className="home__container1_right_option facebook">
            <a href="https://www.facebook.com/">
              <FacebookIcon className="left_option_icon facebook_icon" />
            </a>
          </div>

          <div className="home__container1_right_option whats_app">
            <a href="https://wa.me/8860950741">
              <WhatsAppIcon className="right_option_icon whats_app_icon" />
            </a>
          </div>
          <div className="home__container1_right_option Instagram">
            <a href="https://www.instagram.com">
              <InstagramIcon className="right_option_icon Instagram_icon" />
            </a>
          </div>

          <div className="home__container1_right_option review">
            <a href="https://www.jdmart.com/Delhi/Rahul-Projects-and-Dissertations/011PXX11-XX11-190207164726-W9U8_BZDET/catalogue">
              <RateReviewIcon className="right_option_icon review_icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="services_container">
        <div className="service_title">OUR Services</div>
        <div className="service_card">
          <Service_card title="Thesis Writing" image={services1} />
          <Service_card title="Dissertation Book" image={services2} />
          <Service_card
            title="Movie Review / Critical Thinking"
            image={services3}
          />
          <Service_card
            title="Review Report Editing and proofreading"
            image={services4}
          />
        </div>
      </div>

      <div className="home__container2">
        <div className="home__container2_photos">
          <img src={about_photo1} alt="no idea" className="container2_photos" />
          <img src={about_photo2} alt="no idea" className="container2_photos" />
          <img src={about_photo3} alt="no idea" className="container2_photos" />
          <img src={about_photo4} alt="no idea" className="container2_photos" />
          <img src={about_photo5} alt="no idea" className="container2_photos" />
          <img src={about_photo6} alt="no idea" className="container2_photos" />
        </div>

        <div className="home__container2_about">
          <span className="about__text">About</span>
          <span className="about__text_under">
            Lorem ipsum dolor sit amet consectetur .
          </span>
          <span className="home__container2_content">
            Our writing firm is a welcoming community where you are always
            welcome. Rahul projects and dissertations isn't just another writing
            service; it's an organization that has a unique approach to writing.
            Our mission is to make you stronger without causing you to become
            disoriented or tired. We will assist you in better understanding the
            subject and achieving a higher academic standard. Our experts will
            assist you in overcoming the challenges of academic writing. Order
            our online assistance and receive a fantastic document to use as an
            example. Find the help and resources you can rely on at any time.you
            can find us on various other platforms. In just dial we have more
            than 350 reviews with overall more than 4.5 ratings
            <div className="container3_right_content_button">
              <Button variant="outlined" color="primary">
                <a href="./About">Read More</a>
              </Button>
            </div>
          </span>
        </div>
      </div>

      <div className="home__container3">
        <div className="home__container3_left">
          <Home_card
            className="home_card"
            top="Lorem, ipsum."
            title="Lorem ipsum dolor sit."
            content="Lorem ipsum dolor sit amet consectetur adipisicing Lorem, ipsum dolor."
          />
          <Home_card
            className="home_card"
            top="Lorem, ipsum."
            title="Lorem ipsum dolor sit."
            content="Lorem ipsum dolor sit amet consectetur adipisicing Lorem, ipsum dolor."
          />
          <Home_card
            className="home_card"
            top="Lorem, ipsum."
            title="Lorem ipsum dolor sit."
            content="Lorem ipsum dolor sit amet consectetur adipisicing Lorem, ipsum dolor."
          />
          <Home_card
            className="home_card"
            top="Lorem, ipsum."
            title="Lorem ipsum dolor sit."
            content="Lorem ipsum dolor sit amet consectetur adipisicing Lorem, ipsum dolor."
          />
          <Home_card
            className="home_card"
            top="Lorem, ipsum."
            title="Lorem ipsum dolor sit."
            content="Lorem ipsum dolor sit amet consectetur adipisicing Lorem, ipsum dolor."
          />
          <Home_card
            className="home_card"
            top="Lorem, ipsum."
            title="Lorem ipsum dolor sit."
            content="Lorem ipsum dolor sit amet consectetur adipisicing Lorem, ipsum dolor."
          />
        </div>

        <div className="home__container3_right">
          <div className="container3_right_container">
            <div className="container3_right_title">My best blog</div>
            <div className="container3_right_content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              adipisci exercitationem harum. Architecto quod voluptas incidunt
              mollitia maiores sequi velit ea facilis quam eos inventore
              laboriosam veritatis, voluptatem tenetur dolores.
            </div>
            <div className="container3_right_content_button">
              <Button variant="outlined" color="primary">
                <a href="./Myblog">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="home__container4">
        <span className="testimonial">TESTIMONIAL</span>
        <div className="testimonial_description">
          <span className="testimonial_content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nam
            architecto optio corrupti labore, eum totam eligendi quia iusto
            doloremque officiis eius quis deserunt quisquam similique ratione
            sapiente! Exercitationem, minus.
          </span>
          <span className="testimonial_name">Rahul Singh</span>
          <span className="testimonial_work">Former CIA Agent</span>
        </div>
        <div className="testimonial_image">
          <img src={testimonial_image} alt="my image" />
        </div>
      </div> */}

      <div className="order_process">
        <div className="order_process_title">Ordering Process</div>
        <div className="order_process_cards_list">
          <Order_process_card
            title="Fill in the application"
            image={order1}
            content="The order process starts with the form, where you need to specify the type of research, guidelines, academic level, and deadline. Send  out  as more detailed and accurate as you can.
   If we need more details about the work you need, we will contact you"
          />
          <img src={arrow} alt="" className="order_process_arrow" />
          <Order_process_card
            title="Assistance with writers about the work"
            image={order2}
            content="We will connect you with the writers of your subjects to get your research purpose and discuss doubts or any special requirement you want you can discuss"
          />
          <img src={arrow} alt="" className="order_process_arrow" />
          <Order_process_card
            title="Easy pricing process"
            image={order3}
            content="Once you discuss  the details with the writer and get fully satisfied then we will give you the quotation after few minutes.
   Our process of chapter wise payment will get you more trust in us and will be updated about your work and can give us changes in meantime."
          />
          <img src={arrow} alt="" className="order_process_arrow" />
          <Order_process_card
            title="Order completed"
            image={order4}
            content="When the deadline comes, you will receive the completed research  with turn tin plagiarism report in your mailbox and to the personal account as well.
   Check and review the paper you get and if you have any question - let us know, we appreciate any feedback you give us"
          />
        </div>
        <Button variant="outlined" color="primary">
          <a href="./Contact">Order Now</a>
        </Button>
      </div>

      <div className="review_container">
        <span className="title" id="title_rev">
          REVIEWS & RATINGS - RAHUL PROJECTS AND DISSERTATIONS
        </span>
        <div className="review_content">
          <div className="review_left">
            <span>
              Rahul Projects and Dissertations in Ghaziabad, Delhi is one of the
              leading businesses in the Thesis Writing Services. Also known for
              Thesis Writing Services, PHD Thesis Writing Services, M Tech
              Thesis Writing Services, Thesis Writing Services For Master Of
              Education, MBA Assignment Writing Services, Plagiarism Checking
              Services, Thesis Writing Services For Computer Science, Law Thesis
              Writing Services and much more. Find Address, Contact Number,
              Reviews & Ratings, Photos, Maps of Rahul Projects and
              Dissertations, Ghaziabad, Delhi.
            </span>
          </div>
          <div className="review_right">
              <a href="https://www.jdmart.com/Delhi/Rahul-Projects-and-Dissertations/011PXX11-XX11-190207164726-W9U8_BZDET/catalogue">Click here </a>
          </div>
        </div>
      </div>

      <div className="home__container5">
        <div className="home__container5_inside">
          <span className="home__container5_title">Register Yourself</span>
          <span className="home__container5_content">
           Sign up right now to get connected with us 
          </span>
          <div className="home__container5_form">
            <Home__form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
