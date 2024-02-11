// A mock function to mimic making an async request for data
export function  createOrder(order) {
  return new Promise(async (resolve) => {

    try{
      const response = await fetch("http://localhost:8080/orders", {
        method: "POST",
        body: JSON.stringify(order),
        headers: { "content-type": "application/json" },
      });
  
      const data = await response.json();
      // console.log(data, "inside authapi");
      // TODO: On server this will return only relevant info (not send the password!)
      resolve({ data });

    }catch(err){
      console.error('Error in createOrder API:', err);
    }
   
  });
}