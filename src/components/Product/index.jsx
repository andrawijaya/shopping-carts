import React, { Fragment } from "react";
import { BiTrash } from "react-icons/bi";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { useSelector } from "react-redux";

import Counter from "../Counter";

const Product = ({ onDelete, changeWishList }) => {
  const { productList, totalCart } = useSelector(
    (state) => state.productReducer
  );

  return (
    <>
      <div className="sm:flex-col  p-6 bg-white border border-gray-200 rounded-lg shadow-md h-fit dark:bg-gray-800 dark:border-gray-700 w-[65%] md:w-full ">
        <h5 className="mb-4 text-xl font-bold tracking-tighter text-gray-900 w-dark:text-white">
          Cart {`(${totalCart} items)`}
        </h5>
        {productList.map((item, index) => (
          <Fragment key={index}>
            <div className="py-4 flex w-full m876:flex-col">
              <div className="md:flex md:justify-between s400:items-end flex min-w-fit">
                <div
                  className="block p-6 max-w-fit min-w-fit bg-gray-300 rounded-lg border
                    border-gray-200"
                >
                  <img className="w-24 h-24" src={item.img} alt="jaket-hitam" />
                </div>
                <Counter
                  displayMobile="sm:display  mdin:hidden s400:h-28 h-fit  s400:flex-col "
                  id={item.productId}
                  numberItem={item.numOfItem}
                />
              </div>
              <div className="ml-6 m876:ml-0 md:ml-0 sm:ml-0 flex flex-wrap">
                <div className="flex w-full h-fit justify-between ">
                  <p className=" text-xl font-bold">{item.title}</p>
                  <Counter
                    displayMobile="md:hidden"
                    id={item.productId}
                    numberItem={item.numOfItem}
                  />
                </div>
                <div className="flex w-full justify-between text-sm ">
                  <p>{item.subTitle}</p>
                  <p className="">{item.note}</p>
                </div>
                <div className="flex w-full text-sm mt-4">
                  <p className="">COLOR : {item.color}</p>
                </div>
                <div className="flex w-full text-sm mt-2 ">
                  <p className="">SIZE - {item.size}</p>
                </div>
                <div className="flex w-full sm:flex-wrap-reverse justify-between text-sm mt-4 ">
                  <div className=" flex">
                    <div
                      onClick={() => onDelete(item.productId)}
                      className="flex cursor-pointer hover:text-red-500"
                    >
                      <BiTrash size={20} />
                      <span className="ml-2">REMOVE ITEM</span>
                    </div>
                    <div
                      onClick={() => changeWishList(item.productId)}
                      className={
                        item?.like
                          ? "ml-6 flex cursor-pointer text-red-500 "
                          : "ml-6 flex cursor-pointer"
                      }
                    >
                      <BsFillSuitHeartFill size={20} />
                      <span className="ml-2">MOVE TO WISH LIST</span>
                    </div>
                  </div>

                  <p className="sm:pb-4 text-base font-bold">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
            <hr className="mb-2" />
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default Product;
