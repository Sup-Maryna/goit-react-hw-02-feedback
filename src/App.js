import './App.css';
import { useState } from 'react';
import FeedbackOptions from './components/feedbackOptions/FeedbackOptions';
import Statistics from './components/statistics/Statistics';
import Section from './components/section/Section';
import Notification from './components/notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setFeedback = e => {
    const buttonName = e.currentTarget.name;

    if (buttonName === 'good') {
      setGood(prevState => prevState + 1);
      return;
    }

    if (buttonName === 'neutral') {
      setNeutral(prevState => prevState + 1);
      return;
    }

    if (buttonName === 'bad') {
      setBad(prevState => prevState + 1);
      return;
    }
    return;
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  const total = countTotalFeedback();
  const options = ['good', 'bad', 'neutral'];

  return (
    <div className="FeedbackContainer">
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={setFeedback} />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given." />
        )}
      </Section>
    </div>
  );
}
export default App;
