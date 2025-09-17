import React from "react";
import styles from "./Confirm.module.css";
import ButtonForm from "../../forms/Button/ButtonForm";
import { AlertTriangleIcon } from "lucide-react";

interface ConfirmProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

function Confirm({ message, onConfirm, onCancel }: ConfirmProps) {

  return (
    <div className={styles.popup} >
      <div className={styles.popupContent} >
        <p style={{display:"flex", alignItems:"center", gap: "12px"}}> {< AlertTriangleIcon size={36} style={{color : "var(--color-danger)"}}/>} {message}</p>
        
        <div className={styles.actions}>
          <ButtonForm
            color={"primary"}
            text={"Oui"}
            onClick={onConfirm}
          ></ButtonForm>
          <ButtonForm
            onClick={onCancel}
            color={"gray"}
            text={"Non"}
          ></ButtonForm>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
