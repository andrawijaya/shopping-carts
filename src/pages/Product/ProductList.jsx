import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Checkout, Product } from "../../components";
import SweetAlert from "react-bootstrap-sweetalert";
import {
  changeWishList,
  deleteProduct,
} from "../../store/action/productAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [id, setId] = useState();
  const [title, setTitle] = useState();

  const hideAlert = () => {
    setShowAlert(false);
    setId("");
    setTitle("");
  };

  const onConfirm = () => {
    setShowAlert(false);
    dispatch(deleteProduct(id));
    toast.success(`${title} deleted !`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const onDelete = (id, title) => {
    setId(id);
    setTitle(title);
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
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>

      <div className="flex justify-between l1148:mx-0 mx-28 my-8 mt-32 md:flex-col md:mx-4  ">
        <Product onDelete={onDelete} changeWishList={handleChangeWishList} />
        <Checkout />
      </div>
    </>
  );
};

export default ProductList;
