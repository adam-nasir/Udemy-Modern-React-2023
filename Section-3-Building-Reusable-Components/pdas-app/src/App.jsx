import "bulma/css/bulma.css";
import ProfileCard from "./components/ProfileCard";
import Parent from "./lessons/props/example/PropsParent";
import SecondParent from "./lessons/destructing-props/example/PropsParent";
import AlexaImage from "./assets/alexa.png";
import CortanaImage from "./assets/cortana.png";
import SiriImage from "./assets/siri.png";

export const App = () => {
  return (
    <div className="App">
      {/* <Parent />
      <SecondParent /> */}
      <ProfileCard
        title="Alexa"
        handle="@alexa99"
        imageUrl={AlexaImage}
        altInfo="image of Alexa logo"
      />
      <ProfileCard
        title="Cortana"
        handle="@cortana32"
        imageUrl={CortanaImage}
        altInfo="image of Cortana logo"
      />
      <ProfileCard
        title="Siri"
        handle="@siri01"
        imageUrl={SiriImage}
        altInfo="image of Siri logo"
      />
    </div>
  );
};
