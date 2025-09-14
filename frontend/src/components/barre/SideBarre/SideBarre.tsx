import styles from "./SideBarre.module.css";
import logo from "../../../assets/logo.png";
import { Home, Building2, Car, Calendar, LogOut } from "lucide-react";

interface SideBarreProps {
  activeSection: string;
  onSelect: (section: string) => void;
}

function SideBarre({ activeSection, onSelect }: SideBarreProps) {
  return (
    <div className={styles.sideBarre}>
      <div className={styles.sideBarreContent}>
        <section>
          <img src={logo} alt="Logo" /><span>Easy Parking</span>
        </section>
        <ul>
          <li 
            className={styles.home}  
            onClick={() => onSelect("home")}
            style={
              {
                background: activeSection === "home" ? "var(--color-primary)":""
              }
            }
          ><Home/> Accueil </li>

          <li 
            className={styles.parking} 
            onClick={() => onSelect("parking")}
            style={
              {
                background: activeSection === "parking" ? "var(--color-primary)":""
              }
            }
          ><Building2/> Parking </li>

          <li 
            className={styles.car} 
            onClick={() => onSelect("car")}
            style={
              {
                background: activeSection === "car" ? "var(--color-primary)":""
              }
            }
          ><Car/> Voiuture </li>
        </ul>
      </div>

      <div className={styles.sideBarreFooter}>
        <button>{<LogOut />}Logout</button>
      </div>
    </div>
  )
}

export default SideBarre