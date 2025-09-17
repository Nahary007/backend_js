import React, { useEffect, useState } from 'react'
import ButtonForm from '../Button/ButtonForm';
import InputForm from '../InputForm/InputForm';
import styles from "./BookingParkingForm.module.css";
import type { Car } from '../../../pages/DashboarPage/DashboardPage';

interface BookingParkingFormProps {
  carDataForm: Car;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit : (e: React.ChangeEvent<HTMLInputElement>) => void;
  resetCarDataForm : () => void;
  closeForm : () => void
}


function BookingParkingForm({ carDataForm, onSubmit, handleChange, resetCarDataForm, closeForm } : BookingParkingFormProps) {

  return (
    <div className={styles.formContainer} onSubmit={onSubmit}>
      <form onSubmit={(e) => {e.preventDefault(); console.log(carDataForm)}}>
        <h1>Ajouter un véhicule</h1>
        <section>
          <InputForm
            errorMessage=''
            label=""
            placeholder="Nom du proprietaire"
            type="text"
            name="ownerName"
            value={carDataForm.ownerName}
            onChange={handleChange}
          />
        </section>

        <section>
          <InputForm
            errorMessage=''
            label=""
            placeholder="Numero du véhicule"
            type="text"
            name="plateNumber"
            value={carDataForm.plateNumber}
            onChange={handleChange}
          />
        </section>        
        
        <section>
          <InputForm
            errorMessage=''
            label=""
            placeholder="Duree de stationnement"
            type="number"
            name="duration"
            value={carDataForm.duration}
            onChange={handleChange}
          />
        </section>

        <section className={styles.listBtn}>
          <ButtonForm 
            color={"primary"}
            text={"Ajouter"}
            ></ButtonForm>
          <ButtonForm 
            text={"Annuler"} 
            color={"gray"}        
            type='button'    
            onClick={ ()=> {
              resetCarDataForm();
              closeForm();
            }}
          ></ButtonForm>
        </section>
      </form>
    </div>
  )
}

export default BookingParkingForm;