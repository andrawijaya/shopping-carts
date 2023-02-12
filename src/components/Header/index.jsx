import React from "react";

const Header = () => {
  return (
    <>
      <div className="relative w-full">
        <div className="fixed-top mx-auto">
          <div className="flex justify-center border-b-2  bg-gray-50  border-gray-100 py-6 md:space-x-10">
            <nav>
              <a
                href="/#"
                className="text-xl font-bold text-gray-900 hover:text-gray-500"
              >
                Shopping Cart
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
