import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchLoggedInUserOrderAsync,
  selectUserInfo,
  selectUserOrders,
} from "../userSlice";
import { discountedPrice } from "../../../app/constants";

export default function UserOrders() {
  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);
  const orders = useSelector(selectUserOrders);

  useEffect(() => {
    dispatch(fetchLoggedInUserOrderAsync(user.id));
  }, [dispatch, user.id]);

  {
    console.log(orders, "inside user order");
  }
  return (
    <div>
      {orders?.map((order) => (
        <div>
          <div className="mx-auto bg-white pb-12 mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl my-5 text-center font-bold tracking-tight text-gray-900">
                Order# {order.id}
              </h2>
              <h3 className="text-xl my-5 text-center font-bold tracking-tight  text-red-900">
                Order Status# {order.status}
              </h3>
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {order.items.map((product) => (
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
                            <p className="ml-4">${discountedPrice(product)}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.brand}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="text-gray-500">
                            <bold className="mr-2 font-bold">
                              Qty:{product.quantity}
                            </bold>{" "}
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
                <p>${order.totalAmount}</p>
              </div>
              <div className="flex my-2 justify-between text-base font-medium text-gray-900">
                <p>Total Items in cart</p>
                <p>{order.totalItems} item</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">Shipping Address:</p>
              <div className="flex justify-between border  p-2 gap-x-6 py-5">
                <div className="flex  min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {order.selectedAddress.name}
                    </p>
                    <p className="mt-1 truncate text-s leading-5 text-gray-500">
                      {order.selectedAddress.email}
                    </p>
                    <p className="mt-1 truncate text-s leading-5 text-gray-500">
                      {order.selectedAddress.pinCode}
                    </p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">
                    Phone: {order.selectedAddress.phone}
                  </p>
                  <p className="mt-1 text-s leading-4 text-gray-500">
                    {order.selectedAddress.city}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
