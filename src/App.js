import './App.css';
import 'bulma';
import * as data from "./Data/data.json";

import Banner from "./component/Banner";
import Section from "./component/Section";
import ImgSection from "./component/ImgSection";

function App() {
  return (
    <div>
      <Banner/>
      <div class = "container notification is-white">
        {data.intro.map(data => 
          data.type === "text" ? <Section prop = {data}/> : <ImgSection prop = {data}/>)}
      </div>
    </div>
  );
}

export default App;
