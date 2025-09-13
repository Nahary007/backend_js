import type { JSX } from "react";
import BlockHeaderData from "../../blocHeaderData/BlockHeaderData"
import styles from "./HomeSection.module.css"
import { Building2, Calendar, Car } from "lucide-react";
import LoadAnimation from "../../load/LoadAnimation";

interface HomeSectionProps {
    nbrParking: number | 0;
    nbrCar: number | 0;
    nbrBooking: number | 0;
}

export interface DataHeader {
    title: String;
    nbr: number;
    icon: JSX.Element;
    color: string;
}

function HomeSection({ nbrParking = 0, nbrCar = 0, nbrBooking = 0 }: HomeSectionProps) {

    const dataHeader: DataHeader[] = [
        {
            title: "Parkings",
            nbr: nbrParking,
            icon: <Building2 size={32} color="#4f39f6"/>,
            color: "#4f39f6"
        },
        {
            title: "Véhicules",
            nbr: nbrCar,
            icon: <Car size={32} color="#00a63e"/>,
            color: "#00a63e"
        },
        {
            title: "Réservations",
            nbr: nbrBooking,
            icon: <Calendar size={32} color="#f54a00"/>,
            color: "#f54a00"
        }
    ];

    const isLoad = false;


    if(isLoad) {
        return <LoadAnimation></LoadAnimation>
    }

    

    return (
        <div className={styles.homeSection}>
            <section className={styles.homeHeader}>
                {
                    dataHeader.map(
                        (value: DataHeader, index: number) =>
                            <BlockHeaderData
                                title={value.title}
                                nbr={value.nbr}
                                icon={value.icon}
                                color={value.color}
                            ></BlockHeaderData>
                    )
                }
            </section>
        </div>
    )
}

export default HomeSection