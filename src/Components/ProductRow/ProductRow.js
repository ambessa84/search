const styleForProductNotInStock = {
  color: "red",
};
function getName({ stocked, name }) {
  return stocked ? name : <span style={styleForProductNotInStock}>{name}</span>;
}
function ProductRow(props) {
  const row = props.products.map((product, index) => {
    const name = getName(product);
    return (
      <tr key={index}>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  });
  return row;
}

export default ProductRow;
