/* eslint-disable @next/next/no-img-element */
'use client'
import React from "react";
import subsDatabase from "@/helpers/subsDatabase";

const Subscription = () => {

    const handleCancel = () => {
        alert("Subscription Cancelled")
    }

  return (
    <div id="subscriptionContainer">
      {subsDatabase.map((subscription, index) => (
        <div key={index} className="rounded-xl p-4 m-6 bg-cyan-200">
          <div className="flex-row text-center">
            <img
              src={subscription.logo}
              alt={`${subscription.name} logo`}
              className="h-20 rounded-2xl m-auto"
            />
            <h2 className="text-3xl">{subscription.name}</h2>
          </div>
          <div className="flex-row text-center">
            <p className="text-xl">{subscription.price} | {subscription.type}</p>
            <p>Renew Date: {subscription.renew}</p>
            <p className="underline">{subscription.active ? "Active" : "Inactive"}</p>
          </div>
          <div className="text-center">
            <button onClick={handleCancel} className="border-black border rounded-xl p-1">Cancel</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Subscription;
