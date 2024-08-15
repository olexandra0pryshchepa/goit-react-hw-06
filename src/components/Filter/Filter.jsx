import PropTypes from "prop-types";
export const Filter = ({ filter, handleContactSearch }) => {
  return (
    <label>
      <input type="text" value={filter} onChange={handleContactSearch}></input>
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleContactSearch: PropTypes.func.isRequired,
};
