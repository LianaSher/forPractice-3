import { Routes, Route } from 'react-router-dom';

import { Header } from 'components';
import { CountrySearch, Home, Country } from 'pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/country" element={<CountrySearch />} />
        <Route path="/country/:countryId" element={<Country />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
