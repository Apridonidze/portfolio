import jobsAppImg from '../assets/projectimg/pr1.png';
import typingAppImg from '../assets/projectimg/pr2.png'; //importing project's image

const Projects = () => {
    return(
        <section id='projects'>
            <div className="projects-container container mt-3 ms-3 rounded-1 p-2">
            
                <h4 className='pb-3'>Projects</h4>
                
                <div className="row g-3 gap-2 d-flex">

                    <div className="col-12 col-sm-5 d-flex flex-column border border-secondary rounded-2 p-2">

                        <div className="project-image-wrapper mb-2 h-100">
                            <img src={jobsAppImg} className='rounded-2 w-100 project-image' />
                        </div>

                        <div className="project-body p-1 flex-grow-1">
                            <h5>jobs-app</h5>
                            <small>
                                A secure job board web app where users can browse, apply, and save jobs, while recruiters can post jobs and manage applicants. Built with React, Node.js, and MySQL
                            </small>
                        </div>

                    </div>

                    <div className="col-12 col-sm-5 d-flex flex-column border border-secondary rounded-2 p-2">

                        <div className="project-image-wrapper mb-2 h-100 " >
                            <img src={typingAppImg} className='rounded-2 w-100 project-image' />
                        </div>

                        <div className="project-body p-1 flex-grow-1">
                            <h5>typing-app</h5>
                            <small>
                                It's a simple typing app with custom themes and font size that are saved locally. Frontend fetches words from middleware server with axios. (Words are stored in JSON format with 500 random and unique words).
                            </small>
                        </div>
                        
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Projects;//exporting component