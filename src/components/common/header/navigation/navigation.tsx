import AnchorLink from "react-anchor-link-smooth-scroll";
import clasess from "./navigation.module.css";

const navigationData = [
  {
    name: "Projects",
    url: "projects",
  },
  {
    name: "Contact",
    url: "contact",
  },
];

const Navigation = () => {
  return (
    <nav className={clasess.navigation}>
      <ul>
        <li>
          {navigationData.map((navDataItem, i) => (
            <AnchorLink href={`#${navDataItem.url}`} key={i}>
              {navDataItem.name}
            </AnchorLink>
          ))}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
