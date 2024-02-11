import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUserInfo } from "../userSlice";

export default function UserProfile() {
  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);

  console.log(user, "inside userProfile ");

  const handleEdit = ()=>{

  }
  const handleRemove = ()=>{
    
  }

  return (
    <div className="mx-auto bg-white pb-12 mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl my-5 text-center font-bold tracking-tight text-gray-900">
          Name: {user?.name ? user.name : "New User"}
        </h2>
        <h3 className="text-xl my-5 text-center font-bold tracking-tight  text-red-900">
          Email Address: {user.email}
        </h3>
      </div>

      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <p className="mt-0.5 text-sm text-gray-500">Your Address:</p>
        {user.addresses.map((address,index) => (
          <div className="flex justify-between border  p-2 gap-x-6 py-5">
            <div className="flex  min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {address.name}
                </p>
                <p className="mt-1 truncate text-s leading-5 text-gray-500">
                  {address.email}
                </p>
                <p className="mt-1 truncate text-s leading-5 text-gray-500">
                  {address.pinCode}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">
                Phone: {address.phone}
              </p>
              <p className="mt-1 text-s leading-4 text-gray-500">
                {address.city}
              </p>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <button
                type="button"
                onClick={(e) => handleEdit(e,index)}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={(e) => handleRemove(e,index)}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
