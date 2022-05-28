
const Item = () => {
  const name = "Accomodation cost";
  const amount = 5000;

  return (
    <li>
      {name} <span>-{amount}</span>
    </li>
  );
};

export default Item;
