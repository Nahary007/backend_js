import { useState } from 'react'
import ButtonForm from '../../components/forms/Button/ButtonForm';
import styles from './SignupPage.module.css'
import InputForm from '../../components/forms/InputForm/InputForm';
import { useNavigate } from 'react-router-dom';

function SignupPage() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmePassword, setConfirmePassword] = useState("");

  const goToLogin = () => {
    navigate("/login");
  }

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
            name="confirmPw"
            value={confirmePassword}
            onChange={(e) => setConfirmePassword(e.target.value)}
          />

        </section>

        <ButtonForm
          color={"primary"}
          text={"S'inscrire"}
          onClick={()=>{}}
        />

        <p style={{textAlign: "center"}}>- ou -</p>

        {/* Se diriger vers la page de Connexion */}
        <section className={styles.goToLogin}>
          <p>
            Deja un compte ? <span onClick={goToLogin}>Se connecter</span>
          </p>
        </section>

      </form>
    </div>
  )
}

export default SignupPage