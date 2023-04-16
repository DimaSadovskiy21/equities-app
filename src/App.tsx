import { Route, Routes } from 'react-router-dom';

import { Chart, Equities, Error } from 'pages';
import { ROUTES } from 'constant';

const App = () => (
  <Routes>
    <Route path={ROUTES.HOME_PAGE} element={<Equities />} />
    <Route path={ROUTES.CHART_PAGE} element={<Chart />} />
    <Route path={ROUTES.UNREGISTERED_PAGE} element={<Error />} />
  </Routes>
);

export default App;
