import avatar from '../assets/avatar.png'

const Profile = () => {
    return(
        <div className="profile-container w-100 m-4 d-flex flex-column justify-content-center ">
            <div className="profile-image">
            
                <img src={avatar} alt="Profile Avatar" className='mx-auto d-block img-fluid rounded-circle'/>
            
            </div>

            <div className="profile-body ps-4 ">
                <div className="titles py-2">
                    <div className='name mb-3'><span className='fs-2'>Giorgi</span> <br /> <span className='fs-4 text-secondary'>Apridonidze</span></div>
                    <h5 >Fullstack Web Developer</h5>
                </div>
                <div className="location">
                    <h5><i class="fa-solid fa-location-dot"></i> Georgia , Tbilisi</h5>
                </div>
            </div>

            <div className="profile-contact d-flex flex-column gap-1 ps-4 py-2">

                <a className='link-underline link-offset-3 link-underline-opacity-0 link-underline-opacity-100-hover' href="https://www.linkedin.com/in/giorgi-aphridonidze-7aa896291/"><i class="fa-brands fa-square-linkedin"></i>in/giorgi-aphridonidze</a>
                <a className='link-underline link-offset-3 link-underline-opacity-0 link-underline-opacity-100-hover' href="https://github.com/Apridonidze"><i class="fa-brands fa-square-github"></i>Apridonidze</a>

            </div>

        </div>
    )
}

export default Profile;