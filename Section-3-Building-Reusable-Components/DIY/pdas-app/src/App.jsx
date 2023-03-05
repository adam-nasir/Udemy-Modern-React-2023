import "bulma/css/bulma.css";
import ProfileCard from "./components/ProfileCard";
import AlexaImg from "./assets/alexa.png";
import CortanaImg from "./assets/cortana.png";
import SiriImg from "./assets/siri.png";

function App() {
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
            <div className="column">
              <ProfileCard
                title="Alexa"
                handle="@alex99"
                imageUrl={AlexaImg}
                altInfo="Alexa logo"
                description="Alexa was created by amazon and help people buy stuff."
              />
            </div>
            <div className="column">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                imageUrl={CortanaImg}
                altInfo="Cortana logo"
                description="Cortana was made by Microsoft. Who knows what it does."
              />
            </div>
            <div className="column">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                imageUrl={SiriImg}
                altInfo="Siri logo"
                description="Siri is being made by Apple and it is being phased out."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
