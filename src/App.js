import { Route, NavLink, Switch } from 'react-router-dom'
import QuoteList from './components/quotes/QuoteList'
import NoQuotesFound from './components/quotes/NoQuotesFound'
function App() {
  const quotes = []
  return (
    <Switch>
      <Route path="/quotes">
        {/* <QuoteList quotes={quotes} /> */}
      </Route>
      <Route path="/quotes/:quoteId">
        {/* <QuoteList quotes={quotes} /> */}
      </Route>
      <Route path="/new-quote">
        {/* <QuoteList quotes={quotes} /> */}
      </Route>
    </Switch>
  )
}

export default App
