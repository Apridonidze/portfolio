import jobsAppImg from '../assets/projectimg/pr1.png';
import typingAppImg from '../assets/projectimg/pr2.png'; //importing project's image
import driverTicketsImg from '../assets/projectimg/pr3.png';

import Project from './Project';

const Projects = () => {

    const projectsList = [
        {title : 'Jobs-App' , img : jobsAppImg , description : 'A secure job board web app where users can browse, apply, and save jobs, while recruiters can post jobs and manage applicants. Built with React, Node.js, and MySQL', gitURL : 'https://github.com/Apridonidze/jobs-app' , liveURL : null , technologies : ['React' , 'Boostrap' , 'Css', 'Express.js' , 'MySql' , 'Git']},
        {title : 'Typing-App' , img : typingAppImg , description : `It's a simple typing app with custom themes and font size that are saved locally. Frontend fetches words from middleware server with axios. (Words are stored in JSON format with 500 random and unique words).`, gitURL : 'https://github.com/Apridonidze/typing-app' , liveURL : null , technologies : ['React' , 'Boostrap' , 'Css', 'Express.js' , 'Git']},
        {title : 'Driver-Tickets' , img :driverTicketsImg , description : 'A web app for managing driver tickets, allowing users to track, answer, and save tickets.', gitURL : 'https://github.com/Apridonidze/driver-tickets' , liveURL : 'https://driver-tickets.vercel.app/', technologies : ['React' , 'Boostrap' , 'Css', 'Express.js' , 'MySql' , 'Git']},

    ]

    return(
        <section id='projects'>
            <div className="projects-container container mt-3 mx-1 rounded-1 p-2">
            
                <h4 className='pb-3'>Projects</h4>
                
                <div className="row g-3 gap-1 d-flex w-100">

                    {projectsList.map((project,id) => (
                        <Project project={project} key={id} id={id}/>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Projects;//exporting component