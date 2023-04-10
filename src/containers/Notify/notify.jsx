import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import Check from "../../assets/img/check.svg";

const ToastWrapper = styled.div`
  /* width: 380px; */
  width: 90%;
  min-height: 60px;
  // padding: 12px 12px 27px 20px;
  padding: 12px;
  border-radius: 6px;
  background-color: aliceblue;
  white-space:pre-line;
  // box-shadow: 0 4px 12px 1px rgba(24, 186, 108, 0.3);
  /* success */
  // background-image: linear-gradient(to top, #00904b, #18ba6c);
  /* error */
  // background-image: linear-gradient(to top, #d11919, #ff4848);
  /* Warning */
  // background-image: linear-gradient(to top, #f2d27b, #ff901d);
  /* Info */
  // background-image: linear-gradient(to top, #5930e6, #6177fe);

  // display: flex;
  position: relative;
  align-items: center;
  .close-icon {
    position: absolute;
    right: 15px;
    top: 10px;
    cursor: pointer;
  }
  .h1 {
    font-size: 1.1em;
    color: slategrey;
    font-weight: bold;
  }
`;

const ToastBodyWrapper = styled.div`
  flex-direction: column;
  color: white;
  margin-left: 15px;
  min-width: 68%;
  white-space:pre-line;
  margin-top:10px;
`;

const ToastTitle = styled.h1`
margin:0;`;

const ToastBody = styled.p`
margin:0;
margin-top:5px;`;


// <img src={CloseIcon} className="close-icon" onClick={closeToast} />

export const CustomToast = ({ Source, ToastBody }) => {
  return (
  <ToastWrapper>
    <h1>{Source}</h1>
    <p>{ToastBody}</p>
  </ToastWrapper>
  );
};
