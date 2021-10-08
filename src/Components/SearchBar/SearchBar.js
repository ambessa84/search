function SearchBar() {
  return (
    <div>
      <input type="text" placeholder="Search..." />
      <div>
        <input type="checkbox" id="stock" />
        <label htmlFor="stock">Only show products in stock</label>
      </div>
    </div>
  );
}
export default SearchBar;
