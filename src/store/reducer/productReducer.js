import constants from "../../constants";

import { productList, dummyPrice } from "../../data";

const { totalCart, tempAmount, shipping } = productList;

const initialState = {
  productList: [...productList.data],
  totalCart: totalCart,
  priceList: dummyPrice,
  amount: tempAmount,
  shipping: shipping,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ACTION.DELETE_PRODUCT:
      const productListCopy = [...state?.productList];
      const productWithIndex = productListCopy?.findIndex((product) => {
        return product.productId === action.payload;
      });

      const totalCartCopy = state?.totalCart - 1;

      productListCopy.splice(productWithIndex, 1);

      const productAmountCal = productListCopy.reduce(
        (acc, item) => acc + item.price,
        0
      );

      return {
        ...state,
        productList: productListCopy,
        totalCart: totalCartCopy,
        amount: productAmountCal,
      };

    case constants.ACTION.ADD_PRODUCT_COUNT:
      const productAddCountCopy = [...state?.productList];
      const productAddCountIndex = productAddCountCopy?.findIndex((product) => {
        return product.productId === action.payload;
      });

      const priceAddIndex = state?.priceList?.findIndex(
        (price) => price.productId === action.payload
      );

      productAddCountCopy[productAddCountIndex].numOfItem =
        productAddCountCopy[productAddCountIndex].numOfItem + 1;

      productAddCountCopy[productAddCountIndex].price =
        state?.priceList[priceAddIndex].price *
        productAddCountCopy[productAddCountIndex].numOfItem;

      const calAmountUp = productAddCountCopy.reduce(
        (acc, item) => acc + item.price,
        0
      );

      return {
        ...state,
        productList: productAddCountCopy,
        amount: calAmountUp,
      };

    case constants.ACTION.REMOVE_PRODUCT_COUNT:
      const productRemoveCountCopy = [...state?.productList];
      const productRemoveCountIndex = productRemoveCountCopy?.findIndex(
        (product) => product.productId === action.payload
      );

      const priceRemoveIndex = state?.priceList?.findIndex(
        (price) => price.productId === action.payload
      );

      productRemoveCountCopy[productRemoveCountIndex].numOfItem =
        productRemoveCountCopy[productRemoveCountIndex].numOfItem - 1;

      productRemoveCountCopy[productRemoveCountIndex].price =
        state?.priceList[priceRemoveIndex].price *
        productRemoveCountCopy[productRemoveCountIndex].numOfItem;

      const calAmountDown = productRemoveCountCopy.reduce(
        (acc, item) => acc + item.price,
        0
      );

      return {
        ...state,
        productList: productRemoveCountCopy,
        amount: calAmountDown,
      };

    case constants.ACTION.CHANGE_WISH_LIST:
      const productChangeWishListCopy = [...state?.productList];
      const productChangeWishListIndex = productChangeWishListCopy?.findIndex(
        (product) => product.productId === action.payload
      );

      productChangeWishListCopy[productChangeWishListIndex].like =
        !productChangeWishListCopy[productChangeWishListIndex].like;

      return {
        ...state,
        productList: productChangeWishListCopy,
      };

    default:
      return state;
  }
};

export default productReducer;
