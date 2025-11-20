const Header = () => {
    return(
        <div className="header-container container-fluid px-5 d-flex  justify-content-between py-3 mt-2 border-bottom border-secondary" style={{backgroundColor : '#010409'}}>
            <div className="header-left">
                <h5>Giorgi Apridonidze / Portfolio</h5>
            </div>
            <div className="header-rigth d-flex gap-4 align-items-center">
                        
                    <a href="" className="link-offset-3 link-underline link-underline-opacity-0 link-underline-opacity-100-hover">About</a>
                    <a href="" className="link-offset-3 link-underline link-underline-opacity-0 link-underline-opacity-100-hover">Skills</a>
                    <a href="" className="link-offset-3 link-underline link-underline-opacity-0 link-underline-opacity-100-hover">Projects</a>

            </div>
        </div>
    );
};

export default Header;