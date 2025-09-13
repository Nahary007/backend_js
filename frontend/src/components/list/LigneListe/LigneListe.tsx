import type { Parking } from "../../../pages/DashboarPage/DashboardPage"
import styles from "./LigneListe.module.css"

interface LigneListeProps {
  parking: Parking;
}
function LigneListe({ parking }: LigneListeProps) {
  return (
    <div className={styles.ligne}>
      <div className={styles.info}>
        <h3>{ parking.name }</h3>
        <p>{ parking.location }</p>
      </div>
      <div className={styles.capacity}>
        <span>{ parking.capacity } places</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.editBtn}>✏️</button>
        <button className={styles.deleteBtn}>🗑️</button>
      </div>
    </div>
  )
}

export default LigneListe