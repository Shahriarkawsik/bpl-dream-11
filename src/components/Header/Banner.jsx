import crick from '../../assets/image/banner-main.png';
import banner from '../../assets/image/bg-shadow.png';
import PropTypes from 'prop-types';

const Banner = ({handleAddCredit}) => {
  

  return (
    <section className="w-full text-center space-y-3 sm:space-y-4 lg:space-y-6 max-sm:p-6 sm:px-6 sm:py-10 lg:py-20 rounded-3xl"
    style={{
      backgroundImage: `url(${banner})`,
      backgroundSize: "100% 100%",
      backgroundColor: "#000",
    }}
    >
      <img className='mx-auto w-28 sm:w-40 lg:w-fit' src={crick} alt="cricket image" />
      <h1 className='text-white font-bold  sm:text-3xl lg:text-40'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className='text-color3.7 font-medium sm:text-2xl leading-7 interFont'>Beyond Boundaries Beyond Limits</p>
      <div className='border border-color2 inline-block p-2 rounded-2xl'>
        <button onClick={handleAddCredit} 
        className='bg-color2 px-5 py-4 rounded-xl text-color1 font-bold sm:text-xl'>Claim Free Credit</button>
      </div>

      
    </section>
  );
};
Banner.propTypes={
  handleAddCredit: PropTypes.func.isRequired
}
export default Banner;