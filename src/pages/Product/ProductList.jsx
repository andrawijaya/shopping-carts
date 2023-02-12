import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Checkout, Product } from "../../components";
import SweetAlert from "react-bootstrap-sweetalert";
import {
  changeWishList,
  deleteProduct,
} from "../../store/action/productAction";

const ProductList = () => {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [id, setId] = useState();

  const hideAlert = () => {
    setShowAlert(false);
  };

  const onConfirm = () => {
    setShowAlert(false);
    dispatch(deleteProduct(id));
  };

  const onDelete = (id) => {
    setId(id);
    setShowAlert(true);
    setAlertMessage("Product data will be remove!");
  };

  const handleChangeWishList = (id) => {
    dispatch(changeWishList(id));
  };

  return (
    <>
      <div>
        <SweetAlert
          show={showAlert}
          warning
          showCancel
          confirmBtnText="Yes, remove it!"
          confirmBtnBsStyle="danger"
          title="Are you sure?"
          onConfirm={onConfirm}
          onCancel={hideAlert}
          focusCancelBtn
        >
          {alertMessage}
        </SweetAlert>
      </div>

      <div className="flex m876:text-xs justify-between l1148:mx-0 mx-28 my-8 mt-32 md:flex-col md:mx-4  ">
        <Product onDelete={onDelete} changeWishList={handleChangeWishList} />
        <Checkout />
      </div>
    </>
  );
};

export default ProductList;
