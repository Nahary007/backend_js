import styles from "./DashboardPage.module.css"
import SideBarre from "../../components/barre/SideBarre/SideBarre"
import TopBarre from "../../components/barre/TopBarre/TopBarre"
import { useState } from "react"
import HomeSection from "../../components/section/SectionHome/HomeSection";
import ParkingSection from "../../components/section/SectionParking/ParkingSection";
import CarSection from "../../components/section/SectionCar/CarSection";
import { parkings } from "../../components/list/ListParking/ParkingData";
import Confirm from "../../components/popup/Confirm/Confirm";
import UpdateCar from "../../components/popup/UpdateForm/CarUpdateForm/UpdateCar";
import UpdateParking from "../../components/popup/UpdateForm/ParkingUpdateForm/UpdateParking";

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
}


function DashboardPage() {
  // Navigation sur les sections
  const [activeSection, setActiveSection] = useState("home");

  const [search, setSearch] = useState("");
  const [userName, setUserName] = useState("User");

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
      ownerName: ''
    }
  )

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
  const deleteParkingAction = (id: number) => {
    console.log("Parking avec l'id supprimer: " + id);
  }

  const updateParkingAction = (updatedParking: Parking) => {
    console.log("Parking modifiée :", updatedParking);
    setShowUpdateParking(false);
    setSelectedParking(null)
  }

  // Action ratacher a la section Car/Booking
  const deleteCarAction = (id: number) => {
    console.log("Vehicule avec l'id supprimer: " + id);
  }
  const updateCarAction = (updatedCar: Car) => {
    console.log("Car modifiée :", updatedCar);
    setShowUpdateCar(false);
    setSelectedCar(null)
  }

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
        ownerName: ''
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
              nbrParking={0}
              nbrCar={0}
              nbrBooking={0}
            />
          )}

          {activeSection === "parking" && (
            <ParkingSection
              parkingDataForm={parking}
              parkingList={parkings}
              resetParkingDataForm={resetParkingDataForm}
              handleChange={handleChangeParking}
              selectParkingToUpdate={selectParkingToUpdate}
              onSubmit={(e) => {
                e.preventDefault();
                alert(parking.name);
                resetParkingDataForm();
              }}
              onDelete={(id) =>
                askConfirm(
                  "Voulez-vous vraiment supprimer ce parking ?",
                  () => deleteParkingAction(id)
                )
              }
            />
          )}

          {activeSection === "car" && (
            <CarSection
              carDataForm={car}
              parkingList={parkings}
              resetCarDataForm={resetCarDataForm}
              getParkingSelected={setSelectedParking}
              handleChange={handleChangeCar}
              selectCarToUpdate={selectCarToUpdate}
              onSubmit={(e) => {
                e.preventDefault();
                alert(car.ownerName);
                resetCarDataForm();
              }}
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