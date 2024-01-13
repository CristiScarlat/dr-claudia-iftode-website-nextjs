import styles from "./styles/styles.module.css";
const Programare = () => {
  return(
    <div className={styles.orarWrapper}>
      <div className={styles.orarWrapperGridItem}>
        <h4>Centrul de Permanență Timișoara</h4>
        <h5>Bulevardul Cetății nr.85</h5>
        <p><span>15:00 - 08:00</span>(Zilnic)</p>
        <p><span className="me-1">Telefon:</span>0256-243 202</p>
      </div>
      <div className={styles.orarWrapperGridItem}>
        <h4>Cabinet Medical Timișoara</h4>
        <h5>Str. Ioan Plavoșin nr. 31</h5>
        <p><span>08:00 - 18:30</span>(Zilnic)</p>
        <p><span>08:30 - 13:00</span>(Vineri)</p>
        <p><span className="me-1">Telefon:</span>0256-443 084</p>
      </div>
    </div>
  )
}

export default Programare;