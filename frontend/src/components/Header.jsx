const Header = () => {
    return(
        <div className="container-fluid px-5 py-3 border-bottom border-secondary" style={{backgroundColor : '#010409'}}>
            
            <div className="row align-items-center">
                <div className="header-left col-12 col-sm-6">
                    <h5>Giorgi Apridonidze / Portfolio</h5>
                </div>

                <div className="header-rigth col-12 col-sm-6 gap-3 ">
                            
                    <a href="#about" className="link-offset-3 link-underline link-underline-opacity-0 link-underline-opacity-100-hover">About</a>
                    <a href="#skills" className="link-offset-3 link-underline link-underline-opacity-0 link-underline-opacity-100-hover">Skills</a>
                    <a href="#projects" className="link-offset-3 link-underline link-underline-opacity-0 link-underline-opacity-100-hover">Projects</a>

                </div>
            </div>
        </div>
    );
};

export default Header; //exprting component