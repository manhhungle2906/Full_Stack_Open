import { useState } from 'react';

const quotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
];

const ActionButton = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};

const DisplayQuote = ({ heading, content, totalVotes }) => {
  return (
    <div>
      <h1>{heading}</h1>
      <p>{content}</p>
      <p>has {totalVotes} votes</p>
    </div>
  );
};

const QuoteApp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [voteCounts, setVoteCounts] = useState(Array(quotes.length).fill(0));
  const [topVoted, setTopVoted] = useState(0);

  const generateRandomQuote = () => {
    const newIndex = Math.floor(Math.random() * quotes.length);
    setCurrentIndex(newIndex);
  };

  const addVote = () => {
    const updatedVotes = [...voteCounts];
    updatedVotes[currentIndex] += 1;
    setVoteCounts(updatedVotes);
    setTopVoted(updatedVotes.indexOf(Math.max(...updatedVotes)));
  };

  return (
    <div>
      <DisplayQuote heading="Quote of the day" content={quotes[currentIndex]} totalVotes={voteCounts[currentIndex]} />
      <ActionButton onClick={addVote} label="Vote" />
      <ActionButton onClick={generateRandomQuote} label="Next Quote" />
      <DisplayQuote heading="Most Voted Quote" content={quotes[topVoted]} totalVotes={voteCounts[topVoted]} />
    </div>
  );
};

export default QuoteApp;
