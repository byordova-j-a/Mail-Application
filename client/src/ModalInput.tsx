import './ModalInput.css';
import React from 'react';

interface ModalInputProps{
    func1:(name:string,prevName:string)=>number;
    func2:()=>void;
    previousName:string;
}

interface ModalInputState{
    name:string;
    validname:string;
}

class ModalInput extends React.Component<ModalInputProps,ModalInputState>{

    header:string;
    constructor(props:ModalInputProps){
      super(props);
      this.state={name:"",validname:""};
      if (this.props.previousName==="")
      this.header="Создать папку"; else
      this.header="Переименовать папку";
    }

  InputName(e:React.FormEvent<HTMLInputElement>){

      this.setState({name:e.currentTarget.value,validname:""});

    }

  CreateFolder(){

      let valid:number=this.props.func1(this.state.name,this.props.previousName);
      if (valid===0) this.setState({name:this.state.name,validname:"Введите имя"});
      if(valid==1) this.setState({name:this.state.name,validname:"Такое имя уже есть"});

    }

    render(){

    return(<React.Fragment>
        <div className="Modalback"></div>
        <div className="Modal">
            <p>{this.header} </p>
            <label htmlFor="foldername">Название папки: </label>
            <input maxLength={15} size={21} id="foldername" 
            value={this.state.name} onChange={this.InputName.bind(this)}>
            </input>
            <p style={{color:"red",position:"absolute",top:'3.5em'}}> 
            {this.state.validname}</p>
            <div className="PanelButtons" >
                <div className="Button" onClick={this.CreateFolder.bind(this)} >
                Создать 
                </div> 
                <div className="Button" onClick={this.props.func2.bind(this)} > 
                Отмена
                </div>
            </div>
        </div>
    </React.Fragment>
        )
    }
}   
export default ModalInput;