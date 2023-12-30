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

export function fetchProductByFilters(filter, sort) {
  // filter object--> {'category':['smartphone','laptops']}
  // sort-->{_sort:'price',_order:'desc'}

  //TODO--> multiple category filter should implement

  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];

    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
    // query me space nahi hona chahiye!!
  }

  // console.log(queryString,'checking for filter')

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }

  // console.log(queryString,'checking for sort')

  return new Promise(async (resolve) =>
    // TODO will write server url after some time
    {
      const res = await fetch("http://localhost:8080/products?" + queryString);

      const data = await res.json();

      resolve({ data });
    }
  );
}
