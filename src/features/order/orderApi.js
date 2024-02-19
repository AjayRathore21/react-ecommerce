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


export function updateOrder(order) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/orders/'+order.id, {
      method: 'PATCH',
      body: JSON.stringify(order),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchAllOrders(sort, pagination) {
 let queryString = '';

 for (let key in sort) {
  queryString += `${key}=${sort[key]}&`;
}
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch(
      'http://localhost:8080/orders?' + queryString
    );
    const data = await response.json();
    const totalOrders = await response.headers.get('X-Total-Count');
    resolve({ data: { orders: data, totalOrders: +totalOrders } });
  });
}