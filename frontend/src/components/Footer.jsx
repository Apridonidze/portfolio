const Footer = () => {
    return(
        <div className="footer-container container-fluid text-secondary px-5 py-3">
            <div className="row row-cols-1 row-cols-sm-3 g-3">
                <div className="footer-left col">
                <h6>© 2025 Portfolio</h6>
                </div>
                <div className="footer-center col">
                    <a href="" className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">link</a>
                    <a href="" className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">link</a>
                    <a href="" className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">link</a>
                </div>
                <div className="footer-right col ">
                    <h6>Created By Giorgi Aphridonidze</h6>
                </div>
            </div>
        </div>
    );
};


export default Footer;