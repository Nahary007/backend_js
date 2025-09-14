import styles from "./SideBarre.module.css";
import logo from "../../../assets/logo.png";
import { Home, Building2, Car, Calendar, LogOut } from "lucide-react";
function SideBarre() {
  return (
    <div className={styles.sideBarre}>
      <div className={styles.sideBarreContent}>
        <section>
          <img src={logo} alt="Logo" /><span>Easy Parking</span>
        </section>
        <ul>
          <li className={styles.home}><Home/>Accueil</li>
          <li className={styles.parking}><Building2/>Parking</li>
          <li className={styles.car}><Car/>Voiuture</li>
        </ul>
      </div>

      <div className={styles.sideBarreFooter}>
        <button>{<LogOut />}Logout</button>
      </div>
    </div>
  )
}

export default SideBarre