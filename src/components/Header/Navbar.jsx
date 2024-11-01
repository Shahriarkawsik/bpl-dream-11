import icon from '../../assets/image/logo.png'
import coin from '../../assets/image/coin.png'
import PropTypes from 'prop-types';
const Navbar = ({addCredit}) => {
  return (
    <nav className='flex justify-between items-center backdrop-blur-md mx-auto z-10'>
      {/* fixed w-10/12 sm:w-10/12 lg:w-4/5 */}
      <img src={icon} alt="" />
      <ul className='flex items-center sm:space-x-8 lg:space-x-12 max-sm:hidden'>
        <li className='leading-5 text-color1.7'>Home</li>
        <li className='leading-5 text-color1.7'>Fixture</li>
        <li className='leading-5 text-color1.7'>Teams</li>
        <li className='leading-5 text-color1.7'>Schedules</li>
      </ul>
      <button className='flex justify-between items-center px-5 py-4 border border-color1.1 text-color1 rounded-xl '>{addCredit} Coin <img className='w-5 h-5 ml-2' src={coin} alt="a coin img" />
      </button>
      {/* <span className='mr-2'>0</span> */}
    </nav> 
  );
};
Navbar.propTypes={
  addCredit: PropTypes.number.isRequired
}
export default Navbar;