import {useNavigate} from "react-router-dom";
import './MailUnit.css';
import React from 'react';
import {File} from './Types';
import { defaultMaxListeners } from "events";

interface MailUnitProps{ 
    children:File;
}

function MailUnit(props:MailUnitProps){

    let navigate=useNavigate();
  
        function Open(){
            navigate("/mail", { state: { mail:props.children,date: fulldate } });
    }
   
    let date=new Date(props.children.Maildata);
    let dateDay=String(date.getDate()).padStart(2, '0');
    let dateMonth = String(date.getMonth() + 1).padStart(2, '0');
    let dateHour= String(date.getHours());
    let dateMinute= String(date.getMinutes());
    
    switch(dateMonth){
       case '01':
           dateMonth="янв.";
           break;
        case '02':
            dateMonth="фев.";
            break;
        case '03':
            dateMonth="март.";
            break;
        case '04':
            dateMonth="апр.";
            break;
        case '05':
            dateMonth="май.";
            break;
        case '06':
            dateMonth="июн.";
             break;
        case '07':
           dateMonth="июль.";
           break;
        case '08':
            dateMonth="авг.";
            break;
        case '09':
            dateMonth="сент.";
            break;
        case '10':
            dateMonth="окт.";
            break;
        case '11':
            dateMonth="нояб.";
            break;
        case '12':
            dateMonth="дек.";
             break;
        default:
            dateMonth="Ошибка";               
             
   };
   let shortDate=dateDay+' '+dateMonth;
   let fulldate=dateHour+":"+dateMinute+' '+dateDay+' '+dateMonth;
   
    return <div className="Unit" onClick={Open}> 
        <div className="Author">{props.children.Author}</div> 
        <div  className="Title">{props.children.Title}</div >
        <div  className="Date">{shortDate}</div>
    </div>
  
  };
  export default MailUnit;
