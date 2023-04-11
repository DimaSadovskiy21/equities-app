import { Route, Routes } from "react-router-dom";

import { ChartPage, EquitiesPage, ErrorPage } from "pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EquitiesPage />} />
      <Route path="/chart/:symbols?" element={<ChartPage />} /> 
      <Route path={'/*'} element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
