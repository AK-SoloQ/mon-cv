import React, { Fragment } from 'react'

function ProfileContent () {
  const renderHorizontalLine = () => {
    return (
      <div className='horizontal_line'>
        <div className='line_left' />
        <div className='left_circle' />
        <div className='central_circle' />
        <div className='right_circle' />
        <div className='line_right' />
      </div>
    )
  }
  return (
    <Fragment>
      <div id='content_container'>
        <div className='block'>
          <h1>Profil Personnel</h1>
          <blockquote className='profile_quote'>
            <p>"Jusqu’à présent, dans ma vie, je passe de moments actifs avec beaucoup de variété, des défis et des improvisations à des moments de tranquillité et de stabilité. Je me considère comme une personne tolérante et respectueuse avec un esprit ouvert et très honnête. J’aime vraiment écouter les histoires et les antécédents des gens et leurs différentes expériences."</p>
            <p>Diplômé de l’école ESPRIT en génie informatique en 2016. J’ai effectué un apprentissage de 5ans en développement C, OOP, Web, Mobile et Embarqué lors de cette formation.</p>
            <p>Je suis maintenant développeur Full Stack JS depuis 3 ans. Je suis très diligent en je m’engage à produire un code de qualité. Je suis toujours particulièrement intéressé par des challenges techniques, j’aime résoudre des problèmes complexes et je participe à la création d’applications performantes.</p>
            <span className='entypo-quote' />
          </blockquote>
        </div>
        {renderHorizontalLine()}
        <div className='block'>
          <h2>NIVEAUX D’INTERVENTION</h2>
          <ul>
            <li>Définition des besoins.</li>
            <li>Développement & Conception.</li>
            <li>Réalisation des composant.</li>
            <li>Réalisation des services.</li>
            <li>Test est maintenance.</li>
            <li>Agilité/DEVOPS.</li>
            <li>UI/UX.</li>
          </ul>
        </div>
        {renderHorizontalLine()}
        <div className='last block'>
          <h2>COMPETENCES</h2>
          <ul>
            <li><b>Bases de Données: </b> <i>PostgreSQL, MySQL, MongoDB, Redis</i></li>
            <li><b>Développement : </b><i>JavaScript, jQuery, HTML, CSS, PHP, React, NodeJS, Express, Angular</i></li>
            <li><b>Autres:</b> <i>Docker, Ansible, Vagrant,Docker,Jenkins,Git, GitLab, Ionic, Cordova ...etc</i></li>
            <li><b>Outils:</b><i>Visual Studio Code, Postman, Sequel Pro, GitKraken..etc</i> </li>
            <li><b>Méthodes:</b> <i>Scrum</i></li>
            <li><b>Modélisation:</b> <i>UML, MV</i>C</li>
          </ul>
        </div>
        {renderHorizontalLine()}
        <div className='last block'>
          <h2>FORMATION</h2>
          <ul>
            <li><b>2016 - Tunis-Tunisie </b> <i>PostgreSQL, MySQL, MongoDB, Redis</i></li>
            <li><b>Développement : </b><i>JavaScript, jQuery, HTML, CSS, PHP, React, NodeJS, Express, Angular</i></li>
            <li><b>Autres:</b> <i>Docker, Ansible, Vagrant,Docker,Jenkins,Git, GitLab, Ionic, Cordova ...etc</i></li>
            <li><b>Outils:</b><i>Visual Studio Code, Postman, Sequel Pro, GitKraken..etc</i> </li>
            <li><b>Méthodes:</b> <i>Scrum</i></li>
            <li><b>Modélisation:</b> <i>UML, MV</i>C</li>
          </ul>
        </div>
        {renderHorizontalLine()}
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

      </div>
      <div className='clear' />
    </Fragment>
  )
}

export default ProfileContent
