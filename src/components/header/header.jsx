import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../public/images/logo.svg';

const Header = () => (
    <div className=" w-full h-16 bg-primary flex justify-between items-center p-6 pb-2 sfixed top-0 z-50">
      <Link to='/'>
        <Logo className=" w-48"/>
      </Link>
    </div>
  )

export default Header
