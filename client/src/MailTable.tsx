import {useNavigate,useLocation} from "react-router-dom";
import './MailTable.css';
import MailUnit from './MailUnit';
import {File} from './Types';

interface SendFiles{
  files:File[];
}

interface MailTableProps{ 
  
}

function MailTable(props:MailTableProps){
  let {state} = useLocation();
  let mails=(state as  SendFiles);
   /* function GoBack(){
        navigate(-1);
    }*/
   //let list:string[]=['Се Лянь','+','Хуа Чэн','=','Хуаляни'];
    return <div className="Mails" > 
      {mails?.files.map((elem,index)=><MailUnit key={elem.Id}>{elem}</MailUnit>)}
     <p> {(mails?.files.length==0)?'Нет писем :С':''}</p>
    </div>
  
};
  export default MailTable;
