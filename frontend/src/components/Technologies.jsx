import reactImg from '../assets/tech imgs/react.png';
import bootstrapImg from '../assets/tech imgs/boostrap.png';
import expressImg from '../assets/tech imgs/express.png';
import mysqlImg from '../assets/tech imgs/mysql.png';
import htmlImg from '../assets/tech imgs/html.png';
import cssImg from '../assets/tech imgs/css.png';
import jsImg from '../assets/tech imgs/js.png'; //importing technologiy's imgs

import gitImg from '../assets/tech imgs/git.png';
import githubImg from '../assets/tech imgs/github.png';
import vercelImg from '../assets/tech imgs/vercel.png';
import railwayImg from '../assets/tech imgs/railway.svg'; //importing tools imgs

const techData = [
  { img: reactImg, name: 'React', desc: 'JavaScript Library'},
  { img: bootstrapImg, name: 'Bootstrap', desc: 'CSS Framework'},
  { img: expressImg, name: 'Express', desc: 'Node.js Framework'},
  { img: mysqlImg, name: 'MySQL', desc: 'Relational Database'},
  { img: htmlImg, name: 'HTML', desc: 'Markup Language'},
  { img: cssImg, name: 'CSS', desc: 'Styling Language'},
  { img: jsImg, name: 'JavaScript', desc: 'Programming Language', },
]; //array to easily map technologies in component

const otherTools = [
    { img: gitImg, name: 'Git', desc: 'Version Control'},
    { img: githubImg, name: 'GitHub', desc: 'Code Hosting'},
    { img: vercelImg, name: 'Vercel', desc: 'Frontend Deployment'},
    { img: railwayImg, name: 'Railway', desc: 'Backend/Database Deployment'},
]; //array to easily map tools in component

const Technologies = () => {
  return (
    <section id='skills'>

      <div className="technologies-container p-3">
        <div className="technologies-header">
          <h3>Skills & Technologies</h3>
        </div>

        <div className="technologies-body p-2">
          <div className="row g-2">
          {techData.map((tech, index) => (
            <div className="col-12 col-sm-6 col-lg-4">
              <div key={index} className="d-flex border border-secondary p-3 rounded-3  h-100 align-items-center gap-3" >
                
                <div className="tech-left col-4">
                    
                  <img src={tech.img}  alt={tech.name} className='w-100 h-100' />
                    
                </div>
                
                <div className="tech-right text-break">
                    <p className="mb-1 fs-5">{tech.name}</p>
                    <small className='fs-6'>{tech.desc}</small>
                </div>

              </div>
            </div>
        ))}
        </div>
        </div>

        <div className="other-tools pt-2">
          <div className="other-tools-header">
            <h3>Other Tools</h3>
          </div>
          <div className="other-tools-body p-2">
            <div className="row g-2">
            {otherTools.map((tool, id) => (
              <div className="col-12 col-sm-6 col-lg-4">
              <div key={id} className="d-flex border border-secondary p-3 rounded-3  h-100 align-items-center gap-3">
                <div className="tool-left tech-left col-4">
                    
                  <img src={tool.img} alt={tool.name} className='bg-white rounded-circle p-1 w-100 h-100' style={{maxWidth:'200px'}}/>
                    
                </div>
                
                <div className="tool-right tech-left">
                    <p className="mb-1 fs-5">{tool.name}</p>
                    <small className='fs-6'>{tool.desc}</small>
                </div>
          </div>
          </div>
            ))}
          </div>
          </div>
        </div>  

      </div>

    </section>
  );
};

export default Technologies;//exporting component