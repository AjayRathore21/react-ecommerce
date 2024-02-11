import { Update } from "@mui/icons-material";

// A mock function to mimic making an async request for data
export function addToCart(item) {
  return new Promise(async (resolve) => {
    try {
      const response = await fetch("http://localhost:8080/cart", {
        method: "POST",
        body: JSON.stringify(item),
        headers: { "content-type": "application/json" },
      });

      const data = await response.json();
      // console.log(data, "inside authapi");
      // TODO: On server this will return only relevant info (not send the password!)
      resolve({ data });
    } catch (err) {
      console.error("Error in addToCart API:", err);
    }
  });
}

export function fetchItemsByUserId(userId) {
  return new Promise(async (resolve) =>
    // TODO will write server url after some time
    {
      const res = await fetch("http://localhost:8080/cart?user=" + userId);
      const data = await res.json();
      console.log(data, "inside fetchItemsByUserId");
      resolve({ data });
    }
  );
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    try {
      const response = await fetch("http://localhost:8080/cart/" + update.id, {
        method: "PATCH",
        body: JSON.stringify(update),
        headers: { "content-type": "application/json" },
      });

      const data = await response.json();
      // console.log(data, "inside authapi");
      // TODO: On server this will return only relevant info (not send the password!)
      resolve({ data });
    } catch (err) {
      console.error("Error in addToCart API:", err);
    }
  });
}

export function deleteFromCart(itemId) {
  return new Promise(async (resolve) => {
    try {
      const response = await fetch("http://localhost:8080/cart/" + itemId, {
        method: "DELETE",

        headers: { "content-type": "application/json" },
      });

      // const data = await response.json();
      // console.log(data, "inside authapi");
      // TODO: On server this will return only relevant info (not send the password!)
      resolve({ data: { id: itemId, message: "Item deleted successfully!" } });
    } catch (err) {
      console.error("Error in addToCart API:", err);
    }
  });
}

export async function resetCart(userId) {
  return new Promise(async (resolve) => {
    //get all items of user's cart and then delete each
    const response = await fetchItemsByUserId(userId);
    const items = response.data;

    for (let item of items) {
      await deleteFromCart(item.id);
    }

    resolve({ status: "success" });
  });
}
