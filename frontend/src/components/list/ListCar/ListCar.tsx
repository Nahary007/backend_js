import { cars } from "./carsData";
import LigneListe from "../LigneListCar/LigneList";
import style from "./ListCar.module.css";

function ListCar() {
  return (
    <div className={style.listContainer}>
      {cars.map((c) => (
        <LigneListe key={c.id} car={c} />
      ))}
    </div>
  );
}

export default ListCar;
