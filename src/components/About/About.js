import "./About.css";
import iconImage from "../../assets/images/logo.jpg";


export const About = () => {
  return (
    <section id="about" className="container container-about">
      <div className="about-right">
        <img src={iconImage} alt="" />
      </div>
      <div className="about-left">
        <span className="purple-text">
          ✋<span className="text-figma">Nouamane Elmkadem</span> {" "}
          <span className="purple-smoke-text">- Introduction</span>{" "}
        </span>
        <p className="gray-text">
          Hi my name is Nouamane and I love developing incredible products for the world. I have been developing for more than 5 years, you can see my{" "}
          <span className="white-text text-figma">
            <a href="">Portfolio</a>
          </span>.
        </p>
        <div className="d-flex justify-content-around">
          <ul className="tech-stack">
            <p className=" text-center">
              <p className="text-figma m-0">
                Web development
              </p>
            </p>
            <li>Front end
              <ul className="tech-stack m-0 mx-2">
                <li>React js</li>
                <li>Ui/Ux Designer</li>
              </ul>
            </li>
            <li>Back end
              <ul className="tech-stack m-0 mx-2">
                <li>Node js</li>
                <li>Express js</li>
              </ul>
            </li>
          </ul>
          <ul className="tech-stack">
            <p className=" text-center">
              <p className="text-figma m-0">
                Game development
              </p>
            </p>
            <li>Blender</li>
            <li>Unity Engine</li>
            <li>Enreal Engine 4</li>
            <li>Game Designer</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
            <li>Audacity</li>
          </ul>
        </div>
        <div className="d-flex justify-content-around">
          <ul className="tech-stack">
            <p className=" text-center">
              <p className="text-figma m-0">
                Tools
              </p>
            </p>
            <li>Git/GitHub</li>
            <li>Firebase</li>
            <li>MongoDb</li>
            <li>Android Studio</li>
            <li>PostgreSQL</li>
            <li>MySql</li>
            <li>Xampp</li>
            <li>Vs Code</li>
            <li>Postman</li>
            <li>Adobe XD</li>
            <li>Trello/Jira</li>
          </ul>
          <ul className="tech-stack">
            <p className=" text-center">
              <p className="text-figma m-0">
                Technologies
              </p>
            </p>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>Kotlin</li>
            <li>Python</li>
            <li>C Language</li>
            <li>C# </li>
            <li>C++</li>
          </ul>
        </div>
        {/* <a className="about-see" href="#">See more {"->"} </a> */}
      </div>

    </section>
  );
};
