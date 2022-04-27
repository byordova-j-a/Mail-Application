import React, { useState } from 'react';
import './MainApp.css';
import {File} from './Types';

import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import MailTable from './MailTable';
import OpenMail from './OpenMail';
import App from './App';

interface MailAreaState{
    files:File[];
    menu:boolean;
    }
  
  interface AppProps{
  }
  
  class MainApp extends React.Component<AppProps,MailAreaState>{
    constructor(props:AppProps){
      super(props);
      this.state={files:[],menu:true};
    }
  
    list:string[]=['Входящие','Отправленные','Черновик','Спам','Удалённые'];
    
   render(){
    return (
       <div className='MainApp'>
       
       <Router>
              <div>
                <Routes>
                <Route path="/"  element={<App/>} >
                  <Route path="mails" element={<MailTable />} />
                  <Route path="mail" element={<OpenMail/>}/>
                  <Route path="*" element={<h2>Ресурс не найден</h2>} />  </Route>
                 </Routes>
              </div>
          </Router> 
      </div>
      
    );
    }
  }
  
  export default MainApp;
  