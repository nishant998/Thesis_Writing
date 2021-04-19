import React from 'react'
import './My_blogs_cards.css'

function My_blogs_cards({ content , image }) {
    return (
        <div className="my_blog_card">
      <div className="my_blog_card__top"><img src={image} alt="card image"/></div>
      <div className="my_blog_card__content">{content}</div>
      <div className="my_blog_card_button"><button type="submit">Read More</button></div>
    </div>
    )
}

export default My_blogs_cards
