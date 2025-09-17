import LigneListe from "../LigneListCar/LigneList";
import style from "./ListCar.module.css";
import type { Car, Parking } from "../../../pages/DashboarPage/DashboardPage";
import { useQuery } from "@tanstack/react-query";
import { getCarsByParking } from "../../../../api/services/carService";
import LoadAnimation from "../../load/LoadAnimation";
import { useEffect, useMemo } from "react";

interface ListCarProps {
  search: string;
  selectedParking: Parking | null;
  handleTotalCar : (nbr: number) => void;
  onDelete: (id: number) => void;
  selectCarToUpdate: (car: Car) => void;
}

function ListCar({ search, selectedParking,handleTotalCar, onDelete, selectCarToUpdate }: ListCarProps) {
  
  const { data: carList = [], isLoading } = useQuery({
    queryKey: ["carList", selectedParking?.id],
    queryFn: () => selectedParking ? getCarsByParking(selectedParking.id) : [],
    enabled: !!selectedParking,
  });

  const filteredCars = useMemo(() => {
    if (!search) return carList;

    return carList.filter((c: Car) =>
      c.ownerName.toLowerCase().includes(search.toLowerCase()) ||
      c.plateNumber.toLowerCase().includes(search.toLowerCase()) ||
      c.id.toString() === search
    );
  }, [search, carList]);

  useEffect(()=>{
    handleTotalCar(carList.length);
  }, [selectedParking, handleTotalCar, carList] )

  if (isLoading) return <LoadAnimation />;

  if (filteredCars.length === 0) {
    return (
      <p style={{
        textAlign: "center",
        color: "#888",
        fontSize: "16px",
        marginTop: "12px",
      }}>
        Aucun véhicule trouvé
      </p>
    );
  }

  return (
    <div className={style.listContainer}>
      {filteredCars.map((c: Car) => (
        <LigneListe
          key={c.id}
          car={c}
          onClikUpdateBtn={() => selectCarToUpdate(c)}
          onClikDeleteBtn={() => onDelete(c.id)}
        />
      ))}
    </div>
  );
}

export default ListCar;
