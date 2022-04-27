import {useNavigate} from "react-router-dom";
import './MailButton.css';
import React from 'react';
import {File} from './Types';


interface MailButtonProps{ 
  children:string;
}


function MailButton(props:MailButtonProps){ 
  let buttonRef = React.createRef<HTMLInputElement>();
  let  navigate=useNavigate();
    function OpenFolder(e:React.MouseEvent<HTMLElement>){
      e.preventDefault();
      let ButtonName=props.children;
      let selectedData:File[]=[];
      let namefolder:string;

      switch (ButtonName) {
        case 'Входящие':
          namefolder='Incoming';
          break;
        case 'Отправленные':
          namefolder='Sent';
          break;
        case 'Черновик':
          namefolder='Draft';
          break;
          case 'Удалённые':
          namefolder='Deleted';
          break;
          case 'Спам':
          namefolder='Spam';
          break;
        default:
          namefolder=ButtonName
      };
  
     fetch("http://localhost:3001/folder",{
        method: 'POST',
        headers: {
          'Content-Type':'application/json;charset=utf-8'
        },
        body: JSON.stringify({Folder: namefolder})})
        .then((data)=>{if (data.ok) return data.json();})
        .then((data)=>{data.map((item:File)=>selectedData.push(item));})
        .then(()=>navigate("/mails",{ state: { files:selectedData } }));
   }
   
    return <div className="MainBut" ref={buttonRef}
     onClick={OpenFolder} onContextMenu={OpenFolder}>
   {props.children}
    </div>
};
  export default MailButton;
