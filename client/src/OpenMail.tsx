import {useNavigate,useLocation,} from "react-router-dom";
import './OpenMail.css';
import {File} from './Types';

interface sendState{
    mail:File,
    date:string
}
    
interface OpenMailProps{ 
   
}

function OpenMail(props:OpenMailProps){
    
  let navigate=useNavigate();
  let {state} = useLocation();
  let mail=(state as sendState);

    function GoBack(){
        navigate(-1);
    }
  
    return <div className="OpenMail">
      <h2>{mail?.mail?.Title}</h2>
      <div  className="Back" onClick={GoBack} style={{fontWeight:"bold"}}> 
        <span >
          {String.fromCharCode(5130)}
        </span> 
          Назад 
        </div>
       <div className="FromTo">
          <p>от: {(mail?.mail?.Direction==true )? "я" : mail?.mail?.Author}</p>
          <p>кому: {(mail?.mail?.Direction==false )? "я" : mail?.mail?.Author}</p>
        </div>
        <div className="Text">
          <span>
            {mail?.mail?.Mailtext}
          </span>
        </div>
        <p style={{fontSize:"14px"}}>{mail?.date}</p>
      </div>
  };
  export default OpenMail;
