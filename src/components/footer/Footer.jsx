import AboutUs from "./about-us/AboutUs";
import QuickLinks from "./quick-links/QuickLinks";
import Subscribe from "./subscribe/Subscribe";
import Copyright from "./copyright/Copyright";
import logo from '../../assets/image/logo-footer.png'
const Footer = () => {
  return (
    // h-screen
    <footer className="bg-black w-full pt-48">
      <div className="w-10/12 lg:w-4/5 space-y-6 mx-auto">
        <img className="mx-auto" src={logo} alt="footer logo" />
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <AboutUs />
          <QuickLinks />
          <Subscribe />
        </div>
        <hr className="w-full border-t-2 border-slate-500" />
        <Copyright />
      </div>
      
    </footer>
  );
};

export default Footer;
