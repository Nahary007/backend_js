import type { Parking } from "../../../pages/DashboarPage/DashboardPage";
import LoadAnimation from "../../load/LoadAnimation";
import LigneListe from "../LigneListParking/LigneListe";
import style from "./ListParking.module.css"


interface ListParkingProps {
  isLoading: boolean;
  parkingList : Parking[]
  onDelete: (id: number) => void;
  selectParkingToUpdate: (parking: Parking) => void
}

function ListParking({isLoading, parkingList, onDelete, selectParkingToUpdate} : ListParkingProps) {

  if (isLoading) return <LoadAnimation />;
  
  if ( parkingList.length === 0 ) {
    return (
      <p style={{
        textAlign: "center",
        color: "#888",
        fontSize: "16px",
        marginTop: "12px",
      }}>
        Aucun parking trouvé
      </p>
    );
  }
  
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