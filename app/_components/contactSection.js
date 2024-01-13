import {MdLocationOn, MdPhone} from "react-icons/md";

const ContactSection = ({data, style, className, children}) => {
  return(
    <div className={`main - content - width ${className}`}>
      <div
        className="mb-5 w-75 mx-auto"
      >
        <div style={{minWidth: "200px"}} className="d-flex justify-content-between align-items-center gap-3 text-end mb-2">
          <div>
            <MdLocationOn  size="2rem" color="#198754"/>
          </div>
          <div style={{color: "#807f89"}}>
            {data?.address?.map(item => <div key={item}>{item}<br/></div>)}
          </div>
        </div>
        <div style={{minWidth: "200px"}} className="d-flex justify-content-between align-items-center gap-3 text-end mb-2">
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