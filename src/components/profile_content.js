import React, { Fragment } from 'react'

function ProfileContent () {
  return (
    <Fragment>
      <div id='content_container'>
        <div className='block'>
          <h1>A propos de moi</h1>
          <blockquote className='profile_quote'>
            <p>"Jusqu'à présent, dans ma vie, je passe de moments actifs avec beaucoup de variété, des défis et des improvisations à des moments de tranquillité et de stabilité. Je me considère comme une personne tolérante et respectueuse avec un esprit ouvert et très honnête. J'aime vraiment écouter les histoires et les antécédents des gens et leurs différentes expériences."</p>
            <p>Diplômé de l'école ESPRIT en génie informatique en 2016. J'ai effectué un apprentissage de 5ans en développement C, OOP, Web, Mobile et Embarqué lors de cette formation.</p>
            <span className='entypo-quote' />
          </blockquote>
        </div>
        <div className='block'>
          <h2>A propos de moi</h2>
          <p>Jusqu'à présent, dans ma vie, je passe de moments actifs avec beaucoup de variété, des défis et des improvisations à des moments de tranquillité et de stabilité. Je me considère comme une personne tolérante et respectueuse avec un esprit ouvert et très honnête. J'aime vraiment écouter les histoires et les antécédents des gens et leurs différentes expériences.</p>
        </div>
        <div className='horizontal_line'>
          <div className='line_left' />
          <div className='left_circle' />
          <div className='central_circle' />
          <div className='right_circle' />
          <div className='line_right' />
        </div>
        <div className='block'>
          <h2>Philosophy</h2>
          <p>I belive in ethic and moral not in imposed rules that you "have to" do or follow.</p>
          <div className='philosophy_content'>
            <p>I believe life is made from different shades of grey, not from black and white. Furthermore, as a human being with rationality, I think it is our duty to take care of the world and treat others as one would like others to treat oneself. This way of perceiving reality affects my beliefs and my way of behaving. Summarizing on several points:</p>
            <ul>
              <li>Pragmatic</li>
              <li>Honest</li>
              <li>Respectful</li>
              <li>Open-minded</li>
              <li>Coherent</li>
            </ul>
            <div className='clear' />
          </div>
        </div>
        <div className='horizontal_line'>
          <div className='line_left' />
          <div className='left_circle' />
          <div className='central_circle' />
          <div className='right_circle' />
          <div className='line_right' />
        </div>
        <div className='last block'>
          <h2>Interests & Hobbies</h2>
          <p>I'm passionate about technology and human behavior, both determine almost all my interests and hobbies:</p>
          <ul>
            <li>Visiting new places</li>
            <li>Meeting people</li>
            <li>Having new experiences</li>
            <li>Hiking and Biking</li>
            <li>Web Developing</li>
            <li>Computer Gamming</li>
            <li>Manga and Anime</li>
          </ul>
        </div>
      </div>
      <div className='clear' />
    </Fragment>
  )
}

export default ProfileContent
