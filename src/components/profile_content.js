import React, { Fragment } from "react";

function ProfileContent() {
  const renderHorizontalLine = () => {
    return (
      <div className="horizontal_line">
        <div className="line_left" />
        <div className="left_circle" />
        <div className="central_circle" />
        <div className="right_circle" />
        <div className="line_right" />
      </div>
    );
  };
  return (
    <Fragment>
      <div id="content_container">
        <div className="block">
          <h1>Profil Personnel</h1>
          <blockquote className="profile_quote">
            <p>
              "Jusqu’à présent, dans ma vie, je passe de moments actifs avec
              beaucoup de variété, des défis et des improvisations à des moments
              de tranquillité et de stabilité. Je me considère comme une
              personne tolérante et respectueuse avec un esprit ouvert et très
              honnête. J’aime vraiment écouter les histoires et les antécédents
              des gens et leurs différentes expériences."
            </p>
            <p>
              Diplômé de l’école ESPRIT en génie informatique en 2016. J’ai
              effectué un apprentissage de 5ans en développement C, OOP, Web,
              Mobile et Embarqué lors de cette formation.
            </p>
            <p>
              Je suis maintenant développeur Full Stack JS depuis 3 ans. Je suis
              très diligent en je m’engage à produire un code de qualité. Je
              suis toujours particulièrement intéressé par des challenges
              techniques, j’aime résoudre des problèmes complexes et je
              participe à la création d’applications performantes.
            </p>
            <span className="entypo-quote" />
          </blockquote>
        </div>
        {renderHorizontalLine()}
        <div className="block">
          <h2>NIVEAUX D’INTERVENTION</h2>
          <ul>
            <li>Définition des besoins.</li>
            <li>Développement & Conception.</li>
            <li>Réalisation des composant.</li>
            <li>Réalisation des services.</li>
            <li>Test & Maintenance.</li>
            <li>Agilité/DEVOPS.</li>
            <li>UI/UX.</li>
          </ul>
        </div>
        {renderHorizontalLine()}
        <div className="block">
          <h2 id="COMPETENCES">COMPETENCES</h2>
          <ul>
            <li>
              <b>Bases de Données: </b> <i>PostgreSQL, MySQL, MongoDB, Redis</i>
            </li>
            <li>
              <b>Développement : </b>
              <i>
                JavaScript, jQuery, HTML, CSS, PHP, React, NodeJS, Express,
                Angular
              </i>
            </li>
            <li>
              <b>Autres:</b>{" "}
              <i>
                Docker, Ansible, Vagrant,Docker,Jenkins,Git, GitLab, Ionic,
                Cordova ...etc
              </i>
            </li>
            <li>
              <b>Outils:</b>
              <i>Visual Studio Code, Postman, Sequel Pro, GitKraken..etc</i>
            </li>
            <li>
              <b>Méthodes:</b> <i>Scrum</i>
            </li>
            <li>
              <b>Modélisation:</b> <i>UML, MV</i>C
            </li>
          </ul>
        </div>
        {renderHorizontalLine()}
        <div className="block">
          <h2 id="EXPERIENCE">EXPERIENCE PROFESSIONNELLE</h2>
          <h4>Du 10/2018 – A Présent </h4>
          <h4>ADVEEZ, Informatique</h4>
          <ul>
            <li>
              <b>Projet : </b>
              <i> Gestion des actifs de la flotte aéroportuaire</i>
            </li>
            <li>
              <b>Poste occupé: </b>
              <i> Développeur FullStackJS</i>
            </li>
          </ul>
          <p>
            Développement d'une application web avec React communiquant avec des
            APIs REST et Socket IO, basé sur l’architecture SOA, Ces services
            sont créer avec Node et ExpressJS, communicant avec différentes
            bases de données tels que PostgreSQL, MongoDB et Redis.
          </p>
          <ul>
            <li>
              La réalisation d'une analyse technique pour identifier, comprendre
              et analyser les besoins.
            </li>
            <li>
              La conception du plateforme en imaginant et en créant
              l'architecture technique.
            </li>
            <li>Création des tests. </li>
            <li>Création des nouveaux services REST.</li>
            <li>Développement des composants React.</li>
            <li>
              L'organisation de tests pour vérifier le bon fonctionnement des
              différentes fonctionnalités mises en place.
            </li>
            <li>Rédaction de la documentation technique et fonctionnelle.</li>
          </ul>
          <p>
            <b>Environnement: </b>
            <i>
              Visual Studio Code, Javascript, ReactJS, NodeJS, Express,
              PostgresSQL, MongoDB, Redis, Git, Jest, ...etc
            </i>
          </p>
          {/* <div className="philosophy_content">
            <p>
              I believe life is made from different shades of grey, not from
              black and white. Furthermore, as a human being with rationality, I
              think it is our duty to take care of the world and treat others as
              one would like others to treat oneself. This way of perceiving
              reality affects my beliefs and my way of behaving. Summarizing on
              several points:
            </p>
            <ul>
              <li>Pragmatic</li>
              <li>Honest</li>
              <li>Respectful</li>
              <li>Open-minded</li>
              <li>Coherent</li>
            </ul>
            <div className="clear" />
          </div>*/}
          <h4>Du 05/2017 – 09/2018 </h4>
          <h4>SHOURI, Informatique</h4>
          <ul>
            <li>
              <b>Projet : </b>
              <i> Gestion des services</i>
            </li>
            <li>
              <b>Poste occupé: </b>
              <i> Développeur back-end</i>
            </li>
          </ul>
          <p>
            Développement du Back-end APIs REST et Socket IO d’un réseau social
            qui permet aux utilisateurs d’assister et de participer à des
            évènements, Ces services sont basé sur l’architecture SOA avec Node
            et ExpressJS en tant que Technologie et MongoDB et Redis en bases de
            données.
          </p>
          <ul>
            <li> Définition des besoins.</li>
            <li> Rédaction des documents de spécifications.</li>
            <li> Création d’une application From Scratch.</li>
            <li>
              Réalisation des développements NodeJS et ExpressJS en utilisant
              JavaScript en back-end.
            </li>
            <li>
              L'organisation de tests pour vérifier le bon fonctionnement des
              différentes fonctionnalités mises en place.
            </li>
            <li>
              Contrôle des normes de qualité de code et optimisation des
              performances.
            </li>
            <li> Test est maintenance des modules développés.</li>
            <li> Rédaction de la documentation technique et fonctionnelle.</li>
          </ul>
          <p>
            <b>Environnement: </b>
            <i>
              Visual Studio Code, Javascript, NodeJS, ExpressJS, MongoDB,
              Socket.io, Nginx, Git, Redis, Mocha, Chai...etc
            </i>
          </p>
        </div>
        {renderHorizontalLine()}
        <div className="last block">
          <h2 id="FORMATION">FORMATION</h2>
          <div className="philosophy_content">
            <p>Diplôme d’ingénieur en génie logiciels</p>
            <ul>
              <li>
                <i>École sup. privée d’Ingénierie et de Technologies</i>
              </li>
              <li>
                <i>2016 - Tunis</i>
              </li>
            </ul>
            <p>Diplôme préparatoire en ingénierie</p>
            <ul>
              <li>
                <i>Institut préparatoire aux études d’ingénieurs de Tunis</i>
              </li>
              <li>
                <i>2013 - Tunis</i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="clear" />
    </Fragment>
  );
}

export default ProfileContent;
