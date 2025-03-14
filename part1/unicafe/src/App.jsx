import { useState } from 'react';

const FeedbackButton = ({ onClick, label }) => (
  <button onClick={onClick}>
    {label}
  </button>
);

const StatsRow = ({ label, value, unit }) => (
  <tr>
    <td>{label}:</td>
    <td>{value}{unit}</td>
  </tr>
);

const FeedbackStats = ({ positiveCount, neutralCount, negativeCount }) => {
  const totalFeedback = positiveCount + neutralCount + negativeCount;
  const avgScore = totalFeedback === 0 ? 0 : ((positiveCount - negativeCount) / totalFeedback).toFixed(1);
  const positivePercentage = totalFeedback === 0 ? 0 : ((positiveCount / totalFeedback) * 100).toFixed(1);

  if (totalFeedback === 0) {
    return <h3>No feedback received yet</h3>;
  }

  return (
    <div>
      <h1>Feedback Summary</h1>
      <table>
        <tbody>
          <StatsRow label="Positive" value={positiveCount} />
          <StatsRow label="Neutral" value={neutralCount} />
          <StatsRow label="Negative" value={negativeCount} />
          <StatsRow label="Total" value={totalFeedback} />
          <StatsRow label="Average Score" value={avgScore} />
          <StatsRow label="Positive Feedback" value={positivePercentage} unit="%" />
        </tbody>
      </table>
    </div>
  );
};

const FeedbackApp = () => {
  const [positiveCount, setPositiveCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [negativeCount, setNegativeCount] = useState(0);

  return (
    <div>
      <h1>Provide Your Feedback</h1>
      <FeedbackButton onClick={() => setPositiveCount(positiveCount + 1)} label="Good" />
      <FeedbackButton onClick={() => setNeutralCount(neutralCount + 1)} label="Neutral" />
      <FeedbackButton onClick={() => setNegativeCount(negativeCount + 1)} label="Bad" />
      <FeedbackStats positiveCount={positiveCount} neutralCount={neutralCount} negativeCount={negativeCount} />
    </div>
  );
};

export default FeedbackApp;
