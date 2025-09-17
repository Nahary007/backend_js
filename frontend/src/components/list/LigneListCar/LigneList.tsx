import { AlertCircle, Delete, Edit, X } from "lucide-react";
import type { Car } from "../../../pages/DashboarPage/DashboardPage";
import styles from "./LigneListe.module.css";

interface LigneListeProps {
  car: Car;
  onClikUpdateBtn: () => void;
  onClikDeleteBtn: () => void;
}

function LigneListe({ car, onClikDeleteBtn, onClikUpdateBtn }: LigneListeProps) {
  const now = new Date();
  const start = new Date(car.startTime);
  const end = new Date(start.getTime() + car.duration * 60 * 1000); // duration en minutes
  const isOverdue = now > end;

  return (
    <div
      className={styles.ligne}
      style={{ backgroundColor: isOverdue ? "rgba(255,0,0,0.1)" : "" }}
    >
      <div className={styles.info}>
        <h3>{car.plateNumber}</h3>
        <p style={{
          fontWeight: "bold",
          color: "#2c3e50",
          borderLeft: "4px solid #3498db",
          paddingLeft: "6px"
        }}>
          👤 {car.ownerName}
        </p>

        <p>Début : {start.toLocaleString()}</p>
        <p>Durée : {car.duration} min</p>
        {isOverdue && <p style={{ color: "red", fontWeight: "bold", display: "flex", alignItems: "center", gap: "4px" }}><AlertCircle></AlertCircle> <span>Temps dépassé !</span></p>}
      </div>
      <div className={styles.actions} style={{ display: "flex", gap: "8px" }}>
        <button className={styles.editBtn} onClick={onClikUpdateBtn}>
          <Edit size={24} />
        </button>
        <button className={styles.deleteBtn} onClick={onClikDeleteBtn}>
          <X size={30} />
        </button>
      </div>
    </div>
  );
}

export default LigneListe;
