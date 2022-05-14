import PropTypes from 'prop-types';

export const InputFilter = props => {
  const { name, value, onChange } = props;
  return (
    <>
      <label htmlFor={name}>Find contacts by name</label>
      <br></br>
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={onChange}
      />
    </>
  );
};

InputFilter.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
