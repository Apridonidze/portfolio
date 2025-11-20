import avatar from '../assets/avatar.png'; //importing avatar img

const Profile = ( { setToggleAlert } ) => {

    const copyText = () => {
        navigator.clipboard.writeText('giorgiapridonidze08@gmail.com').then(() => {setToggleAlert({status : true , text : 'Gmail Copied'})}).catch(err => {
        setToggleAlert({status : true , text : 'Gmail Was Not Copied'})
        });
    }; //function copies my email and toggles alert window for user to know if they successfully copied email or not 
    

    return(
        <div className="profile-container container mt-3 " >

            <div className="profile-image container">
            
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

            <div className="profile-contact d-flex flex-column gap-1 ps-4 py-3">

                <h6 onClick={copyText}><i class="fa-solid fa-envelope" ></i> giorgiapridonidze08@gmail.com</h6>
                <a className='link-underline link-offset-3 link-underline-opacity-0 link-underline-opacity-100-hover' href="https://www.linkedin.com/in/giorgi-aphridonidze-7aa896291/"><i class="fa-brands fa-square-linkedin"></i>in/giorgi-aphridonidze</a>
                <a className='link-underline link-offset-3 link-underline-opacity-0 link-underline-opacity-100-hover' href="https://github.com/Apridonidze"><i class="fa-brands fa-square-github"></i>Apridonidze</a>
                <a className='link-underline link-offset-3 link-underline-opacity-0 link-underline-opacity-100-hover' href="https://media.licdn.com/dms/document/media/v2/D4D2DAQG6qn_t9xaaww/profile-treasury-document-pdf-analyzed/B4DZpF6550IMAg-/0/1762109663240?e=1764806400&v=beta&t=QEhHselOIyz3h5M9gCupkEyCWA23pVU3_m1Ysl1IDYQ" ><i class="fa-regular fa-file"></i> resume.pdf</a>
            
            </div>

        </div>
    );
};

export default Profile; //exporting component