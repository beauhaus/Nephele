import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const SlidersModal = ({ children }) => {
  //this takes out my garbage
  const elRef = useRef(null);

  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById("sliders-modal");
    modalRoot.appendChild(elRef.current);
    /*
     * returning a function.
     * This is the ComponentWillUnmount version of HOOKS
     */
    return () => modalRoot.removeChild(elRef.current);
  }, []);
  return createPortal(
    <div className="created-portal">{children}</div>,
    elRef.current
  );
};

export default SlidersModal;
