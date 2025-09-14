import styles from './LoginPage.module.css';
import InputForm from '../../components/forms/InputForm/InputForm';
import ButtonForm from '../../components/forms/Button/ButtonForm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function LoginPage() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goToSignup = () => {
    navigate("/signup");
  }

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
          color={"primary"}
          text={"Connexion"}
          onClick={() => { }}
        />

        <p style={{ textAlign: "center" }}>- ou -</p>

        {/* Se diriger vers la page d'inscription */}
        <section className={styles.goToSignup}>
          <p>
            Pas de compte ? <span onClick={goToSignup}>Inscrivez-vous</span>
          </p>
        </section>

      </form>
    </div>
  )
}

export default LoginPage