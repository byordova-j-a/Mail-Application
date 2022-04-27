import {useNavigate} from "react-router-dom";
import { useState, useRef } from 'react';
import './SearchBar.css';
import React from 'react';
import {File} from './Types';

interface SearchBarProps{
    
}

function SearchBar(props:SearchBarProps){
    let[input,SetInput]=useState("");
    let[previnput,SetPrevInput]=useState("");
    let  navigate=useNavigate();
    let selectedData:File[]=[];
    let inputRef=useRef(null);
    let inputElem=document.getElementById('searchbar');

    function ChangeInput(e:React.FormEvent<HTMLInputElement>){
      SetInput(e.currentTarget.value);
    }

    function Search(e:React.MouseEvent<HTMLElement>|React.KeyboardEvent<HTMLElement>){
      if (input!==""){
        fetch("http://localhost:3001/search",{
          method: 'POST',
          headers: {
            'Content-Type':'application/json;charset=utf-8'
            },
          body: JSON.stringify({Search: input})
        }).then((data)=>{if (data.ok)
          return data.json();})
          .then((data)=>{data.map((item:File)=>selectedData.push(item));})
          .then(()=>navigate("/mails",{ state: { files:selectedData } }));
              SetPrevInput(input);
              SetInput("");

        }
    }

    function KeyPress(e:React.KeyboardEvent<HTMLElement>){
        
        if ( (e.key === "Enter")&&(input!=="")){
          fetch("http://localhost:3001/search",{
            method: 'POST',
            headers: {
              'Content-Type':'application/json;charset=utf-8'
              },
            body: JSON.stringify({Search: input})
          }).then((data)=>{if (data.ok)
            return data.json();})
            .then((data)=>{data.map((item:File)=>selectedData.push(item));})
            .then(()=>navigate("/mails",{ state: { files:selectedData } }));
              
              inputElem?.blur();
              SetPrevInput(input);
              SetInput("");
    
        }
    }

    return(
        <React.Fragment>
        <div className="Search">
          <div>
            <input style={{float:"right"}} ref={inputRef} onKeyDown={KeyPress} 
            maxLength={44} size={20}  id="searchbar" 
            value={input} onChange={ChangeInput} placeholder={previnput} >
            </input>
          </div>
        <div className="InputButton" style={{float:"right"}}  onClick={Search}>Поиск</div>
    </div>
  </React.Fragment>
    )
}
export default SearchBar;