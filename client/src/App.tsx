import React  from 'react';
import  MailButton from './MailButton';
import './App.css';
import './MailArea.css';
import {Outlet} from "react-router-dom";
import Folder from './Folder';
import  ModalInput from './ModalInput';
import  SearchBar from './SearchBar';


interface AppState{
  folder:JSX.Element;
  folderInput:JSX.Element;
}

interface AppProps{

}

class App extends React.Component<AppProps,AppState>{ 
  newname:boolean;
  editmenu:string[];
  panel:JSX.Element;
  list:string[];
  openFolderCreatinForm:boolean;
  openFolderMenu:boolean;
  folders:string[];
  spisok:React.ReactNode;

  constructor(props:AppProps){

    super(props);
    this.newname=true;
    this.openFolderCreatinForm=false;
    this.openFolderMenu=false;
    this.list=['Входящие','Отправленные','Черновик','Спам','Удалённые'];
    this.folders=[];
    this.editmenu=[];
  
     this.panel= <React.Fragment>{this.list.map((elem,index)=>

    <MailButton  key={index}>{elem}</MailButton>)}</React.Fragment>;
    this.state={folder:<React.Fragment/>, folderInput:<React.Fragment/>}

  }
    
   
    ShowFolderCreationForm(folderPreviousName:string=""){

      this.openFolderCreatinForm=true;
    
      this.editmenu.forEach((item,index)=>{
        this.editmenu[index]='none';}
          );
          
      this.setState({
        folder:<React.Fragment>  {this.folders.map((elem,index)=>
          <Folder key={index}  delete={this.DeleteFolder.bind(this)} 
          clickRight={this.OpenFolderMenu.bind(this)}
           clickLeft={this.CloseFolderMenu.bind(this)} 
           rename={this.ShowFolderCreationForm.bind(this)}
           showMenu={this.editmenu[index]}>{elem}</Folder>)}
            </React.Fragment>,

          folderInput:<ModalInput previousName={folderPreviousName}
           func1={this.AddFolder.bind(this)} 
          func2={this.CloseFolderCreationForm.bind(this)}
          ></ModalInput>
      });
    }

  OpenFolderMenu(buttonName:string){
    this.openFolderMenu=true;
    
   this.folders.forEach((item,index)=>{

   if(buttonName!==item) {this.editmenu[index]='none'} else
   this.editmenu[index]='block';
   });
    this.setState({
      folder:<React.Fragment>{this.folders.map((elem,index)=>
        <Folder key={index}  delete={this.DeleteFolder.bind(this)} 
        clickRight={this.OpenFolderMenu.bind(this)} 
        rename={this.ShowFolderCreationForm.bind(this)}
        clickLeft={this.CloseFolderMenu.bind(this)} 
        showMenu={this.editmenu[index]}>{elem}</Folder>)}
        </React.Fragment>,

        folderInput:<React.Fragment/>
    });
  }

  CloseFolderCreationForm(){
    
    this.setState({
      folder:<React.Fragment>{this.folders.map((elem,index)=>
        <Folder key={index}  delete={this.DeleteFolder.bind(this)}
         clickRight={this.OpenFolderMenu.bind(this)}
        rename={this.ShowFolderCreationForm.bind(this)}
       clickLeft={this.CloseFolderMenu.bind(this)} 
       showMenu={this.editmenu[index]}>{elem}</Folder>)}
       </React.Fragment>,

        folderInput:<React.Fragment/>
    });
  }
  
 
  CloseFolderMenu(e:React.MouseEvent<HTMLElement>){
    
    if(this.openFolderMenu===true){
   
      let folders= document.querySelector('.context-menu');
      let addbutton= document.querySelector('.AddButton');
      let showpanel= document.querySelector('.Modal');
      let b1= document.getElementsByClassName('b1');  
      let b2= document.getElementsByClassName('b2');
      let buttons1=Array.from(b1);
      let buttons2=Array.from(b2);
      buttons1.forEach((item,index)=>{

      if( ((e.target as HTMLElement)===buttons1[index])||
      ((e.target as HTMLElement)===buttons2[index]))
      {
        this.openFolderMenu=false;
        
      }
    });

    if (this.openFolderMenu===true){
      if((!showpanel?.contains(e.target as HTMLElement))&&
      (!addbutton?.contains(e.target as HTMLElement)))
      {

      this.editmenu.forEach((item,index)=>{
        this.editmenu[index]='none';}
          );

        this.setState({
          folder:<React.Fragment>{this.folders.map((elem,index)=>
          <Folder key={index}  delete={this.DeleteFolder.bind(this)}
           clickRight={this.OpenFolderMenu.bind(this)}
          rename={this.ShowFolderCreationForm.bind(this)}
           clickLeft={this.CloseFolderMenu.bind(this)} 
          showMenu={this.editmenu[index]} >{elem}</Folder>)}
          </React.Fragment>,

          folderInput:this.state.folderInput
  
        });

      this.openFolderMenu=false;
        }
      }
    }
  }


