
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import README from "./components/README";

const App = () => {
  return(
    <div className="app-container">

      <Header />

      <div className="app-body py-3" >
        
        <div className="row">

          <div className="body-left col col-4 ">
          
            <Profile />
          
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