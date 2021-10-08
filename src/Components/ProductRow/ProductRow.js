function ProductRow(props) {
  const row = props.products.map((product, index) => (
    <tr key={index}>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  ));
  return row;
}

export default ProductRow;
