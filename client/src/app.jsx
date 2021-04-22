import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Chat, Join } from './components';

export const App = () => {
  return (
    <Router>
      <Route path='/' exact component={Join} />
      <Route path='/chat' component={Chat} />
    </Router>
  );
};
