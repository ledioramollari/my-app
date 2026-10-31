const Searchbox = ({ onSearchChange }: { onSearchChange: any }) => {
  return (
    <div className="pa2 ">
      <input
        className="pa3 ba b--lightest-blue bg-lightest-blue br4"
        type="search"
        placeholder="search robots"
        onChange={onSearchChange}
      />
    </div>
  );
};

export default Searchbox;
