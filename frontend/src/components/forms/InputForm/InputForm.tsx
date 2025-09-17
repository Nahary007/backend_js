import styles from './InputForm.module.css';
import hide from "../../../assets/icons/hide.png";
import show from "../../../assets/icons/show.png";
import { useState } from 'react';

type InputFormProps = {
  label: string;
  errorMessage: string;
  placeholder: string;
  type: string;
  name: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputForm({ label,errorMessage, placeholder, type, name, value, onChange }: InputFormProps) {
  const [showMdp, setShowMdp] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowMdp(prev => !prev);
  };

  // définir dynamiquement le type réel
  const inputType = type === "password" && showMdp ? "text" : type;

  return (
    <div className={styles.inputForm}>
      <label htmlFor={name}>{label}</label>
      <section style={{ position: "relative" }}>
        <input
          id={name}
          type={inputType}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...(type === "number" ? { min: 10, max: 100} : {})}
        />
        <p style={{
          position: "absolute",
          color:"var(--color-danger)",
          fontSize: "14px",
          bottom:"-20px",
          right : "0",
          fontWeight:"500"
          }}>{errorMessage}</p>
        {type === "password" && (
          <img
            onClick={togglePasswordVisibility}
            src={showMdp ? hide : show}
            alt={showMdp ? "Masquer le mot de passe" : "Afficher le mot de passe"}
            style={{ cursor: "pointer" }}
          />
        )}
      </section>
    </div>
  );
}

export default InputForm;
