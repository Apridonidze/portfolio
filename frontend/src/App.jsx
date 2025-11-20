
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import README from "./components/README";

const App = () => {
  
  const [toggleAlert,setToggleAlert] = useState({status : false, text : null})

  return(
    <div className="app-container">

      <Header />

      <div className="app-body py-3" >

        {toggleAlert.status && <h1>alert</h1>}
        
        <div className="row">

          <div className="body-left col col-4 ">
          
            <Profile setToggleAlert={setToggleAlert}/>
          
          </div>

          <div className="body-right d-flex flex-column col cols-8 ">
              <README />
              <Projects />
          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
};

export default App;