import Footer from "../footer/footer";
import Header from "../header/header";

import clasess from "./layout.module.css";

const Layout = (props: any) => {
  return (
    <div className={clasess.layout}>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
