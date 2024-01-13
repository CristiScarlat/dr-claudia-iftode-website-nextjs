import {ListGroup} from "react-bootstrap";

const Info = () => {
  const infoData = [
    {label: "Lista Programelor Naționale de Sănătate active la nivel local", href: "http://www.casan.ro/cjastm/category/lista-programelor-nationale-de-sanatate-active-la-nivel-local.html"},
    {label: "Deconturi lunare cabinete MF", href: "http://cas.cnas.ro/cjastm/page/deconturi-lunare-cabinete-mf.html"},
    {label: "Program Naţional Imunizări", href: "https://www.dsptimis.ro/programe-nationale-de-sanatate/program-national-imunizari"}
  ]
  return(
    <div style={{margin: "auto", maxWidth: "60rem"}}>
      <ListGroup>
        {infoData.map(item => (
          <ListGroup.Item key={item.href} className="text-center" variant="secondary">
            <a href={item.href} target="_blank" className="text-green text-decoration-none">{item.label}</a>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}

export default Info;