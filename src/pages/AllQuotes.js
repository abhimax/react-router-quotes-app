import QuoteList from '../components/quotes/QuoteList';
const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Abhiman Ranaweera",
    text: "Learning React is Fun!",
  },
  {
    id: "q2",
    author: "Lionel Messi",
    text: "Learning TypeScript is Fun!",
  },
  {
    id: "q3",
    author: "Cristiano Ronaldo",
    text: "Learning NextJS  is Fun!",
  },
];
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}/>;
};
export default AllQuotes;
