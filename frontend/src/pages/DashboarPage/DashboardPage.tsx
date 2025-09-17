import styles from "./DashboardPage.module.css";
import SideBarre from "../../components/barre/SideBarre/SideBarre";
import TopBarre from "../../components/barre/TopBarre/TopBarre";
import { useEffect, useMemo, useState } from "react";
import HomeSection from "../../components/section/SectionHome/HomeSection";
import ParkingSection from "../../components/section/SectionParking/ParkingSection";
import CarSection from "../../components/section/SectionCar/CarSection";
import Confirm from "../../components/popup/Confirm/Confirm";
import UpdateCar from "../../components/popup/UpdateForm/CarUpdateForm/UpdateCar";
import UpdateParking from "../../components/popup/UpdateForm/ParkingUpdateForm/UpdateParking";
import { getParkings } from "../../../api/services/parkingService";
import { useQuery } from "@tanstack/react-query";
import { useCreateParking } from "../../../hooks/useCreateParking";
import { useDeleteParking } from "../../../hooks/useDeleteParking";
import { useUpdateParking } from "../../../hooks/useUpdateParking";
import { useCreateCar } from "../../../hooks/useCreateCar";
import { useDeleteCar } from "../../../hooks/useDeleteCar";
import { useUpdateCar } from "../../../hooks/useUpdateCar";
import { data } from "react-router-dom";
import { getCars } from "../../../api/services/carService";

export interface Parking {
  id: number;
  name: string;
  location: string;
  capacity: number;
}

export interface Car {
  id: number;
  plateNumber: string;
  ownerName: string;
  parkingId: number | undefined;
  startTime: string;
  duration: number;
}

