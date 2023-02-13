import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { amount, shipping } = useSelector((state) => state.productReducer);

  const shippingDisplay = shipping === 0 ? "Gratis" : shipping;

  const totalAmount = amount + shipping;

  return (
    <div className="flex md:mt-6 flex-col">
      <div className="min-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-4 text-xl font-bold tracking-tighter w-72 text-gray-900 w-dark:text-white">
          The total amount of
        </h5>
        <div className="flex justify-between">
          <p className="mb-1 text-base font-normal">Temporary amount</p>
          <span>${amount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <p className="mb-3 text-base tracking-tighter font-normal">
            Shipping
          </p>
          <span>{shippingDisplay}</span>
        </div>

        <hr className="mb-2" />
        <p className="mb-1 font-bold text-gray-900">The total amount of</p>
        <div className="flex justify-between">
          <p className="mb-3 font-bold text-gray-900">(including VAT)</p>
          <span className="font-bold">${totalAmount.toFixed(2)}</span>
        </div>
        <div className="mt-6">
          <a
            href="#"
            className="flex justify-center items-center px-3 py-2 text-xs font-normal h-10 text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            GO TO CHECKOUT
          </a>
        </div>
      </div>
      <div className="mt-4 min-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <select
          defaultValue={"default"}
          className="flex justify-between text-gray-500 group cursor-pointer items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none w-full"
          aria-label="Default select example"
        >
          <option value="default">Add a discount code [optional]</option>
          <option value="1">55555 - Discount 50%</option>
          <option value="2">12897 - Discount 70%</option>
          <option value="3">12345 - Discount 90%</option>
        </select>
      </div>
    </div>
  );
};
export default Checkout;
