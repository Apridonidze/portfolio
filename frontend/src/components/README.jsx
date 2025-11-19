import About from "./About";
import Expericne from "./Experience";
import Technologies from "./Technologies";

const README = () => {
    return(
        <div className="readme-container border bored-1 border-secondary mt-3 ms-4 rounded-1 p-2 " >
            <div className="readme-header border-bottom border-1 border-secondary py-2">
                <h4>Giorgi Apridonidze / README.md</h4>
            </div>
            <div className="readme-body">
                <About />
                <Technologies />
                <Expericne />
            </div>
        </div>
    );
};

export default README;