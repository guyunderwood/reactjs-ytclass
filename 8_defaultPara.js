// Default Parameter

getDataCust = (custName, custAddr = "Berlin") => {  // set dafault para to "Berlin"
  const addr = `Customer's Name: ${custName}
    Address : ${custAddr}`;
  return addr;
};

console.log(getDataCust("Dominic Decoco", "Roma")); //normally

console.log(getDataCust("Hans Landa"));