    AddFolder(nameFolder:string, previousNameFolder:string){
      let folderNumber:number=-1;
      if (nameFolder=="") return 0;
      if(previousNameFolder!==""){
        this.folders.forEach((item,index)=>{
          if (item===previousNameFolder){
            folderNumber=index;
          }
        });
      }

        this.folders.forEach((item,index)=>{

        if ((item===nameFolder)&&(item!==previousNameFolder)){

          this.newname=false;
        }
      });
        
      if (this.newname===false){this.newname=true;return 1;} 
      else{

        if (folderNumber!==-1){this.editmenu[folderNumber]='none';
        this.folders[folderNumber]=nameFolder;
        
        } 

        else{
     
      this.editmenu.forEach((item,index)=>{

        this.editmenu[index]='none';}
          );

        this.editmenu.push("none");
        this.folders.push(nameFolder);
        }
        this.newname=true;
        this.setState({
          folder:<React.Fragment>  {this.folders.map((elem,index)=>

            <Folder key={index}  delete={this.DeleteFolder.bind(this)}
             rename={this.ShowFolderCreationForm.bind(this)}
              clickRight={this.OpenFolderMenu.bind(this)}
             clickLeft={this.CloseFolderMenu.bind(this)} 
             showMenu={this.editmenu[index]}>{elem}</Folder>)}
              </React.Fragment>,

            folderInput:<React.Fragment/>
        });
          return 2;
    }  
  }

  DeleteFolder(nameFolder:string){
    let indexDelete=this.folders.findIndex(item=>item===nameFolder);
    if (indexDelete!==-1) {
      this.folders.splice(indexDelete,1)
    }
  
    this.editmenu.pop();
    this.editmenu.forEach((item,index)=>{

      this.editmenu[index]='none';
    });
        this.setState({
          folder:<React.Fragment>  
            {this.folders.map((elem,index)=>
            <Folder key={index} delete={this.DeleteFolder.bind(this)}
             rename={this.ShowFolderCreationForm.bind(this)} 
             clickRight={this.OpenFolderMenu.bind(this)}
             clickLeft={this.CloseFolderMenu.bind(this)}  
             showMenu={this.editmenu[index]}>{elem}</Folder>)} 
             </React.Fragment>,

            folderInput:<React.Fragment/>
    });
  }
  
 render(){
  return (
    <div onClick={this.CloseFolderMenu.bind(this)} className="App-main"> 
     {this.state.folderInput}
     <div className='App-header'>
       <div style={{ width:"40%",float:"left",fontSize:"40px",fontWeight:"bold"}} >
         Почта
        </div>
       <SearchBar/>
     </div>
     <div className='App-panel-menu'>
      {this.panel} 
      {this.state.folder}
        <div className='AddButton'
       onClick={()=>{this.ShowFolderCreationForm.bind(this)()}}>
         Добавить папку
        </div> 
      </div>
      <div className='App-panel-mails'> 
    <Outlet />
      </div>
    </div>
    );
  }
}

export default App;
