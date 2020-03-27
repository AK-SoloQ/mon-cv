// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

// hello.test.js, à nouveau

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import App from "./App";

let container = null;
beforeEach(() => {
  // met en place un élément DOM comme cible de rendu
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // nettoie en sortie de test
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("devrait afficher la page", () => {
  act(() => {
    render(<App />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div id=\\"header\\">
      <div class=\\"header_logotype_container\\">
        <h1 class=\\"logotype_name\\">Abdelmoula <span class=\\"purple\\">Ahmed</span></h1>
        <h2 class=\\"logotype_occupation\\">FullStack JS Developer</h2>
      </div>
      <div class=\\"header_menu_container\\">
        <ul class=\\"download_print_buttons horizontal_list\\"></ul>
        <div class=\\"clear\\"></div>
        <ul class=\\"header_menu horizontal_list\\">
          <li><a class=\\"no_border purple\\" href=\\"#\\">Profile</a></li>
          <li><a href=\\"#\\">Education</a></li>
          <li><a href=\\"#\\">Skills</a></li>
          <li><a href=\\"#\\">Work Experience</a></li>
          <li><a href=\\"#\\">Featured Projects</a></li>
          <li><a href=\\"#\\">Awards</a></li>
        </ul>
      </div>
    </div>
    <div id=\\"left_col\\">
      <div class=\\"profile_frame\\">
        <div class=\\"profile_picture\\"></div>
      </div>
      <div class=\\"hello_content\\">
        <h2>Salut!</h2>
        <p>I'm passionate about technology and human behavior, hardworker and a fast-learner with experience in around 10 different countries studying, working and volunteering.</p>
      </div>
      <div class=\\"contact_details_content\\">
        <h2>Contact details</h2>
        <p class=\\"purple\\">Phone:</p>
        <p>+216 52 12* ***</p>
        <p class=\\"purple\\">Email:</p>
        <p>ahmed@abdelmoula.co</p>
        <p class=\\"purple\\">Adress:</p>
        <p>11 ,Musliem Ibn El Walid</p>
        <p>Ariana, Tunisie</p>
        <p>2083</p>
      </div><a href=\\"mailto:ahmed@abdelmoula.co\\" class=\\"send_message_button\\"><span class=\\"cut1\\"></span><span class=\\"cut2\\"></span><span class=\\"content\\">Send me a message <span class=\\"fontawesome-double-angle-right\\"></span></span></a>
      <div class=\\"get_social_content\\">
        <h2>Get social</h2>
        <ul class=\\"social_icons horizontal_list\\">
          <li><a class=\\"facebook\\" href=\\"https://www.facebook.com/jlalovi\\"><span class=\\"entypo-facebook-circled\\"></span><span class=\\"invisible\\">Facebook</span></a></li>
          <li><a class=\\"twitter\\" href=\\"https://twitter.com/jlalovi\\"><span class=\\"entypo-twitter-circled\\"></span><span class=\\"invisible\\">Twitter</span></a></li>
          <li><a class=\\"linkedin\\" href=\\"https://www.linkedin.com/in/jlalovi/en\\"><span class=\\"entypo-linkedin-circled\\"></span><span class=\\"invisible\\">LinkedIn</span></a></li>
        </ul>
      </div>
    </div>
    <div id=\\"content_container\\">
      <div class=\\"block\\">
        <h1>Profil Personnel</h1>
        <blockquote class=\\"profile_quote\\">
          <p>\\"Jusqu’à présent, dans ma vie, je passe de moments actifs avec beaucoup de variété, des défis et des improvisations à des moments de tranquillité et de stabilité. Je me considère comme une personne tolérante et respectueuse avec un esprit ouvert et très honnête. J’aime vraiment écouter les histoires et les antécédents des gens et leurs différentes expériences.\\"</p>
          <p>Diplômé de l’école ESPRIT en génie informatique en 2016. J’ai effectué un apprentissage de 5ans en développement C, OOP, Web, Mobile et Embarqué lors de cette formation.</p>
          <p>Je suis maintenant développeur Full Stack JS depuis 3 ans. Je suis très diligent en je m’engage à produire un code de qualité. Je suis toujours particulièrement intéressé par des challenges techniques, j’aime résoudre des problèmes complexes et je participe à la création d’applications performantes.</p><span class=\\"entypo-quote\\"></span>
        </blockquote>
      </div>
      <div class=\\"horizontal_line\\">
        <div class=\\"line_left\\"></div>
        <div class=\\"left_circle\\"></div>
        <div class=\\"central_circle\\"></div>
        <div class=\\"right_circle\\"></div>
        <div class=\\"line_right\\"></div>
      </div>
      <div class=\\"block\\">
        <h2>NIVEAUX D’INTERVENTION</h2>
        <ul>
          <li>Définition des besoins.</li>
          <li>Développement &amp; Conception.</li>
          <li>Réalisation des composant.</li>
          <li>Réalisation des services.</li>
          <li>Test &amp; Maintenance.</li>
          <li>Agilité/DEVOPS.</li>
          <li>UI/UX.</li>
        </ul>
      </div>
      <div class=\\"horizontal_line\\">
        <div class=\\"line_left\\"></div>
        <div class=\\"left_circle\\"></div>
        <div class=\\"central_circle\\"></div>
        <div class=\\"right_circle\\"></div>
        <div class=\\"line_right\\"></div>
      </div>
      <div class=\\"last block\\">
        <h2>COMPETENCES</h2>
        <ul>
          <li><b>Bases de Données: </b> <i>PostgreSQL, MySQL, MongoDB, Redis</i></li>
          <li><b>Développement : </b><i>JavaScript, jQuery, HTML, CSS, PHP, React, NodeJS, Express, Angular</i></li>
          <li><b>Autres:</b> <i>Docker, Ansible, Vagrant,Docker,Jenkins,Git, GitLab, Ionic, Cordova ...etc</i></li>
          <li><b>Outils:</b><i>Visual Studio Code, Postman, Sequel Pro, GitKraken..etc</i></li>
          <li><b>Méthodes:</b> <i>Scrum</i></li>
          <li><b>Modélisation:</b> <i>UML, MV</i>C</li>
        </ul>
      </div>
      <div class=\\"horizontal_line\\">
        <div class=\\"line_left\\"></div>
        <div class=\\"left_circle\\"></div>
        <div class=\\"central_circle\\"></div>
        <div class=\\"right_circle\\"></div>
        <div class=\\"line_right\\"></div>
      </div>
      <div class=\\"last block\\">
        <h2>FORMATION</h2>
        <div class=\\"philosophy_content\\">
          <p>Diplôme d’ingénieur en génie logiciels</p>
          <ul>
            <li><i>École sup. privée d’Ingénierie et de Technologies</i></li>
            <li><i>2016 - Tunis</i></li>
          </ul>
          <p>Diplôme préparatoire en ingénierie</p>
          <ul>
            <li><i>Institut préparatoire aux études d’ingénieurs de Tunis</i></li>
            <li><i>2013 - Tunis</i></li>
          </ul>
          <p>Diplôme baccalauréat</p>
          <ul>
            <li><i>Lycée EL WAFA</i></li>
            <li><i>2010 - Ariana</i></li>
          </ul>
        </div>
      </div>
      <div class=\\"horizontal_line\\">
        <div class=\\"line_left\\"></div>
        <div class=\\"left_circle\\"></div>
        <div class=\\"central_circle\\"></div>
        <div class=\\"right_circle\\"></div>
        <div class=\\"line_right\\"></div>
      </div>
      <div class=\\"block\\">
        <h2>EXPERIENCE PROFESSIONNELLE</h2>
        <h4>Du 10/2018 – A Présent </h4>
        <h4>ADVEEZ, Informatique</h4>
        <ul>
          <li><b>Projet : </b><i> Gestion des actifs de la flotte aéroportuaire</i></li>
          <li><b>Poste occupé: </b><i> Développeur FullStackJS</i></li>
        </ul>
        <p>Développement d'une application web avec React communiquant avec des APIs REST et Socket IO, basé sur l’architecture SOA, Ces services sont créer avec Node et ExpressJS, communicant avec différentes bases de données tels que PostgreSQL, MongoDB et Redis.</p>
        <ul>
          <li>La réalisation d'une analyse technique pour identifier, comprendre et analyser les besoins.</li>
          <li>La conception du plateforme en imaginant et en créant l'architecture technique.</li>
          <li>Création des tests. </li>
          <li>Création des nouveaux services REST.</li>
          <li>Développement des composants React.</li>
          <li>L'organisation de tests pour vérifier le bon fonctionnement des différentes fonctionnalités mises en place.</li>
          <li>Rédaction de la documentation technique et fonctionnelle.</li>
        </ul>
        <p><b>Environnement: </b><i>Visual Studio Code, Javascript, ReactJS, NodeJS, Express, PostgresSQL, MongoDB, Redis, Git, Jest, ...etc</i></p>
      </div>
    </div>
    <div class=\\"clear\\"></div>
    <div id=\\"footer\\">
      <p class=\\"footer_name\\">Ahmed Abdelmoula CV 2020</p>
    </div>"
  `); /* …rempli automatiquement par Jest… */

  act(() => {
    render(<App name="Jenny" />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div id=\\"header\\">
      <div class=\\"header_logotype_container\\">
        <h1 class=\\"logotype_name\\">Abdelmoula <span class=\\"purple\\">Ahmed</span></h1>
        <h2 class=\\"logotype_occupation\\">FullStack JS Developer</h2>
      </div>
      <div class=\\"header_menu_container\\">
        <ul class=\\"download_print_buttons horizontal_list\\"></ul>
        <div class=\\"clear\\"></div>
        <ul class=\\"header_menu horizontal_list\\">
          <li><a class=\\"no_border purple\\" href=\\"#\\">Profile</a></li>
          <li><a href=\\"#\\">Education</a></li>
          <li><a href=\\"#\\">Skills</a></li>
          <li><a href=\\"#\\">Work Experience</a></li>
          <li><a href=\\"#\\">Featured Projects</a></li>
          <li><a href=\\"#\\">Awards</a></li>
        </ul>
      </div>
    </div>
    <div id=\\"left_col\\">
      <div class=\\"profile_frame\\">
        <div class=\\"profile_picture\\"></div>
      </div>
      <div class=\\"hello_content\\">
        <h2>Salut!</h2>
        <p>I'm passionate about technology and human behavior, hardworker and a fast-learner with experience in around 10 different countries studying, working and volunteering.</p>
      </div>
      <div class=\\"contact_details_content\\">
        <h2>Contact details</h2>
        <p class=\\"purple\\">Phone:</p>
        <p>+216 52 12* ***</p>
        <p class=\\"purple\\">Email:</p>
        <p>ahmed@abdelmoula.co</p>
        <p class=\\"purple\\">Adress:</p>
        <p>11 ,Musliem Ibn El Walid</p>
        <p>Ariana, Tunisie</p>
        <p>2083</p>
      </div><a href=\\"mailto:ahmed@abdelmoula.co\\" class=\\"send_message_button\\"><span class=\\"cut1\\"></span><span class=\\"cut2\\"></span><span class=\\"content\\">Send me a message <span class=\\"fontawesome-double-angle-right\\"></span></span></a>
      <div class=\\"get_social_content\\">
        <h2>Get social</h2>
        <ul class=\\"social_icons horizontal_list\\">
          <li><a class=\\"facebook\\" href=\\"https://www.facebook.com/jlalovi\\"><span class=\\"entypo-facebook-circled\\"></span><span class=\\"invisible\\">Facebook</span></a></li>
          <li><a class=\\"twitter\\" href=\\"https://twitter.com/jlalovi\\"><span class=\\"entypo-twitter-circled\\"></span><span class=\\"invisible\\">Twitter</span></a></li>
          <li><a class=\\"linkedin\\" href=\\"https://www.linkedin.com/in/jlalovi/en\\"><span class=\\"entypo-linkedin-circled\\"></span><span class=\\"invisible\\">LinkedIn</span></a></li>
        </ul>
      </div>
    </div>
    <div id=\\"content_container\\">
      <div class=\\"block\\">
        <h1>Profil Personnel</h1>
        <blockquote class=\\"profile_quote\\">
          <p>\\"Jusqu’à présent, dans ma vie, je passe de moments actifs avec beaucoup de variété, des défis et des improvisations à des moments de tranquillité et de stabilité. Je me considère comme une personne tolérante et respectueuse avec un esprit ouvert et très honnête. J’aime vraiment écouter les histoires et les antécédents des gens et leurs différentes expériences.\\"</p>
          <p>Diplômé de l’école ESPRIT en génie informatique en 2016. J’ai effectué un apprentissage de 5ans en développement C, OOP, Web, Mobile et Embarqué lors de cette formation.</p>
          <p>Je suis maintenant développeur Full Stack JS depuis 3 ans. Je suis très diligent en je m’engage à produire un code de qualité. Je suis toujours particulièrement intéressé par des challenges techniques, j’aime résoudre des problèmes complexes et je participe à la création d’applications performantes.</p><span class=\\"entypo-quote\\"></span>
        </blockquote>
      </div>
      <div class=\\"horizontal_line\\">
        <div class=\\"line_left\\"></div>
        <div class=\\"left_circle\\"></div>
        <div class=\\"central_circle\\"></div>
        <div class=\\"right_circle\\"></div>
        <div class=\\"line_right\\"></div>
      </div>
      <div class=\\"block\\">
        <h2>NIVEAUX D’INTERVENTION</h2>
        <ul>
          <li>Définition des besoins.</li>
          <li>Développement &amp; Conception.</li>
          <li>Réalisation des composant.</li>
          <li>Réalisation des services.</li>
          <li>Test &amp; Maintenance.</li>
          <li>Agilité/DEVOPS.</li>
          <li>UI/UX.</li>
        </ul>
      </div>
      <div class=\\"horizontal_line\\">
        <div class=\\"line_left\\"></div>
        <div class=\\"left_circle\\"></div>
        <div class=\\"central_circle\\"></div>
        <div class=\\"right_circle\\"></div>
        <div class=\\"line_right\\"></div>
      </div>
      <div class=\\"last block\\">
        <h2>COMPETENCES</h2>
        <ul>
          <li><b>Bases de Données: </b> <i>PostgreSQL, MySQL, MongoDB, Redis</i></li>
          <li><b>Développement : </b><i>JavaScript, jQuery, HTML, CSS, PHP, React, NodeJS, Express, Angular</i></li>
          <li><b>Autres:</b> <i>Docker, Ansible, Vagrant,Docker,Jenkins,Git, GitLab, Ionic, Cordova ...etc</i></li>
          <li><b>Outils:</b><i>Visual Studio Code, Postman, Sequel Pro, GitKraken..etc</i></li>
          <li><b>Méthodes:</b> <i>Scrum</i></li>
          <li><b>Modélisation:</b> <i>UML, MV</i>C</li>
        </ul>
      </div>
      <div class=\\"horizontal_line\\">
        <div class=\\"line_left\\"></div>
        <div class=\\"left_circle\\"></div>
        <div class=\\"central_circle\\"></div>
        <div class=\\"right_circle\\"></div>
        <div class=\\"line_right\\"></div>
      </div>
      <div class=\\"last block\\">
        <h2>FORMATION</h2>
        <div class=\\"philosophy_content\\">
          <p>Diplôme d’ingénieur en génie logiciels</p>
          <ul>
            <li><i>École sup. privée d’Ingénierie et de Technologies</i></li>
            <li><i>2016 - Tunis</i></li>
          </ul>
          <p>Diplôme préparatoire en ingénierie</p>
          <ul>
            <li><i>Institut préparatoire aux études d’ingénieurs de Tunis</i></li>
            <li><i>2013 - Tunis</i></li>
          </ul>
          <p>Diplôme baccalauréat</p>
          <ul>
            <li><i>Lycée EL WAFA</i></li>
            <li><i>2010 - Ariana</i></li>
          </ul>
        </div>
      </div>
      <div class=\\"horizontal_line\\">
        <div class=\\"line_left\\"></div>
        <div class=\\"left_circle\\"></div>
        <div class=\\"central_circle\\"></div>
        <div class=\\"right_circle\\"></div>
        <div class=\\"line_right\\"></div>
      </div>
      <div class=\\"block\\">
        <h2>EXPERIENCE PROFESSIONNELLE</h2>
        <h4>Du 10/2018 – A Présent </h4>
        <h4>ADVEEZ, Informatique</h4>
        <ul>
          <li><b>Projet : </b><i> Gestion des actifs de la flotte aéroportuaire</i></li>
          <li><b>Poste occupé: </b><i> Développeur FullStackJS</i></li>
        </ul>
        <p>Développement d'une application web avec React communiquant avec des APIs REST et Socket IO, basé sur l’architecture SOA, Ces services sont créer avec Node et ExpressJS, communicant avec différentes bases de données tels que PostgreSQL, MongoDB et Redis.</p>
        <ul>
          <li>La réalisation d'une analyse technique pour identifier, comprendre et analyser les besoins.</li>
          <li>La conception du plateforme en imaginant et en créant l'architecture technique.</li>
          <li>Création des tests. </li>
          <li>Création des nouveaux services REST.</li>
          <li>Développement des composants React.</li>
          <li>L'organisation de tests pour vérifier le bon fonctionnement des différentes fonctionnalités mises en place.</li>
          <li>Rédaction de la documentation technique et fonctionnelle.</li>
        </ul>
        <p><b>Environnement: </b><i>Visual Studio Code, Javascript, ReactJS, NodeJS, Express, PostgresSQL, MongoDB, Redis, Git, Jest, ...etc</i></p>
      </div>
    </div>
    <div class=\\"clear\\"></div>
    <div id=\\"footer\\">
      <p class=\\"footer_name\\">Ahmed Abdelmoula CV 2020</p>
    </div>"
  `); /* …rempli automatiquement par Jest… */

  act(() => {
    render(<App name="Margaret" />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div id=\\"header\\">
      <div class=\\"header_logotype_container\\">
        <h1 class=\\"logotype_name\\">Abdelmoula <span class=\\"purple\\">Ahmed</span></h1>
        <h2 class=\\"logotype_occupation\\">FullStack JS Developer</h2>
      </div>
      <div class=\\"header_menu_container\\">
        <ul class=\\"download_print_buttons horizontal_list\\"></ul>
        <div class=\\"clear\\"></div>
        <ul class=\\"header_menu horizontal_list\\">
          <li><a class=\\"no_border purple\\" href=\\"#\\">Profile</a></li>
          <li><a href=\\"#\\">Education</a></li>
          <li><a href=\\"#\\">Skills</a></li>
          <li><a href=\\"#\\">Work Experience</a></li>
          <li><a href=\\"#\\">Featured Projects</a></li>
          <li><a href=\\"#\\">Awards</a></li>
        </ul>
      </div>
    </div>
    <div id=\\"left_col\\">
      <div class=\\"profile_frame\\">
        <div class=\\"profile_picture\\"></div>
      </div>
      <div class=\\"hello_content\\">
        <h2>Salut!</h2>
        <p>I'm passionate about technology and human behavior, hardworker and a fast-learner with experience in around 10 different countries studying, working and volunteering.</p>
      </div>
      <div class=\\"contact_details_content\\">
        <h2>Contact details</h2>
        <p class=\\"purple\\">Phone:</p>
        <p>+216 52 12* ***</p>
        <p class=\\"purple\\">Email:</p>
        <p>ahmed@abdelmoula.co</p>
        <p class=\\"purple\\">Adress:</p>
        <p>11 ,Musliem Ibn El Walid</p>
        <p>Ariana, Tunisie</p>
        <p>2083</p>
      </div><a href=\\"mailto:ahmed@abdelmoula.co\\" class=\\"send_message_button\\"><span class=\\"cut1\\"></span><span class=\\"cut2\\"></span><span class=\\"content\\">Send me a message <span class=\\"fontawesome-double-angle-right\\"></span></span></a>
      <div class=\\"get_social_content\\">
        <h2>Get social</h2>
        <ul class=\\"social_icons horizontal_list\\">
          <li><a class=\\"facebook\\" href=\\"https://www.facebook.com/jlalovi\\"><span class=\\"entypo-facebook-circled\\"></span><span class=\\"invisible\\">Facebook</span></a></li>
          <li><a class=\\"twitter\\" href=\\"https://twitter.com/jlalovi\\"><span class=\\"entypo-twitter-circled\\"></span><span class=\\"invisible\\">Twitter</span></a></li>
          <li><a class=\\"linkedin\\" href=\\"https://www.linkedin.com/in/jlalovi/en\\"><span class=\\"entypo-linkedin-circled\\"></span><span class=\\"invisible\\">LinkedIn</span></a></li>
        </ul>
      </div>
    </div>
    <div id=\\"content_container\\">
      <div class=\\"block\\">
        <h1>Profil Personnel</h1>
        <blockquote class=\\"profile_quote\\">
          <p>\\"Jusqu’à présent, dans ma vie, je passe de moments actifs avec beaucoup de variété, des défis et des improvisations à des moments de tranquillité et de stabilité. Je me considère comme une personne tolérante et respectueuse avec un esprit ouvert et très honnête. J’aime vraiment écouter les histoires et les antécédents des gens et leurs différentes expériences.\\"</p>
          <p>Diplômé de l’école ESPRIT en génie informatique en 2016. J’ai effectué un apprentissage de 5ans en développement C, OOP, Web, Mobile et Embarqué lors de cette formation.</p>
          <p>Je suis maintenant développeur Full Stack JS depuis 3 ans. Je suis très diligent en je m’engage à produire un code de qualité. Je suis toujours particulièrement intéressé par des challenges techniques, j’aime résoudre des problèmes complexes et je participe à la création d’applications performantes.</p><span class=\\"entypo-quote\\"></span>
        </blockquote>
      </div>
      <div class=\\"horizontal_line\\">
        <div class=\\"line_left\\"></div>
        <div class=\\"left_circle\\"></div>
        <div class=\\"central_circle\\"></div>
        <div class=\\"right_circle\\"></div>
        <div class=\\"line_right\\"></div>
      </div>
      <div class=\\"block\\">
        <h2>NIVEAUX D’INTERVENTION</h2>
        <ul>
          <li>Définition des besoins.</li>
          <li>Développement &amp; Conception.</li>
          <li>Réalisation des composant.</li>
          <li>Réalisation des services.</li>
          <li>Test &amp; Maintenance.</li>
          <li>Agilité/DEVOPS.</li>
          <li>UI/UX.</li>
        </ul>
      </div>
      <div class=\\"horizontal_line\\">
        <div class=\\"line_left\\"></div>
        <div class=\\"left_circle\\"></div>
        <div class=\\"central_circle\\"></div>
        <div class=\\"right_circle\\"></div>
        <div class=\\"line_right\\"></div>
      </div>
      <div class=\\"last block\\">
        <h2>COMPETENCES</h2>
        <ul>
          <li><b>Bases de Données: </b> <i>PostgreSQL, MySQL, MongoDB, Redis</i></li>
          <li><b>Développement : </b><i>JavaScript, jQuery, HTML, CSS, PHP, React, NodeJS, Express, Angular</i></li>
          <li><b>Autres:</b> <i>Docker, Ansible, Vagrant,Docker,Jenkins,Git, GitLab, Ionic, Cordova ...etc</i></li>
          <li><b>Outils:</b><i>Visual Studio Code, Postman, Sequel Pro, GitKraken..etc</i></li>
          <li><b>Méthodes:</b> <i>Scrum</i></li>
          <li><b>Modélisation:</b> <i>UML, MV</i>C</li>
        </ul>
      </div>
      <div class=\\"horizontal_line\\">
        <div class=\\"line_left\\"></div>
        <div class=\\"left_circle\\"></div>
        <div class=\\"central_circle\\"></div>
        <div class=\\"right_circle\\"></div>
        <div class=\\"line_right\\"></div>
      </div>
      <div class=\\"last block\\">
        <h2>FORMATION</h2>
        <div class=\\"philosophy_content\\">
          <p>Diplôme d’ingénieur en génie logiciels</p>
          <ul>
            <li><i>École sup. privée d’Ingénierie et de Technologies</i></li>
            <li><i>2016 - Tunis</i></li>
          </ul>
          <p>Diplôme préparatoire en ingénierie</p>
          <ul>
            <li><i>Institut préparatoire aux études d’ingénieurs de Tunis</i></li>
            <li><i>2013 - Tunis</i></li>
          </ul>
          <p>Diplôme baccalauréat</p>
          <ul>
            <li><i>Lycée EL WAFA</i></li>
            <li><i>2010 - Ariana</i></li>
          </ul>
        </div>
      </div>
      <div class=\\"horizontal_line\\">
        <div class=\\"line_left\\"></div>
        <div class=\\"left_circle\\"></div>
        <div class=\\"central_circle\\"></div>
        <div class=\\"right_circle\\"></div>
        <div class=\\"line_right\\"></div>
      </div>
      <div class=\\"block\\">
        <h2>EXPERIENCE PROFESSIONNELLE</h2>
        <h4>Du 10/2018 – A Présent </h4>
        <h4>ADVEEZ, Informatique</h4>
        <ul>
          <li><b>Projet : </b><i> Gestion des actifs de la flotte aéroportuaire</i></li>
          <li><b>Poste occupé: </b><i> Développeur FullStackJS</i></li>
        </ul>
        <p>Développement d'une application web avec React communiquant avec des APIs REST et Socket IO, basé sur l’architecture SOA, Ces services sont créer avec Node et ExpressJS, communicant avec différentes bases de données tels que PostgreSQL, MongoDB et Redis.</p>
        <ul>
          <li>La réalisation d'une analyse technique pour identifier, comprendre et analyser les besoins.</li>
          <li>La conception du plateforme en imaginant et en créant l'architecture technique.</li>
          <li>Création des tests. </li>
          <li>Création des nouveaux services REST.</li>
          <li>Développement des composants React.</li>
          <li>L'organisation de tests pour vérifier le bon fonctionnement des différentes fonctionnalités mises en place.</li>
          <li>Rédaction de la documentation technique et fonctionnelle.</li>
        </ul>
        <p><b>Environnement: </b><i>Visual Studio Code, Javascript, ReactJS, NodeJS, Express, PostgresSQL, MongoDB, Redis, Git, Jest, ...etc</i></p>
      </div>
    </div>
    <div class=\\"clear\\"></div>
    <div id=\\"footer\\">
      <p class=\\"footer_name\\">Ahmed Abdelmoula CV 2020</p>
    </div>"
  `); /* …rempli automatiquement par Jest… */
});
