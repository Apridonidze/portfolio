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

        <div className="other-tools">
          <div className="other-tools-header">
            <h3>Other Tools</h3>
          </div>
          <div className="other-tools-body  d-flex flex-wrap gap-3 px-2 py-2 justify-content-start">
            <div className="row g-2">
            {otherTools.map((tool, id) => (
              <div className="col-12 col-sm-6 col-lg-4">
              <div key={id} className="d-flex border border-secondary p-3 rounded-3  h-100 align-items-center gap-3">
                <div className="tool-left ">
                    
                  <img src={tool.img} alt={tool.name} className='bg-white rounded-circle w-100 h-100' style={{maxWidth:'200px'}}/>
                    
                </div>
                
                <div className="tool-right">
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