import React, { useState } from "react";
import Blog_slider from "./Blog_slider.js";
import "./My_blog.css";
// import image1 from './home__contact_example.jpg' ;
import about_photo1 from './about_photo1.jpg' ;
import about_photo2 from './about_photo2.jpg' ;
import about_photo3 from './about_photo3.jpg' ;
import about_photo4 from './about_photo4.jpg' ;
import about_photo5 from './about_photo5.jpg' ;
import about_photo6 from './about_photo6.jpg' ;
import My_blogs_cards from "./My_blogs_cards";

function My_blog() {
  return (
    <div className="my_blog_container">
      <div className="my_blog_container1">
        <Blog_slider className="container1_background" />
      </div>
      <div className="blog_container2">
        <div className="blog_container2_inner">
          <span className="blog_container2_inner_title">
            Article Processing Charge
          </span>
          <span className="blog_container2_inner_content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
            blanditiis maxime fugit non laboriosam, recusandae obcaecati sunt
            delectus voluptatibus nobis cum quis expedita. Quisquam nisi, cum
            optio dolor repudiandae sint assumenda possimus ea expedita ullam
            harum. Nemo doloremque at facilis beatae obcaecati, illum,
            accusantium necessitatibus laborum, quae ipsum voluptatem unde?
          </span>
          <button type="submit">Read More</button>
        </div>
      </div>
      <div className="my_blog_container3">
        <span className="blog_container3_title">My Articles</span>
        <div className="my_blog_container3_cards">
          <My_blogs_cards 
          title = "My Love life" 
          content = "Yes this is very important article about divorses and love life in college and schools and it is really very important"
          image = {about_photo1} />
          <My_blogs_cards 
          title = "My Love life" 
          content = "Yes this is very important article about divorses and love life in college and schools and it is really very important"
          image = {about_photo2} />
          <My_blogs_cards 
          title = "My Love life" 
          content = "Yes this is very important article about divorses and love life in college and schools and it is really very important"
          image = {about_photo3} />
          <My_blogs_cards 
          title = "My Love life" 
          content = "Yes this is very important article about divorses and love life in college and schools and it is really very important"
          image = {about_photo4} />
          <My_blogs_cards 
          title = "My Love life" 
          content = "Yes this is very important article about divorses and love life in college and schools and it is really very important"
          image = {about_photo5} />
          <My_blogs_cards 
          title = "My Love life" 
          content = "Yes this is very important article about divorses and love life in college and schools and it is really very important"
          image = {about_photo6} />
        </div>
      </div>
    </div>
  );
}

export default My_blog;
