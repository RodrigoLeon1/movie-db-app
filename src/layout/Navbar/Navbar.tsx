import { Link, NavLink } from 'react-router-dom';
import { HeaderRoutes, ROUTES } from '../../utils/router.utils';
import Logo from '../../assets/svg/Logo';
import Button from '../../components/Button/Button';

const Navbar = () => {
  return (
    <nav>
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center justify-between">
          <Link to={ROUTES.HOME}>
            <Logo />
          </Link>

          <div className="flex gap-16">
            {HeaderRoutes.map((r) => (
              <NavLink key={r.label} to={r.route} className="text-gray-400">
                {r.label}
              </NavLink>
            ))}
          </div>

          <div>
            <Button label="Favorites" url={''} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
