import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.btnWrap}>
      {options.map((option, index) => (
        <button key={index} name={option} onClick={onLeaveFeedback}>
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
