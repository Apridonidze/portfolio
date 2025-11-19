import About from "./components/About";
import Header from "./components/Header";
import Profile from "./components/Profile";

const App = () => {
  return(
    <div className="app-container container-fluid">

      <Header />

      <div className="app-body container-fluid  row">
        
        <div className="body-left col col-3">
        
          <Profile />
        
        </div>

        <div className="body-right col-9">
          <About />
        </div>

      </div>


    </div>
  );
};

export default App;