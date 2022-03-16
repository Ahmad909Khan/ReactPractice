import { Routes, Route } from 'react-router-dom'

import Header from './screens/Header';
import GroceryApp from './screens/GroceryApp';
import AboutUsPage from './screens/AboutUsPage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<GroceryApp />} />
        <Route path="about-us/*" element={<AboutUsPage />} />
      </Routes>
    </div>
  );
};

export default App;
