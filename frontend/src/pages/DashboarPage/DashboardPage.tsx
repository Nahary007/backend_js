import styles from "./DashboardPage.module.css"
import SideBarre from "../../components/barre/SideBarre/SideBarre"
import TopBarre from "../../components/barre/TopBarre/TopBarre"
import { useEffect, useState } from "react"
import HomeSection from "../../components/section/SectionHome/HomeSection";
import ParkingSection from "../../components/section/SectionParking/ParkingSection";

export interface Parking {
  id: number;
  name: string;
  location: string;
  capacity: number;
}


function DashboardPage() {

  const [search, setSearch] = useState("");
  const [userName, setUserName] = useState("User");

  const [parking, setParking] = useState<Parking>(
    {
      id: 0,
      name: '',
      location: '',
      capacity: 0
    }
  )

  const handleChangeParking = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setParking(prev => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value
    }));
  };


  useEffect(() => {
    console.log("Parking mis à jour :", parking);
  }, [parking]);

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

          <ParkingSection
            parking={parking}
            handleChange={handleChangeParking}
          ></ParkingSection>
        </section>

      </div>
    </div>
  )
}

export default DashboardPage