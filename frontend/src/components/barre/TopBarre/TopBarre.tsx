import styles from "./TopBarre.module.css"
import logo from "../../../assets/logo.png";
import SearchBar, { type SearchBarProps } from "../../search/SearchBar";

interface TopBarreProps extends SearchBarProps {
  userName : String
}

function TopBarre( {value, onChange, userName } : TopBarreProps ) {
  const initial = userName.toString()[0].toUpperCase();
  return (
    <div className={styles.topBarre}>

      <SearchBar value={value} onChange={onChange}/>

      <section>
        <span className={styles.initial}>{ initial }</span>
        <span className={styles.userName}>{ userName }</span>
      </section>
      
    </div>
  )
}

export default TopBarre