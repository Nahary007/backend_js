import type { Parking } from "../../../pages/DashboarPage/DashboardPage";
import LigneListe from "../LigneListParking/LigneListe";
import style from "./ListParking.module.css"


interface ListParkingProps {
  parkingList : Parking[]
  onDelete: (id: number) => void;
  selectParkingToUpdate: (parking: Parking) => void
}

function ListParking({parkingList, onDelete, selectParkingToUpdate} : ListParkingProps) {
  return (
    <div className={style.listContainer}>
      {parkingList.map((p) => (
        <LigneListe 
          onClickEdit={ () => selectParkingToUpdate(p) }
          onClickDelete = { () => onDelete(p.id) }
          key={p.id} 
          parking={p} 
        />
      ))}
    </div>
  )
}

export default ListParking