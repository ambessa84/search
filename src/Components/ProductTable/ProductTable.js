import ProductCategoryRow from "../ProductCategoryRow/ProductCategoryRow";
import ProductRow from "../ProductRow/ProductRow";

const styleForTable = {
  marginTop: "10px",
};

function getRows(products) {
  let rows = [];
  products.forEach(({ category, name, price, stocked }) => {
    let categoryIndex = rows.findIndex((row) => row.category === category);
    if (categoryIndex >= 0) {
      rows[categoryIndex].products.push({ name, price, stocked });
    } else {
      rows.push({
        category,
        products: [{ name, price, stocked }],
      });
    }
  });
  return rows;
}

function ProductTable(props) {
  const rows = getRows(props.products);
  const body = rows.map((row, index) => {
    return (
      <tbody key={index}>
        <ProductCategoryRow category={row.category} />
        <ProductRow products={row.products} />
      </tbody>
    );
  });
  return (
    <table style={styleForTable}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      {body}
    </table>
  );
}
export default ProductTable;
