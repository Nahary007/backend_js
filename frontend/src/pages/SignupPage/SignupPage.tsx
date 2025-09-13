import { useState } from 'react'
import ButtonForm from '../../components/forms/Button/ButtonForm';
import styles from './SignupPage.module.css'
import InputForm from '../../components/forms/InputForm/InputForm';

function SignupPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmePassword, setConfirmePassword] = useState("");

  return (
    <div className={styles.signupForm}>
      {/* Form */}
      <form action="">

        <h1>S'inscrire</h1>

        {/* Tout les inputs */}
        <section>

          <InputForm
            label=""
            placeholder={"Votre nom"}
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <InputForm
            label=""
            placeholder={"Exemple@gmail.com"}
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputForm
            label=""
            placeholder={"Votre mot de passe"}
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <InputForm
            label=""
            placeholder={"Confirmez votre mot de passe"}
            type="password"
            name="password"
            value={confirmePassword}
            onChange={(e) => setConfirmePassword(e.target.value)}
          />

        </section>

        <ButtonForm
          text={"S'inscrire"}
        />

        <p style={{textAlign: "center"}}>- ou -</p>

        {/* Se diriger vers la page de Connexion */}
        <section className={styles.goToLogin}>
          <p>
            Deja un compte ? <span>Se connecter</span>
          </p>
        </section>

      </form>
    </div>
  )
}

export default SignupPage