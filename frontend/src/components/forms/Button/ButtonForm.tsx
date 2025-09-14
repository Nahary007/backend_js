import styles from "./ButtonForm.module.css"

interface ButtonFormProps {
    text : String;
    color : String;
}

function ButtonForm({text, color = "gray" } : ButtonFormProps) {
  return (
    <button className={`${styles.btn} ${color}`}>
        {text}
    </button>
  )
}

export default ButtonForm