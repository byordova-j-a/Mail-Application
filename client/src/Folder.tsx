import {useNavigate} from "react-router-dom";
import './Folder.css';
import React from 'react';
import {File} from './Types';

interface FolderProps{
  children:string;
  clickRight:(nameButton:string)=>void;
  showMenu:string;
  clickLeft:(e:React.MouseEvent<HTMLElement>)=>void;
  rename:(folderPreviousName:string)=>void;
  delete:(nameFolder:string)=>void;
  }  

function Folder(props:FolderProps){
    let  navigate=useNavigate();

      function OpenFolder(e:React.MouseEvent<HTMLElement>){

        e.preventDefault();
        let ButtonName=props.children;
        let selectedData:File[]=[];
    
       fetch("http://localhost:3001/folder",{
          method: 'POST',
          headers: {
            'Content-Type':'application/json;charset=utf-8'
          },
          body: JSON.stringify({Folder: ButtonName})})
        .then((data)=>{if (data.ok) return data.json();})
        .then((data)=>{data.map((item:File)=>selectedData.push(item));})
        .then(()=>navigate("/mails",{ state: { files:selectedData } }));
     }

    return(

        <div className="Menu"  style={{display: 'flex',flexDirection:"column"}}>
          <div className="MenuBut" onContextMenu={(e)=>{e.preventDefault();props.clickRight(props.children);}} 
            onClick={(e)=>{ props.clickLeft(e);OpenFolder(e);}}>
            {props.children}
          </div>
          <div className="Context-menu" 
          style={{display:props.showMenu}}>
            <p className="b1"
            onClick={()=>{props.rename(props.children);}}> 
              Переименовать
            </p> 
            <p className="b2" onClick={()=>{props.delete(props.children);}} >
              Удалить
            </p>
          </div>  
        </div>
  )
}
export default Folder;