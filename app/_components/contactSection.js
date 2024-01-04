import {MdLocationOn, MdPhone} from "react-icons/md";

const ContactSection = ({data, style, children}) => {
  return(
    <div className="main-content-width" style={style}>
      <div
        className="d-flex justify-content-evenly mb-5 flex-wrap"
      >
        <div style={{minWidth: "200px"}} className="d-flex justify-content-center align-items-center gap-3">
          <div>
            <MdLocationOn  size="2rem" color="#198754"/>
          </div>
          <div style={{color: "#807f89"}}>
            {data?.address?.map(item => <div key={item}>{item}<br/></div>)}
          </div>
        </div>
        <div style={{minWidth: "200px"}} className="d-flex justify-content-center align-items-center gap-3">
          <div>
            <MdPhone size="2rem" color="#198754"/>
          </div>
          <div style={{color: "#807f89"}}>
            {data?.phone?.map(item => <div key={item}>{item}<br/></div>)}
          </div>
        </div>
      </div>
      <div className="ps-5 pe-5 w-100">
        {children}
      </div>
    </div>
  )
}

export default ContactSection;