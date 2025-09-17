import type { DataHeader } from "../section/SectionHome/HomeSection"
import styles from "./BlockHeaderData.module.css"

interface BlockHeaderDataProps extends DataHeader{}

function BlockHeaderData({title, nbr, icon, color}: BlockHeaderDataProps) {
  return (
    <div className={styles.BlockHeaderData}>
      <section>
        <p>{ title }</p>
        { icon }
      </section>
      <span style={{color}}> { nbr } </span>
    </div>
  )
}

export default BlockHeaderData