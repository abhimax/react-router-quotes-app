import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

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
const QuoteDetail = () => {
    const params = useParams();
    const match = useRouteMatch();
    const quote = DUMMY_QUOTES.find( qty => qty.id === params.quoteId);
    if(!quote){
        return <p>No Quote is found!</p>;

    }
    return <>
    <HighlightedQuote text={quote.text} author={quote.author}/>
    
    <Route path={match.path} exact>
      <div className='centered'>
        <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
      </div>
    </Route>

    <Route path={`${match.path}/comments`}>
        <Comments/>
    </Route>
    </>
}
export default QuoteDetail;