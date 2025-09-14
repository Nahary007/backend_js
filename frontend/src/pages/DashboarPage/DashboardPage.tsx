import styles from "./DashboardPage.module.css"
import SideBarre from "../../components/barre/SideBarre/SideBarre"
import TopBarre from "../../components/barre/TopBarre/TopBarre"
import { useEffect, useState } from "react"
import HomeSection from "../../components/section/SectionHome/HomeSection";
import ParkingSection from "../../components/section/SectionParking/ParkingSection";
import CarSection from "../../components/section/SectionCar/CarSection";
import { parkings } from "../../components/list/ListParking/ListParking";

export interface Parking {
  id: number;
  name: string;
  location: string;
  capacity: number;
}

export interface Car {
  id: number;
  plateNumber : string;
  ownerName: string;
}


function DashboardPage() {

  const [search, setSearch] = useState("");
  const [userName, setUserName] = useState("User");
  const [selectedParking, setSelectedParking] = useState<Parking | null>(null);


  const [ car, setCar ] = useState<Car>(
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
      capacity: 0
    }
  )

  const handleChangeCar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setCar(prev => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value
    }));
  };

  const handleChangeParking = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setParking(prev => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value
    }));
  };

  useEffect(() => {
    console.log("Parking mis à jour :", parking);
    console.log("Car mis à jour :", car);
    console.log("selectedParking :", selectedParking);
  }, [ parking, car, selectedParking ]);

  return (
    <div className={styles.dashboardPage}>

      <section className={styles.sideBarreContainer}>
        {/* SideBarre */}
        <SideBarre />

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
          {/* <HomeSection 
            nbrParking={0} 
            nbrCar={0} 
            nbrBooking={0}            
          ></HomeSection> */}

          {/* <ParkingSection
            parking={parking}
            handleChange={handleChangeParking}
          ></ParkingSection> */}

          <CarSection 
            car={car}
            parkingList={parkings} 
            getParkingSelected={setSelectedParking}
            handleChange={handleChangeCar}      
          ></CarSection>
        </section>

      </div>
    </div>
  )
}

export default DashboardPage