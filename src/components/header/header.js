import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className=" w-full h-16 bg-secondary flex justify-between items-center p-4 fixed top-0">
      <Link to='/'>
      <h1 className="text-main text-3xl" >PizzCOIN</h1>
      </Link>
      <h2 className="text-main" >contact</h2>
    </div>
  )
}

export default Header
