import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bloodtype } from "@mui/icons-material";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCartAsync, selectItems, updateCartAsync } from "./cartSlice";

export default function Cart() {
  const [open, setOpen] = useState(true);
  const items = useSelector(selectItems);
  const dispatch = useDispatch();
  const totalAmount = items.reduce(
    (amount, item) => item.price * item.quantity + amount,
    0
  );
  const totalItems = items.reduce((total, item) => item.quantity + total, 0);
  const handleQuantity = (e, item) => {
    console.log(item,'inside   cart')
    dispatch(updateCartAsync({ ...item, quantity: +e.target.value })); // yhaa value string me aayegi to usko integer me convert kraa h
  };
  const handleRemove = (e, id) => {
    console.log(id,'inside cart')
    dispatch(deleteFromCartAsync(id)); // yhaa value string me aayegi to usko integer me convert kraa h
  };

  return (

    <>
      {!items.length && <Navigate to='/' replace={true}></Navigate>}
      <div className="mx-auto bg-white pb-12 mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl my-12 text-center font-bold tracking-tight text-gray-900">
            Cart
          </h2>
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {items.map((product) => (
                <li key={product.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href={product.href}>{product.title}</a>
                        </h3>
                        <p className="ml-4">${product.price}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.brand}
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="text-gray-500">
                        <bold className="mr-2 font-bold">Qty</bold>{" "}
                        <select onChange={(e) => handleQuantity(e, product)} value={product.quantity}>
                          <option id="1">1</option>
                          <option id="2">2</option>
                          <option id="3">3</option>
                          <option id="2">4</option>
                          <option id="3">5</option>
                        </select>
                      </div>

                      <div className="flex">
                        <button
                          type="button"
                          onClick={e=>handleRemove(e,product.id)}
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex my-2 justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>${totalAmount}</p>
          </div>
          <div className="flex my-2 justify-between text-base font-medium text-gray-900">
            <p>Total Items in cart</p>
            <p>{totalItems} item</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <Link
              to="/checkout"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </Link>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or
              <Link to="/">
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={() => setOpen(false)}
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
