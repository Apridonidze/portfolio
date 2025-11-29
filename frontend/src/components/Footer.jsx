const Footer = () => {
    return(
        <div className="footer-container container-fluid text-secondary px-5 py-3 mt-5 border-top border-secondary text-center ">
            
            <div className="row row-cols-1 row-cols-sm-3 g-3">

                <div className="footer-left col my-2">
                    <h6>© 2025 Portfolio</h6>
                </div>

                <div className="footer-center col d-flex gap-3 text-center d-flex justify-content-center my-2">

                    <a href="#about" className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">About</a>
                    <a href="#skills" className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Skills</a>
                    <a href="#projects" className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Projects</a>

                </div>

                <div className="footer-right col my-2">

                    <h6>Created By Giorgi Aphridonidze</h6>

                </div>
            </div>
            
        </div>
    );
};


export default Footer; //exporting footer