import React from "react";

function LeftCol() {
  return (
    <div id="left_col">
      <div className="profile_frame">
        <div className="profile_picture">
          <img
            style={{ height: "88%" }}
            src="https://media-exp1.licdn.com/dms/image/C5103AQEwVMQJY42BAg/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=K9cw0tHXuqB4omr0ieh4VOjOiSnTrSIPx6JfbNSzAfk"
            alt="profile picture"
          ></img>
        </div>
        {/* <!-- <img src="images/javier_latorre.jpg" alt="profile picture"> --> } */}
      </div>
      <div className="hello_content">
        <h2>Bonjour!</h2>
        <p>
          Je suis maintenant développeur Full Stack JS depuis 3 ans. Je suis
          très diligent en je m’engage à produire un code de qualité. Je suis
          toujours particulièrement intéressé par des challenges techniques,
          j’aime résoudre des problèmes complexes et je participe à la création
          d’applications performantes.
        </p>
      </div>
      <div className="contact_details_content">
        <h2>Mes Coordonnées</h2>
        <p className="purple">Phone:</p>
        <p>+216 52 12* ***</p>
        <p className="purple">Email:</p>
        <p>ahmed@abdelmoula.co</p>
        <p className="purple">Adress:</p>
        <p>11 ,Musliem Ibn **********</p>
        <p>*********, Tunisie</p>
        <p>208*</p>
      </div>
      <a href="mailto:ahmed@abdelmoula.co" className="send_message_button">
        <span className="cut1" />
        <span className="cut2" />
        <span className="content">
          Contactez-moi <span className="fontawesome-double-angle-right" />
        </span>
      </a>
      <div className="get_social_content">
        <h2>Mes Sociaux</h2>
        <ul className="social_icons horizontal_list">
          <li>
            <a className="facebook" href="https://www.facebook.com">
              <span className="entypo-facebook-circled" />
              <span className="invisible">Facebook</span>
            </a>
          </li>
          <li>
            <a className="twitter" href="https://twitter.com/">
              <span className="entypo-twitter-circled" />
              <span className="invisible">Twitter</span>
            </a>
          </li>
          <li>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/ahmed-abd-sq/"
            >
              <span className="entypo-linkedin-circled" />
              <span className="invisible">LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftCol;
