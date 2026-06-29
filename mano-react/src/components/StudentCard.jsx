function StudentCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Amžius: {props.age}</p>
      <p>Miestas: {props.city}</p>
    </div>
  )
}

export default StudentCard