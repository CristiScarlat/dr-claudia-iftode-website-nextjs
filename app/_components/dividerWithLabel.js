


const DividerWithLabel = ({label}) => {
  return(
    <div className="d-flex justify-content-center align-items-center my-3">
    <span className="flex-grow-1"><hr/></span>
      <span className="mx-3 text-green"><h5 className="m-0">{label}</h5></span>
      <span className="flex-grow-1"><hr/></span>
  </div>
  )
}

export default DividerWithLabel