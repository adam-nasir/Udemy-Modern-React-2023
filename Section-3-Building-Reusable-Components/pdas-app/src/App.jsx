import "bulma/css/bulma.css";
import ProfileCard from "./components/ProfileCard";
// import Parent from "./concepts/props/example/Parent";
import AlexaImage from "./assets/alexa.png";
import CortanaImage from "./assets/cortana.png";
import SiriImage from "./assets/siri.png";

export const App = () => {
  return (
    <div className="App">
      <section className="hero is-primary">
        <div className="hero-body">
          <h1 className="title">Personal Digital Assistant</h1>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                imageUrl={AlexaImage}
                altInfo="image of Alexa logo"
              />
            </div>
            <div className="column ">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                imageUrl={CortanaImage}
                altInfo="image of Cortana logo"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                imageUrl={SiriImage}
                altInfo="image of Siri logo"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
