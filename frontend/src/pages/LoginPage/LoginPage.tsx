import styles from './LoginPage.module.css';
import InputForm from '../../components/forms/InputForm/InputForm';
import ButtonForm from '../../components/forms/Button/ButtonForm';
import { useState } from 'react';
function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.loginForm}>
      {/* Form */}
      <form action="">

        <h1>Se connecter</h1>

        {/* Tout les inputs */}
        <section>

          <InputForm
            label=""
            placeholder={"Votre email ou nom"}
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

        </section>

        <ButtonForm
          text={"Connexion"}
        />

        <p style={{textAlign: "center"}}>- ou -</p>

        {/* Se diriger vers la page d'inscription */}
        <section className={styles.goToSignup}>
          <p>
            Pas encore de compte ? <span>Créer un compte</span>
          </p>
        </section>

      </form>
    </div>
  )
}

export default LoginPage