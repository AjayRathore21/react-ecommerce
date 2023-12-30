// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) =>
    // TODO will write server url after some time
    {
      const res = await fetch("http://localhost:8080/products");
      const data = await res.json();
      resolve({ data });
    }
  );
}

export function fetchProductByFilters(filter) {
  // filter object--> {'category':'smartphone'}

  //TODO--> multiple category filter should implement

  let queryString = "";
  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`; // query me space nahi hona chahiye!!
  }

  console.log("api-->", queryString);

  return new Promise(async (resolve) =>
    // TODO will write server url after some time
    {
      const res = await fetch("http://localhost:8080/products?" + queryString);

      const data = await res.json();

      resolve({ data });
    }
  );
}