function DashboardPage() {

  const { data: parkingList = [], isLoading } = useQuery({
    queryKey: ["parkingList"],
    queryFn: getParkings,
  });

  const { data: carList = [] } = useQuery({
    queryKey: ["carList"],
    queryFn: getCars,
  });

  // const d = parkingList;
  // console.log(d.filter((v: Parking) => v.id % 2 == 0));

  // Navigation sur les sections
  const [activeSection, setActiveSection] = useState("home");

  const [search, setSearch] = useState("");
  const [userName] = useState("User");

  // Hooks pour Parking
  const { mutate: createParkingMutate } = useCreateParking();
  const { mutate: deleteParkingMutate } = useDeleteParking();
  const { mutate: updateParkingMutate } = useUpdateParking();

  // Hooks Pour Car
  const { mutate: createCarMutate } = useCreateCar();
  const { mutate: deleteCarMutate } = useDeleteCar();
  const { mutate: updateCarMutate } = useUpdateCar();

  // Pour le popup UpdateCar
  const [showUpdateCar, setShowUpdateCar] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  // Pour le popup UpdateParking
  const [showUpdateParking, setShowUpdateParking] = useState(false);
  const [selectedParking, setSelectedParking] = useState<Parking | null>(null);

  // Pour afficher le popup de confirmation de suppression
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState("");
  const [onConfirmAction, setOnConfirmAction] = useState<() => void>(() => () => { });


  const [car, setCar] = useState<Car>(
    {
      id: 0,
      plateNumber: '',
      ownerName: '',
      parkingId: 0,
      startTime: new Date().toISOString(),
      duration: 10,
    }
  );


  const [parking, setParking] = useState<Parking>(
    {
      id: 0,
      name: '',
      location: '',
      capacity: 10
    }
  )


  // Pour le popup pour mettre a jour les donnees de la voiture
  const selectCarToUpdate = (car: Car) => {
    setShowUpdateCar(true);
    setSelectedCar(car);
  }

  // Pour le popup pour mettre a jour les donnees de la Parking
  const selectParkingToUpdate = (parking: Parking) => {
    setShowUpdateParking(true);
    setSelectedParking(parking);
  }

  // Action ratacher sur la section Parking
  const createParkingAction = (e: React.FormEvent) => {
    e.preventDefault();
    createParkingMutate({
      name: parking.name,
      location: parking.location,
      capacity: parking.capacity,
    });
    resetParkingDataForm();
  };

  const deleteParkingAction = (id: number) => {
    console.log("Parking avec l'id supprimer: " + id);
    deleteParkingMutate(id);
  }

  const updateParkingAction = (updatedParking: Parking) => {
    if (updatedParking !== selectedParking) {
      console.log("Parking modifiée :", updatedParking);
      updateParkingMutate({ id: updatedParking.id, dto: updatedParking });
    }
    setShowUpdateParking(false);
    setSelectedParking(null);
  }

  // Action ratacher a la section Car/Booking
  const createBookingAction = (e: React.FormEvent) => {
    e.preventDefault();
    createCarMutate(
      {
        plateNumber: car.plateNumber,
        ownerName: car.ownerName,
        parkingId: selectedParking?.id ?? 0,
        startTime: car.startTime,
        duration: car.duration
      });
    resetCarDataForm();
  }

  const deleteCarAction = (id: number) => {
    console.log("Vehicule avec l'id supprimer: " + id);
    deleteCarMutate(id);
  }

  const updateCarAction = (updatedCar: Car) => {
    console.log("Car modifiée :", updatedCar);
    console.log("Parking :", selectedParking);
    updateCarMutate({ id: updatedCar.id, dto: updatedCar })

    setShowUpdateCar(false);
    setSelectedCar(null)
  }

  const filteredParking = useMemo(() => {
    if (activeSection !== "parking") {
      return parkingList
    }

    if (!search) return parkingList;

    return parkingList.filter((p: Parking) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toString() === search
    );
  }, [activeSection, search, parkingList]);




  //Fonction pour le Popup de confirmation
  const askConfirm = (message: string, action: () => void) => {
    setConfirmMessage(message);
    setOnConfirmAction(() => action);
    setShowConfirm(true);
  };

  // Gerer les donnees des formulaire AddParking et Booking
  const handleChangeCar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setCar(prev => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value
    }));
  };


  const resetCarDataForm = () => {
    setCar(
      {
        id: 0,
        plateNumber: '',
        ownerName: '',
        parkingId: 0,
        startTime: new Date().toISOString(),
        duration: 10,
      }
    );
  }

  const handleChangeParking = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setParking(prev => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value
    }));
  };

  const resetParkingDataForm = () => {
    setParking(
      {
        id: 0,
        name: '',
        location: '',
        capacity: 10
      }
    );
  }

  useEffect(() => { console.log(selectedParking?.id) }, [selectedParking]);

  // Teste des flus de donnees
  // useEffect(() => {
  //   console.log("Parking mis à jour :", parking);
  //   console.log("Car mis à jour :", car);
  //   console.log("selectedParking :", selectedParking);
  //   console.log("selectedCar :" + selectedCar);
  //   alert(activeSection);
  // }, [parking, car, selectedParking, selectedCar]);

  return (
    <div className={styles.dashboardPage}>

      <section className={styles.sideBarreContainer}>
        {/* SideBarre */}
        <SideBarre
          activeSection={activeSection}
          onSelect={(section: string) => setActiveSection(section)}
        />

      </section>

      <div className={styles.layoutContainer}>

        <section className={styles.topBarreContainer}>

          {/* TopBarre */}
          <TopBarre
            userName={userName}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

        </section>

        <section className={styles.elementContainer}>
          {activeSection === "home" && (
            <HomeSection
              nbrParking={parkingList.length}
              nbrCar={carList.length}
            />
          )}

          {activeSection === "parking" && (
            <ParkingSection
              isLoading = {isLoading}
              parkingDataForm={parking}
              parkingList={filteredParking}
              resetParkingDataForm={resetParkingDataForm}
              handleChange={handleChangeParking}
              selectParkingToUpdate={selectParkingToUpdate}
              onSubmit={createParkingAction}
              onDelete={(id) =>
                askConfirm(
                  "Voulez-vous vraiment supprimer ce parking ?",
                  () => deleteParkingAction(id)
                )
              }
            />
          )
          }

          {parkingList.length !== 0 && activeSection === "car" && (
            <CarSection
              search = {search}
              carDataForm={car}
              selectedParking={selectedParking}
              parkingList={parkingList}
              resetCarDataForm={resetCarDataForm}
              getParkingSelected={setSelectedParking}
              handleChange={handleChangeCar}
              selectCarToUpdate={selectCarToUpdate}
              onSubmit={createBookingAction}
              onDelete={(id) =>
                askConfirm(
                  "Voulez-vous vraiment supprimer cette voiture ?",
                  () => deleteCarAction(id)
                )
              }
            />
          )}
        </section>
      </div>

      {
        showConfirm && <Confirm
          message={confirmMessage}
          onConfirm={() => {
            onConfirmAction();
            setShowConfirm(false);
          }}
          onCancel={() => setShowConfirm(false)}
        ></Confirm>
      }

      {
        // Ouvrir la formulaire popup pour mettre a jour les donnees du voiture
        showUpdateCar && selectedCar && (
          <UpdateCar
            car={selectedCar}
            onClose={
              () => {
                setShowUpdateCar(false);
                setSelectedCar(null);
              }
            }
            onUpdate={
              (updatedCar) => updateCarAction(updatedCar)
            }
          />
        )
      }
      {
        // Ouvrir la formulaire popup pour mettre a jour les donnees de Parking
        showUpdateParking && selectedParking && (
          <UpdateParking
            parking={selectedParking}
            onClose={
              () => {
                setShowUpdateParking(false);
                setSelectedParking(null);
              }
            }
            onUpdate={
              (updatedParking) => updateParkingAction(updatedParking)
            }
          />
        )
      }

    </div>
  )
}

export default DashboardPage

