import "./Card.css"

export const Card = ({ title, text, icon }) => {
  return (
    <article className="card">
      <img src={icon} alt="" className="card-image" />
      <h2>{title}</h2>
      <p>{text}</p>
      <div> <OrangeButtons /> <Lightbuttons />
      </div>
    </article>
  )
}


 
