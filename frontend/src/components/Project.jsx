const Project = ( { project , key ,id } ) => {
    return(
        <div className="project col-12 col-lg-5 d-flex flex-column border border-secondary rounded-2 p-2" style={{cursor : "pointer"}} >

            <div className="project-image-wrapper mb-2 h-100">
                <img src={project.img} className='rounded-2 w-100 project-image' />


                <div className="header w-100 h-100  position-relative bottom-100">
                    <div className="project-button-background w-100 h-100 position-relative bg-dark opacity-50" ></div>

                    <div className="project-buttons position-relative w-100 h-100 align-items-center bottom-100 d-flex justify-content-center gap-2">
                        <button className="btn btn-sm" style={{backgroundColor : '#0d1117' , color : 'white'}} onClick={project.git}><i class="fa-brands fa-github"></i>Github</button>
                        {project.liveURL ? <button className="btn btn-sm" style={{backgroundColor : '#247bc2' , color : 'white'}}><i class="fa-solid fa-link"></i> Live</button> : <></>}
                    </div>
                </div>

            </div>

            <div className="project-body p-1 flex-grow-1">
                <h5>{project.title}</h5>
                
                <small>{project.description}</small>
            </div>

        </div>
    )
}

export default Project ;