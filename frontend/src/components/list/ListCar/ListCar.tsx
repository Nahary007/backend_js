import { cars } from "./carsData";
import LigneListe from "../LigneListCar/LigneList";
import style from "./ListCar.module.css";
import type { Car } from "../../../pages/DashboarPage/DashboardPage";

interface ListCarProps {
  onDelete: (id: number) => void;
  selectCarToUpdate: (car: Car) => void;
}
function ListCar({ onDelete, selectCarToUpdate }: ListCarProps) {
  return (
    <div className={style.listContainer}>
      {cars.map((c) => (
        <LigneListe 
          onClikUpdateBtn={()=> selectCarToUpdate(c)}
          onClikDeleteBtn={()=> onDelete(c.id)}
          key={c.id} 
          car={c} />
      ))}
    </div>
  );
}

export default ListCar;
