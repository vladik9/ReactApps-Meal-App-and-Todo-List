import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
function BackDroop(props) {
  return <div onClick={props.onClose} className={classes.backdrop} />;
}
function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

export default function Modal(props) {
  const portalElement = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(
        <BackDroop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}
