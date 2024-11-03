import { Link, useLocation } from 'react-router-dom';
import LinkButton from './LinkButton';

const Navbar = () => {
  const linkMaps = [
    { to: '/register', text: 'Register' },
    { to: '/login', text: 'Login' },
  ];
  const currentRoute = useLocation().pathname;
  return (
    <nav className="bg-white shadow-lg">
      <div className="mx-auto px-6 py-3 container">
        <div className="flex justify-between items-center h-fit">
          <Link
            to="/"
            className="hover:bg-blue-100 px-2 py-1 rounded-md font-bold text-blue-400 text-xl hover:text-blue-600 stroke-blue-900"
          >
            Register App
          </Link>
          <div className="flex space-x-4">
            {linkMaps.map((linkMap) => (
              <LinkButton
                key={linkMap.to}
                to={linkMap.to}
                text={linkMap.text}
                highlight={currentRoute === linkMap.to}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
