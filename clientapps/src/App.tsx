import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@components/Navbar';
import { HomePage, LoginPage, RegisterPage } from '@pages/index';

function App() {
  return (
    <Router>
      <div className="flex flex-col bg-gray-100 min-h-screen">
        <Navbar />
        <div className="flex-1 mx-auto px-6 py-3 container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
