import PropTypes from 'prop-types';
import style from './Button.module.css';
import classNames from 'classnames';

export const Button = ({ name, handleBtn, type, className }) => {
  return (
    <button
      type={type}
      className={classNames(style.btn, className)}
      name={name}
      onClick={handleBtn}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  handleBtn: PropTypes.func,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};
