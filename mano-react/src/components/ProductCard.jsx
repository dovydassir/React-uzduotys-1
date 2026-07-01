function ProductCard(props) {
  return (
    <div>
        <h2>10 užduotis  Kortelių sąrašas</h2>
      <h2>{props.name}</h2>

      <p>Kaina: {props.price} €</p>

      <p>Gamintojas: {props.brand}</p>
    </div>
  )
}

export default ProductCard