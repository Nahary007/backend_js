import type { Parking } from '../../../pages/DashboarPage/DashboardPage';
import ButtonForm from '../Button/ButtonForm';
import InputForm from '../InputForm/InputForm'
import styles from './AddParkingForm.module.css'

interface AddParkingFormProps {
  parkingDataForm: Parking;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resetParkingDataForm : () => void;
  onSubmit : (e: React.ChangeEvent<HTMLInputElement>) => void;
  closeForm : () => void
}

function AddParkingForm({ parkingDataForm,onSubmit, handleChange, resetParkingDataForm, closeForm }: AddParkingFormProps) {
  return (
    <div className={styles.formContainer} onSubmit={onSubmit}>
      <form>
        <h1>Ajouter un véhicule</h1>
        <section>
          <InputForm
            label=""
            placeholder="Nom du parking"
            type="text"
            name="name"
            value={parkingDataForm.name}
            onChange={handleChange}
          />
        </section>

        <section>
          <InputForm
            label=""
            placeholder="Sa location"
            type="text"
            name="location"
            value={parkingDataForm.location}
            onChange={handleChange}
          />
        </section>

        <section>
          <InputForm
            label=""
            placeholder="Capacite"
            type="number"
            name="capacity"
            value={parkingDataForm.capacity}
            onChange={handleChange}
          />
        </section>

        <section className={styles.listBtn}>
          <ButtonForm 
            text={"Ajouter"} 
            color={"primary"} 
          ></ButtonForm>
          <ButtonForm 
            text={"Annuler"} 
            color={"gray"} 
            type='button'
            onClick={
              () => {
                resetParkingDataForm();
                closeForm();
              }
            }
          ></ButtonForm>
        </section>
      </form>
    </div>
  )
}

export default AddParkingForm;