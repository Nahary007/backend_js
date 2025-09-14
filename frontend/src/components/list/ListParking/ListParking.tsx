import type { Parking } from "../../../pages/DashboarPage/DashboardPage";
import LigneListe from "../LigneListParking/LigneListe";
import style from "./ListParking.module.css"

export const parkings: Parking[] = [
  { id: 1, name: "Parking Central", location: "Antananarivo", capacity: 50 },
  { id: 2, name: "Parking Est", location: "Antsirabe", capacity: 30 },
  { id: 3, name: "Parking Ouest", location: "Fianarantsoa", capacity: 40 },
  { id: 4, name: "Parking Sud", location: "Toamasina", capacity: 25 },
  { id: 5, name: "Parking Nord", location: "Mahajanga", capacity: 35 },
  { id: 6, name: "Parking Aeroport", location: "Antananarivo", capacity: 60 },
  { id: 7, name: "Parking Gare", location: "Antsirabe", capacity: 20 },
  { id: 8, name: "Parking Lycée", location: "Fianarantsoa", capacity: 15 },
  { id: 9, name: "Parking Marché", location: "Toamasina", capacity: 45 },
  { id: 10, name: "Parking Université", location: "Antananarivo", capacity: 70 },
  { id: 11, name: "Parking Hôtel", location: "Mahajanga", capacity: 25 },
  { id: 12, name: "Parking Stade", location: "Antsirabe", capacity: 50 },
];

function ListParking() {
  return (
    <div className={style.listContainer}>
      {parkings.map((p) => (
        <LigneListe key={p.id} parking={p} />
      ))}
    </div>
  )
}

export default ListParking