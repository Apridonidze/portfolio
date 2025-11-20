import { useState } from "react"; //importing react hook

import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import README from "./components/README";
import Alert from "./components/Alert"; //importing components

const App = () => {
  
  const [toggleAlert,setToggleAlert] = useState({status : false, text : null}); //state to toggle Alert component when mail is copied

  return(
    <div className="app-container">

      <Header />

      <div className="app-body py-3 d-flex flex-column py-2 " >

        {toggleAlert.status && <><div className="alert-background position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-50" onClick={() => setToggleAlert({status : false, text : null})}></div><Alert setToggleAlert={setToggleAlert} toggleAlert={toggleAlert}/></>}
        
        <div className="row">

          <div className="body-left col col-4 ">
          
            <Profile setToggleAlert={setToggleAlert}/>
          
          </div>

          <div className="body-right d-flex flex-column col cols-8 mx-auto ">
              <README />
              <Projects />
          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
};

export default App; //exporting component