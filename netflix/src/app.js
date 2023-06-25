import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Browse, SignIn, SignUp } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

export default function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Routes>
        <Route path={ROUTES.SIGN_IN} element={<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}><SignIn /></IsUserRedirect>} />
        <Route path={ROUTES.SIGN_UP} element={<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}><SignUp /></IsUserRedirect>} />
        <Route path={ROUTES.BROWSE} element={<ProtectedRoute user={user}><Browse /></ProtectedRoute>} />
        <Route path={ROUTES.HOME} element={<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}><Home /></IsUserRedirect>} />
      </Routes>
    </Router>
  );
}
