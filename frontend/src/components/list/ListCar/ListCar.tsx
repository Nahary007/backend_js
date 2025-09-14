import { cars } from "./carsData";
import LigneListe from "../LigneListCar/LigneList";
import style from "./ListCar.module.css";

interface ListCarProps {
  onDelete: (id: number) => void;
}
function ListCar({ onDelete }: ListCarProps) {
  return (
    <div className={style.listContainer}>
      {cars.map((c) => (
        <LigneListe 
          onClikDeleteBtn={()=> onDelete(c.id)}
          key={c.id} 
          car={c} />
      ))}
    </div>
  );
}

export default ListCar;
