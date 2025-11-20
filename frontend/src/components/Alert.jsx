const Alert = ( { setToggleAlert , toggleAlert } ) => {
    return(
        <div className="alert-container position-fixed border text-center p-5 rounded-2 border-secondary" style={{backgroundColor : '#0d1117'}}>
            <h3 className="pb-3">{toggleAlert.text}</h3>
            <button className="btn btn-primary w-50" onClick={() => setToggleAlert({status:false , text: null})}>Ok</button>
        </div>
    );
};


export default Alert;