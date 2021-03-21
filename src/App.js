import './App.css';
import 'bulma';
import * as data from "./Data/data.json";

import Banner from "./component/Banner";
import Section from "./component/Section";

function App() {
  return (
    <div>
      <Banner/>
      <div class = "container notification is-white">
        {data.intro.map(data => <Section prop = {data}/>)}
      </div>
    </div>
  );
}

export default App;
