import React from 'react'

function LeftCol () {
  return (<div id='left_col'>
    <div className='profile_frame'>
      <div className='profile_picture' />
      { /* <!-- <img src="images/javier_latorre.jpg" alt="profile picture"> --> } */}
    </div>
    <div className='hello_content'>
      <h2>Salut!</h2>
      <p>I'm passionate about technology and human behavior, hardworker and a fast-learner with experience in around 10 different countries studying, working and volunteering.</p>
    </div>
    <div className='contact_details_content'>
      <h2>Contact details</h2>
      <p className='purple'>Phone:</p>
      <p>+216 52 129 435</p>
      <p className='purple'>Email:</p>
      <p>ahmed@abdelmoula.co</p>
      <p className='purple'>Adress:</p>
      <p>11 ,Musliem Ibn El Walid</p>
      <p>Ariana, Tunisie</p>
      <p>2083</p>
    </div>
    <a href='mailto:ahmed@abdelmoula.co' className='send_message_button'>
      <span className='cut1' />
      <span className='cut2' />
      <span className='content'>Send me a message <span className='fontawesome-double-angle-right' /></span>
    </a>
    <div className='get_social_content'>
      <h2>Get social</h2>
      <ul className='social_icons horizontal_list'>
        <li><a className='facebook' href='https://www.facebook.com/jlalovi'><span className='entypo-facebook-circled' /><span className='invisible'>Facebook</span></a></li>
        <li><a className='twitter' href='https://twitter.com/jlalovi'><span className='entypo-twitter-circled' /><span className='invisible'>Twitter</span></a></li>
        <li><a className='linkedin' href='https://www.linkedin.com/in/jlalovi/en'><span className='entypo-linkedin-circled' /><span className='invisible'>LinkedIn</span></a></li>
      </ul>
    </div>
  </div>)
}

export default LeftCol
