import styles from "@/app/page.module.css";
import Link from "next/link";
import { FaUserDoctor } from "react-icons/fa6";


export default function Centrudepermanenta() {
  return(
    <main>
      <section className="main-content-width m-auto position-relative">
        <img src="/images/centrudepermanenta.jpg" className={styles.homeImage}/>
        <div className={styles.homeImageTitle}>
          <h1>Dr. Claudia Iftode</h1>
          <h3>Medic Specialist Medicina de Familie</h3>
        </div>
        <Link
          href="/"
          className="position-absolute bottom-0 end-0 py-2 px-4 m-3 rounded d-flex justify-content-center align-items-center gap-2 text-bg-success text-decoration-none">
          <span>Mergi la Cabinetul Medical</span>
          <FaUserDoctor size="1.5rem" color="white"/>
        </Link>
      </section>
    </main>
  )
}