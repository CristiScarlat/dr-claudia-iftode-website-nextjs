import styles from "./styles/styles.module.css";


const Orar = ({type}) => {
  if(type === "cabinet"){
    return(
      <div className={styles.orarWrapper}>
        <div className={styles.orarWrapperGridItem}>
          <h4>Luni</h4>
          <p><span>14:00 - 19:00</span>(Cabinet)</p>
          <p><span>12:00 - 14:00</span>(Teren)</p>
        </div>
        <div className={styles.orarWrapperGridItem}>
          <h4>Marți</h4>
          <p><span>08:00 - 13:00</span>(Cabinet)</p>
          <p><span>07:00 - 08:00</span>(Teren)</p>
          <p><span>13:00 - 14:00</span>(Teren)</p>
        </div>
        <div className={styles.orarWrapperGridItem}>
          <h4>Miercuri</h4>
          <p><span>14:00 - 19:00</span>(Cabinet)</p>
          <p><span>12:00 - 14:00</span>(Teren)</p>
        </div>
        <div className={styles.orarWrapperGridItem}>
          <h4>Joi</h4>
          <p><span>08:00 - 13:00</span>(Cabinet)</p>
          <p><span>07:00 - 08:00</span>(Teren)</p>
          <p><span>13:00 - 14:00</span>(Teren)</p>
        </div>
        <div className={styles.orarWrapperGridItem}>
          <h4>Vineri</h4>
          <p><span>08:00 - 13:00</span>(Cabinet)</p>
          <p><span>13:00 - 15:00</span>(Teren)</p>
        </div>
      </div>
    )
  }
  else if(type="centrudepermanenta"){
    return (
      <div className={styles.orarWrapper}>
      <div className={styles.orarWrapperGridItem}>
        <h4>Zilnic</h4>
        <p><span>15:00 - 08:00</span></p>
      </div>
      <div className={styles.orarWrapperGridItem}>
        <h4>Weekend și Sărbători Legale</h4>
        <p><span>08:00 - 08:00</span></p>
      </div>
    </div>
    )
  }
  return null;
}

export default Orar;