import './App.css';
import 'bulma';
import * as data from "./Data/data.json";

import Banner from "./component/Banner";
// import Navbar from "./component/Navbar";
import Section from "./component/Section";

function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Banner/>
      <div class = "container notification is-white">
        <Section prop = {data.intro}/>
      </div>
    </div>
  );
}

export default App;
