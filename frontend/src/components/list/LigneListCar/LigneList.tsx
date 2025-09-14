import { Delete, Edit, X } from "lucide-react";
import type { Car } from "../../../pages/DashboarPage/DashboardPage"
import styles from "./LigneListe.module.css"

interface LigneListeProps {
  car: Car;
  onClikDeleteBtn: () => void;
}
function LigneListe({ car, onClikDeleteBtn }: LigneListeProps) {
  return (
    <div className={styles.ligne}>
      <div className={styles.info}>
        <h3>{ car.plateNumber }</h3>
        <p>{ car.ownerName }</p>
      </div>
      <div className={styles.actions} style={{display: "flex"}}>
        <button className={styles.editBtn}>{<Edit size={24}/>}</button>
        <button className={styles.deleteBtn} onClick={onClikDeleteBtn}>{<X size={30}/>}</button>
      </div>
    </div>
  )
}

export default LigneListe