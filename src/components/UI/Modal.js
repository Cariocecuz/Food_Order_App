import React from "react";
import classes from "./Modal.module.css";
import ReactDom from "react-dom";

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClose} ></div>;
}
function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

const portalDInfo = document.getElementById("overlays");

function Modal(props) {
  return (
    <React.Fragment>
      {ReactDom.createPortal(<Backdrop onClose={props.onClose} />, portalDInfo)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalDInfo
      )}
    </React.Fragment>
  );
}

export default Modal;
