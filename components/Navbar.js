import navStyles from "./styles/navbar.module.css";

const Navbar = ({ bgColor, textColor }) => {
  return (
    <>
      <div className={`${bgColor} ${textColor}`}>
        <div className={navStyles.navCon}>
          <h1 id="logo" className="md:text-xl text-lg">Logo</h1>

          <nav>
            <ul className="flex space-x-6 md:text-base text-sm">
              <li>Portal</li>
              <li>Login</li>
              <li>News FuList</li>
              <li>Main Website</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
