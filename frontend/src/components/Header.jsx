const Header = () => {
    return(
        <div className="header-container container-fluid px-5 d-flex  justify-content-between py-3 mt-2 border-bottom border-secondary" style={{backgroundColor : '#010409'}}>
            
            <div className="row row-cols-1 row-cols-sm-2 g-3">
                <div className="header-left col">
                    <h5>Giorgi Apridonidze / Portfolio</h5>
                </div>

                <div className="header-rigth col d-flex gap-4 align-items-center">
                            
                    <a href="#about" className="link-offset-3 link-underline link-underline-opacity-0 link-underline-opacity-100-hover">About</a>
                    <a href="#skills" className="link-offset-3 link-underline link-underline-opacity-0 link-underline-opacity-100-hover">Skills</a>
                    <a href="#projects" className="link-offset-3 link-underline link-underline-opacity-0 link-underline-opacity-100-hover">Projects</a>

                </div>
            </div>
        </div>
    );
};

export default Header; //exprting component