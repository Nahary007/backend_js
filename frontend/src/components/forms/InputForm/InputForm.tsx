import styles from './InputForm.module.css';
import hide from "../../../assets/icons/hide.png";
import show from "../../../assets/icons/show.png";
import { useState } from 'react';

type InputFormProps = {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputForm({ label, placeholder, type, name, value, onChange }: InputFormProps) {

  const [showMdp, setShowMdp] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowMdp(b => !b);
  }

  return (
    <div className={styles.inputForm}>
      <label htmlFor={name}>{label}</label>
      <section style={{position: "relative"}}>
        <input
          id={name}
          type={ !showMdp ? type : "text"}
          name={name}
          min={10}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {type == "password" && <img onClick={togglePasswordVisibility} src={showMdp ? hide : show} />}
      </section>
    </div>
  );
}

export default InputForm;
