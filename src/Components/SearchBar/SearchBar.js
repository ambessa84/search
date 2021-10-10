const styleForContainer = {
  display: "flex",
  flexDirection: "column",
};
const styleForCheckboxContainer = {
  padding: "0",
};
const styleForcheckbox = {
  marginLeft: "0",
};
function SearchBar() {
  return (
    <div style={styleForContainer}>
      <input type="text" placeholder="Search..." />
      <div style={styleForCheckboxContainer}>
        <input type="checkbox" id="stock" style={styleForcheckbox} />
        <label htmlFor="stock">Only show products in stock</label>
      </div>
    </div>
  );
}
export default SearchBar;
