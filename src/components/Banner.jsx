import React from "react";
import MealButton from "../utils/MealButton";

const Banner = () => {
  return (
    <div className="flex flex-col gap-20 py-4 sm:py-8 container relative">
      <div className="-z-10 opacity-60 sm:opacity-85">
        <img className="absolute max-sm:left-0 max-sm:top-[20%]" src="/assets/png/leaf.png" alt="" />

        <img className="absolute right-0 max-sm:hidden" src="/assets/png/lemon.png" alt="" />
        <img
          className="absolute top-1/2 left-[30%] max-sm:top-[40%]"
          src="/assets/png/kiwi.png"
          alt=""
        />

        <img
          className="absolute top-[60%]"
          src="/assets/png/tomato.png"
          alt=""
        />
        <img
          className="absolute right-0 top-[70%] max-sm:hidden"
          src="/assets/png/apple.png"
          alt=""
        />
      </div>
      <h2 className="text-xl font-semibold text-center">
        Taste the Healthy Difference
      </h2>
      <p className="sm:w-1/2 sm:self-start text-slate-800">
        We Know that time is the greatest value in the modern world.Our healthy
        meal plan delivery service Good Food in Miami is the answer for those
        who want to eat healthily, saving time for buying food and preparing
        delicious, healthy meals.
      </p>
      <p className="sm:w-1/2 sm:self-end text-slate-800">
        In today's fast-paced world, we understand that time is an invaluable
        commodity. Nourish Express aims to provide wholesome, nutritious meals
        delivered to your doorstep, eliminating the need for grocery shopping
        and time-consuming meal preparation.
      </p>
      <div className="self-center">
        <MealButton />
      </div>
    </div>
  );
};

export default Banner;
