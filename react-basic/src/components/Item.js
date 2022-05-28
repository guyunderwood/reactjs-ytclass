//const Item = ({title, amout})   // same, no need to add const {title, amount} = props
const Item = (props) => {
  const {title,amount} = props;   //Destructuring

  return (
    <li>
      {title} <span>{amount}</span>
    </li>
  );
};

export default Item;
