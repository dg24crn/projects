/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import Subscription from "@/components/subscription/Subscription";

const Subscriptions = () => {
  return (
    <div>
      <Navbar />
      <div
        id="titleContainer"
        className="flex items-center justify-center h-40"
      >
        <h1 className="text-4xl">My Subscriptions</h1>
      </div>
      <div
        id="subsContainer"
        className="border-black border rounded-xl w-6/12 m-auto"
      >
        <Subscription />
        <h2 className="text-center">Add Subscription</h2>
      </div>
      <div></div>
    </div>
  );
};

export default Subscriptions;
