import constants from "../../constants";

export const deleteProduct = (id) => ({
  type: constants.ACTION.DELETE_PRODUCT,
  payload: id,
});

export const addProductCount = (id) => ({
  type: constants.ACTION.ADD_PRODUCT_COUNT,
  payload: id,
});

export const removeProductCount = (id) => ({
  type: constants.ACTION.REMOVE_PRODUCT_COUNT,
  payload: id,
});

export const changeWishList = (id) => ({
  type: constants.ACTION.CHANGE_WISH_LIST,
  payload: id,
});
