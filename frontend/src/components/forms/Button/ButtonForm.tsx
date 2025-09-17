import styles from "./ButtonForm.module.css"

interface ButtonFormProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text : String;
}

function ButtonForm({text, color, ...rest } : ButtonFormProps) {
  return (
    <button
      className={`${styles.btn} ${color}`}
      {...rest}
    >
        {text}
    </button>
  )
}

export default ButtonForm