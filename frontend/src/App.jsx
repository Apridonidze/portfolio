import Header from "./components/Header";
import Profile from "./components/Profile";

const App = () => {
  return(
    <div className="app-container container-fluid">

      <Header />

      <div className="app-body ">
        
        <div className="body-left">
        
          <Profile />
        
        </div>

        <div className="body-right"></div>
      </div>


    </div>
  );
};

export default App;