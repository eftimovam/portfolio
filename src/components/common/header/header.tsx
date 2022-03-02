import Logo from "./logo/logo";
import Navigation from "./navigation/navigation";

import clasess from "./header.module.css";

const Header = () => {
  return (
    <header className={clasess.header}>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
