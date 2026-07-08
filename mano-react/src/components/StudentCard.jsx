function StudentCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Pažimys: {props.grades}</p>
      <p>{props.passed ? "Išlaikė" : "Neišlaikė"}</p>
    </div>
  )
}

export default StudentCard