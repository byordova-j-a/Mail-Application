import React from 'react';
import './MailArea.css';
import {File} from './Types';

interface MailAreaProps{
  files:File[];
}

interface MailAreaState{

}

class MailArea extends React.Component<MailAreaProps, MailAreaState>{

  constructor(props:MailAreaProps){

    super(props);
      
  };
  
  render(){
      
    return <div className='Area' >
    </div>
  };
};
  export default MailArea;
