import { Edit, X } from "lucide-react";
import type { Parking } from "../../../pages/DashboarPage/DashboardPage"
import styles from "./LigneListe.module.css"

interface LigneListeProps {
  parking: Parking;
  onClick : () => void
}
function LigneListe({ parking, onClick }: LigneListeProps) {
  return (
    <div className={styles.ligne}>
      <div className={styles.info}>
        <h3>{ parking.name }</h3>
        <p>{ parking.location }</p>
      </div>
      <div className={styles.capacity}>
        <span>{ parking.capacity } places</span>
      </div>
      <div className={styles.actions} style={{display: "flex"}}>
        <button className={styles.editBtn}>{<Edit size={24}/>}</button>
        <button className={styles.deleteBtn} onClick={onClick}>{<X size={30}/>}</button>
      </div>
    </div>
  )
}

export default LigneListe