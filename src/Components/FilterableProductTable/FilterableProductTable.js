import SearchBar from "../SearchBar/SearchBar";
import ProductTable from "../ProductTable/ProductTable";

const style = {
  padding: "30px",
  textAlign: "left",
};

function FilterableProductTable(props) {
  return (
    <div style={style}>
      <SearchBar />
      <ProductTable products={props.products} />
    </div>
  );
}
export default FilterableProductTable;
