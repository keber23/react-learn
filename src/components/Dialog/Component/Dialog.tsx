import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import FocusTrap from "focus-trap-react";
import styles from "../Styles/Dialog.module.css";

interface DialogProps {
  title: string | JSX.Element;
  onClose: () => void;
  children: JSX.Element | JSX.Element[];
}

const Dialog: React.FC<DialogProps> = ({ title, onClose, children }) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [onClose]);

  const handleClose = () => {
    onClose();
  };

  return createPortal(
    <FocusTrap
      focusTrapOptions={{
        clickOutsideDeactivates: true,
        tabbableOptions: {
          displayCheck: "none",
        },
      }}
    >
      <div className={styles.overlay}>
        <div className={styles.dialog} ref={dialogRef}>
          <div className={styles.header}>
            <div className={styles.title}>{title}</div>
            <button
              data-testId="close-button"
              className={styles.closeButton}
              onClick={handleClose}
            >
              &#215;
            </button>
          </div>
          <div className={styles.body}>{children}</div>
        </div>
      </div>
    </FocusTrap>,
    document.body
  );
};

export default Dialog;
