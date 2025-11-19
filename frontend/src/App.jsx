import About from "./components/About";
import Expericne from "./components/Experience";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Technologies from "./components/Technologies";

const App = () => {
  return(
    <div className="app-container ">

      <Header />

      <div className="app-body row">
        
        <div className="body-left col col-12 col-md-4 mb-4 mb-md-0">
        
          <Profile />
        
        </div>

        <div className="body-right col-12 col-md-8">
          <About />
          <Technologies />
          <Expericne />
        </div>

      </div>


    </div>
  );
};

export default App;