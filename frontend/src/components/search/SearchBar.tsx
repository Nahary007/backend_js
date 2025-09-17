import styles from "./SearchBar.module.css"
import { Search } from "lucide-react";

export interface SearchBarProps {
    value: string | number | readonly string[] | undefined;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({value, onChange}: SearchBarProps) {
  return (
    <div className={styles.searchBar}>
        <label htmlFor="search"><Search className={styles.i} /></label>
        <input 
            placeholder="Recherche..."
            type="search" 
            name="" 
            id="search" 
            value={value} 
            onChange={onChange}/>
    </div>
  )
}

export default SearchBar