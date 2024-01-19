import styles from "./styles/styles.module.css";
const Programare = ({type}) => {
  if(type === "cabinet"){
    return(
      <div className={styles.orarWrapper} style={{gridTemplateColumns: "auto"}}>
        <div className={styles.orarWrapperGridItem}>
          <h4>Cabinet Medical Timișoara</h4>
          <h5>Str. Ioan Plavoșin nr. 31</h5>
          <p><span className="me-1">Telefon:</span>+40 256 443 084</p>
        </div>
      </div>
    )
  }
  else if(type === "centrudepermanenta"){
    return(
      <div className={styles.orarWrapper} style={{gridTemplateColumns: "auto"}}>
        <div className={styles.orarWrapperGridItem}>
          <h4>Centru de permanență</h4>
          <h5>Bd. Cetății, nr. 85 Timisoara</h5>
          <p><span className="me-1">Telefon:</span>+40 256 243 202</p>
        </div>
      </div>
    )
  }
  return null;
}

export default Programare;