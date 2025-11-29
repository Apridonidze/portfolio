import reactImg from '../assets/tech imgs/react.png';
import bootstrapImg from '../assets/tech imgs/boostrap.png';
import expressImg from '../assets/tech imgs/express.png';
import mysqlImg from '../assets/tech imgs/mysql.png';
import htmlImg from '../assets/tech imgs/html.png';
import cssImg from '../assets/tech imgs/css.png';
import jsImg from '../assets/tech imgs/js.png'; //importing technologiy's imgs

import gitImg from '../assets/tech imgs/git.png';
import githubImg from '../assets/tech imgs/github.png'
import vercelImg from '../assets/tech imgs/vercel.png'
import railwayImg from '../assets/tech imgs/railway.svg'

const techData = [
  { img: reactImg, name: 'React', desc: 'JavaScript Library', maxWidth: '80px' },
  { img: bootstrapImg, name: 'Bootstrap', desc: 'CSS Framework', maxWidth: '80px' },
  { img: expressImg, name: 'Express', desc: 'Node.js Framework', maxWidth: '80px' },
  { img: mysqlImg, name: 'MySQL', desc: 'Relational Database', maxWidth: '80px' },
  { img: htmlImg, name: 'HTML', desc: 'Markup Language', maxWidth: '80px' },
  { img: cssImg, name: 'CSS', desc: 'Styling Language', maxWidth: '80px' },
  { img: jsImg, name: 'JavaScript', desc: 'Programming Language', maxWidth: '80px' },
]; //array to easily map technologies in component

const otherTools = [
    { img: gitImg, name: 'Git', desc: 'Version Control', maxWidth: '80px' },
    { img: githubImg, name: 'GitHub', desc: 'Code Hosting', maxWidth: '80px' },
    { img: vercelImg, name: 'Vercel', desc: 'Frontend Deployment', maxWidth: '80px' },
    { img: railwayImg, name: 'Railway', desc: 'Backend/Database Deployment', maxWidth: '80px' },

]

const Technologies = () => {
  return (
    <section id='skills'>

      <div className="technologies-container p-3">
        <div className="technologies-header">
          <h3>Skills & Technologies</h3>
        </div>

        <div className="technologies-body d-flex flex-wrap gap-3 px-2 py-2 justify-content-start">
          {techData.map((tech, index) => (
            <div key={index} className="tech d-flex border border-secondary p-3 rounded-3 align-items-center"style={{ width: '220px' }} >
              <div className="tech-left me-3">
                  
                <img src={tech.img} alt={tech.name} style={{ maxWidth: tech.maxWidth, height: 'auto' }} />
                  
              </div>
              
              <div className="tech-right">
                  <h5 className="mb-1">{tech.name}</h5>
                  <small>{tech.desc}</small>
              </div>

          </div>
        ))}
        </div>

        <div className="other-tools">
          <div className="other-tools-header">
            <h3>Other Tools</h3>
          </div>
          <div className="other-tools-body  d-flex flex-wrap gap-3 px-2 py-2 justify-content-start">
            {otherTools.map((tool, id) => (
              <div key={id} className="tool d-flex border border-secondary p-3 rounded-3 align-items-center" style={{ width: '220px' }}  >
                <div className="tool-left me-3">
                    
                  <img src={tool.img} alt={tool.name} style={{ maxWidth: tool.maxWidth, height: 'auto' }} />
                    
                </div>
                
                <div className="tool-right">
                    <h5 className="mb-1">{tool.name}</h5>
                    <small>{tool.desc}</small>
                </div>
          </div>
            ))}
          </div>
        </div>  

      </div>

    </section>
  );
};

export default Technologies;//exporting component