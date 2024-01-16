import styles from "./styles/styles.module.css";
const Programare = () => {
  return(
    <div className={styles.orarWrapper} style={{gridTemplateColumns: "auto"}}>
      <div className={styles.orarWrapperGridItem}>
        <h4>Cabinet Medical Timișoara</h4>
        <h5>Str. Ioan Plavoșin nr. 31</h5>
        <p><span className="me-1">Telefon:</span>0256-443 084</p>
      </div>
    </div>
  )
}

export default Programare;