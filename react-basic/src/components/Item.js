import PropTypes from 'prop-types'; // ES6

//const Item = ({title, amout})   // same, no need to add const {title, amount} = props
const Item = (props) => {
  const {title,amount} = props;   //Destructuring

  return (
    <li>
      {title} <span>{amount}</span>
    </li>
  );
};

Item.propTypes={
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
}

export default Item;
