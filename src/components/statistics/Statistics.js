import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
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
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  options: PropTypes.object,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
