import { Route, Routes } from "react-router-dom";

import { Chart, Equities, ErrorPage } from "pages";
import { ROUTES } from "constant";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME_PAGE} element={<Equities />} />
      <Route path={ROUTES.CHART_PAGE} element={<Chart />} />
      <Route path={ROUTES.UNREGISTERED_PAGE} element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
