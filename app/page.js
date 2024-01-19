import styles from './page.module.css'
import {ContactSection, Orar, Programare, DividerWithLabel, Info} from "@/app/_components";
import { FaHandHoldingMedical } from "react-icons/fa6";
import Link from "next/link";
import SubHeaderMobile from "@/app/_components/subHeaderMobile";
export default function Home() {


  return (
    <main>
      <section className="main-content-width mx-auto position-relative" id="home">
        <img src="/images/dermatiq-gallery-24.jpeg" className={styles.homeImage}/>
        <div className={styles.homeImageTitle}>
            <h1>Dr. Claudia Iftode</h1>
            <h3>Medic Specialist Medicina de Familie</h3>
        </div>
        <Link
          href="/centrudepermanenta"
          className="position-absolute bottom-0 end-0 py-2 px-4 m-3 rounded d-none d-md-flex justify-content-center align-items-center gap-2 text-bg-success text-decoration-none">
          <span>Mergi la Centru de Permanență</span>
          <FaHandHoldingMedical size="1.5rem" color="white"/>
        </Link>
      </section>
      <DividerWithLabel label="Orar"/>
      <section  id="orar">
        <Orar type="cabinet"/>
      </section>
      <DividerWithLabel label="Programare"/>
      <section id="programare">
        <Programare  type="cabinet"/>
      </section>
      <DividerWithLabel label="Informații Utile"/>
      <section id="info">
        <Info />
      </section>
      <DividerWithLabel label="Contact"/>
      <section id="contact">
        <ContactSection
          className="m-auto"
          data={
          {
            address: ["Clinica DermatIQ", "Str. Ioan Plavosin, nr. 31", "Timisoara, 300361"],
            phone: ["+40 256 443 084"]
          }
        }>
          <iframe
            width="100%"
            height="400"
            id="gmap_canvas-1"
            src="https://maps.google.com/maps?q=Clinica%20DermatIQ&t=&z=17&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </ContactSection>
        {/*<div className="vertical-divider d-none d-lg-block"></div>*/}
        {/*<hr className="w-100 d-md-none d-lg-none"/>*/}
        {/*<ContactSection data={*/}
        {/*  {*/}
        {/*    address: ["Centru de permanență", "Bd. Cetății, nr. 85", "Timisoara"],*/}
        {/*    phone: ["+40 256 443 084", "+40 748 015 255"]*/}
        {/*  }*/}
        {/*}>*/}
        {/*  <iframe*/}
        {/*    width="100%"*/}
        {/*    height="400"*/}
        {/*    id="gmap_canvas-2"*/}
        {/*    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.1411797811556!2d21.21479327659589!3d45.76836081309286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474567918d786d9d%3A0x28cdd4d542eba565!2sBulevardul%20Cet%C4%83%C8%9Bii%2085%2C%20Timi%C8%99oara%20300254!5e0!3m2!1sen!2sro!4v1704369054152!5m2!1sen!2sro"*/}
        {/*    frameBorder="0"*/}
        {/*    scrolling="no"*/}
        {/*    marginHeight="0"*/}
        {/*    marginWidth="0"*/}
        {/*  ></iframe>*/}
        {/*</ContactSection>*/}
      </section>
    </main>
  )
}
