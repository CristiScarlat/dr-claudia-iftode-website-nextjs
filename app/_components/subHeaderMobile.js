import Link from "next/link";
const SubHeaderMobile = ({label, href, onClick, children}) => {

  return(
    <div className="w-100 d-md-none">
      <Link
        href={href}
        className="subheader-mobile py-2 px-4 m-2 rounded d-flex justify-content-center align-items-center gap-2 text-bg-success text-decoration-none"
        onClick={onClick}
      >
        <span>{label}</span>
        {children}
      </Link>
    </div>
  )
}

export default SubHeaderMobile;