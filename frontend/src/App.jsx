
import Header from "./components/Header";
import Profile from "./components/Profile";
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

        <div className="body-right col cols-8">
            <README />
        </div>

      </div>

</div>
    </div>
  );
};

export default App;