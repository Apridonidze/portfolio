import About from "./About";
import Expericne from "./Experience";
import Technologies from "./Technologies"; //importing component

const README = () => {
    return(
        <div className="readme-container container border bored-1 border-secondary mt-3 mx-1 rounded-1 p-2 " >
            <div className="readme-header border-bottom border-1 border-secondary py-2">
                <h6 className="px-2 text-secondary">Giorgi Apridonidze / README.md </h6>
            </div>
            <div className="readme-body">
                <About />
                <Technologies />
                <Expericne />
            </div>
        </div>
    );
};

export default README; //exporting component