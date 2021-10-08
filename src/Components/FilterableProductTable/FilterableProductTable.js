import SearchBar from "../SearchBar/SearchBar";
import ProductTable from "../ProductTable/ProductTable";

function FilterableProductTable(props) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={props.products} />
    </div>
  );
}
export default FilterableProductTable;
