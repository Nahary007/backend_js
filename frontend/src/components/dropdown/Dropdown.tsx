import { useState } from "react";
import type { Parking } from "../../pages/DashboarPage/DashboardPage";
import styles from "./Dropdown.module.css"
import { parkings } from "../list/ListParking/ListParking";
import { ChevronDown, ChevronUp } from "lucide-react";

interface DropdownProps {
    parkingList: Parking[];
    getParkingSelected : (parking: Parking) => void
}

function Dropdown( { parkingList, getParkingSelected }: DropdownProps ) {

    const [selectedParking, setSelectedParking] = useState<Parking | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen( v => !v );
    }

    const selectOne = ( parking: Parking ) => {
        setSelectedParking(parking);
        setIsOpen(false);
        getParkingSelected(parking);
    }

    if ( parkingList.length === 0 ) {
        return(
            <div style={{ padding: "36px"}}></div>
        )
    }


    return (
        <div className={styles.dropdown} onMouseLeave={() => setIsOpen(false)}>
            <button className={styles.dropdownBtn} onClick={toggleDropdown}>
                <span>{selectedParking ? selectedParking.name : "Choisir une voiture"}</span> { !isOpen ? <ChevronDown/> : <ChevronUp/>}
            </button>

            {
                isOpen && <div className={styles.dropdownContent} >
                {parkingList.map((p) => (
                    <div
                        key={ p.id }
                        className={ styles.dropdownItem }
                        onClick={ () => selectOne(p) }
                    >
                        {p.name}
                    </div>
                ))}
            </div>
            }
        </div>
    )
}

export default Dropdown