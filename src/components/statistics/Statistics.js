import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function Statistics({
  total = 0,
  positiveFeedbackPercentage = 0,
  good,
  bad,
  neutral,
}) {
  return (
    <div>
      <ul className={css.statList}>
        <li className={css.statListItem}>
          Good: <span className="statCounter">{good}</span>
        </li>
        <li className={css.statListItem}>
          Neutral: <span className="statCounter">{neutral}</span>
        </li>
        <li className={css.statListItem}>
          Bad: <span className="statCounter">{bad}</span>
        </li>
      </ul>

      <p>Total: {total}</p>
      <p>Positive feedback: {positiveFeedbackPercentage}%</p>
    </div>
  );
}

Statistics.propTypes = {
  options: PropTypes.object,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
