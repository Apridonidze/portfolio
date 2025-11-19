import upworkImg from '../assets/tech imgs/upwork.png'
const Expericne = () => {
    return(
        <div className="experience-container p-3">
            <div className="experience-header">
                <h3>Work Experience</h3>
            </div>
            <div className="experience-body p-2">
                <div className="experince">
                    <div className="experience-header d-flex align-items-center gap-4">
                        <div className="header-left">
                            <img src={upworkImg} className='rounded-2' alt="" style={{maxWidth: '60px'}}/>
                        </div>
                        <div className="header-right">
                            
                            <h5>Freelancer Frontend Developer At Upwork</h5>    
                            <h6 className='text-secondary'>2023 - July</h6>
                        </div>
                    </div>
                    
                    <div className="experience-body ps-4 border-start border-bottom w-75 w-sm-50 border-secondary ms-4">
                        <ul>
                            <li>Developer FrontEnd Side Of Login/Signup Page.</li>
                            <li>Handled User's Input And Errors.</li>
                            <li>Communicated With Client on Daily Working Basis.</li>
                        </ul>
                    </div>
                    <div className="experience-footer p-4">
                        <h6>Used Technologies : <span className='border-bottom '>HTML</span> , <span className='border-bottom '>CSS</span> , <span className='border-bottom '>Javascript</span> And <span className='border-bottom '>Git</span></h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expericne;