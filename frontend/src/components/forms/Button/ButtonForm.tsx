import styles from "./ButtonForm.module.css"

interface ButtonFormProps {
    text : String
}

function ButtonForm({text} : ButtonFormProps) {
  return (
    <button>
        {text}
    </button>
  )
}

export default ButtonForm