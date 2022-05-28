import Item from "./Item";
import './Trans.css'
const Trans = () => {
  const data = [
    {id:1, title:'Medical bill', amount:2000},
    {id:2, title: 'Gas', amount: 5000},
    {id:3, title: 'Rental', amount: 8000},
    {id:4, title: 'Payroll', amount: 70000},
    {id:5, title: 'Insurance', amount: 300},
    {id:6, title: 'Travel expense', amount: 800}
  ]
  return (
    <ul className="item-list">
      {data.map((element)=>{
        // return <Item title={element.title} amount={element.amount}/>
        return <Item {...element} key = {element.id}/>   // same as above
      })} 
    </ul>
  );
};

export default Trans;
