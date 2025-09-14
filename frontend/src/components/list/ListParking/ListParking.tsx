import type { Parking } from "../../../pages/DashboarPage/DashboardPage";
import LigneListe from "../LigneListParking/LigneListe";
import style from "./ListParking.module.css"


interface ListParkingProps {
  parkingList : Parking[]
  onDelete: (id: number) => void;
}

function ListParking({parkingList, onDelete} : ListParkingProps) {
  return (
    <div className={style.listContainer}>
      {parkingList.map((p) => (
        <LigneListe 
          onClick = { () => onDelete(p.id)}
          key={p.id} 
          parking={p} 
        />
      ))}
    </div>
  )
}

export default ListParking