import type { Parking } from '../../../pages/DashboarPage/DashboardPage';
import ButtonForm from '../Button/ButtonForm';
import InputForm from '../InputForm/InputForm'
import styles from './AddParkingForm.module.css'

interface AddParkingFormProps {
  parking: Parking;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function AddParkingForm({ parking, handleChange }: AddParkingFormProps) {
  return (
    <div className={styles.formContainer}>
      <form>
        <h1>Ajouter un véhicule</h1>
        <section>
          <InputForm
            label=""
            placeholder="Nom du parking"
            type="text"
            name="name"
            value={parking.name}
            onChange={handleChange}
          />
        </section>

        <section>
          <InputForm
            label=""
            placeholder="Sa location"
            type="text"
            name="location"
            value={parking.location}
            onChange={handleChange}
          />
        </section>

        <section>
          <InputForm
            label=""
            placeholder="Capacite"
            type="number"
            name="capacity"
            value={parking.capacity}
            onChange={handleChange}
          />
        </section>

        <section className={styles.listBtn}>
          <ButtonForm text={"Ajouter"}></ButtonForm>
          <ButtonForm text={"Annuler"}></ButtonForm>
        </section>
      </form>
    </div>
  )
}

export default AddParkingForm;