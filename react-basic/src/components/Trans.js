import Item from "./Item";
import './Trans.css'
import { v4 as uuidv4 } from 'uuid';

const Trans = () => {
  const data = [
    {title:'Medical bill', amount:2000},
    {title: 'Gas', amount: 5000},
    {title: 'Rental', amount: 8000},
    {title: 'Payroll', amount: 70000},
    {title: 'Insurance', amount: 300},
    {title: 'Travel expense', amount: 800}
  ]
  return (
    <ul className="item-list">
      {data.map((element)=>{
        // return <Item title={element.title} amount={element.amount}/>
        return <Item {...element} key = {uuidv4()}/>   // same as above
      })} 
    </ul>
  );
};

export default Trans;
