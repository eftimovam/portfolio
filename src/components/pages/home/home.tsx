import ScrollToTop from "react-scroll-to-top";
import contact from "../../../assets/images/contact.png";
import learning from "../../../assets/images/learning.png";
import makedonka from "../../../assets/images/makedonka.png";
import plant from "../../../assets/images/plant.png";
import som from "../../../assets/images/som.png";
import sugar from "../../../assets/images/sugar.png";
import zanov from "../../../assets/images/zanov.png";
import HomeItem from "../../common/home-item/home-item";
import clasess from "./home.module.css";



const cvPdf = require("../../../assets/pdfs/cv.pdf");
const somPdf = require("../../../assets/pdfs/som.pdf");
const learningPdf = require("../../../assets/pdfs/learning.pdf");
const sugarPdf = require("../../../assets/pdfs/sugar.pdf");
const zanovPdf = require("../../../assets/pdfs/zanov-pdf.pdf")

const projectsData = [
  {
    textSide: "left",
    imagePath: zanov,
    description: "Zanov Fashion",
    link: {
      name: "Project ➔",
      url: zanovPdf,
      isOpeningPdf: true,
    },
  },
  {
    textSide: "right",
    imagePath: som,
    description: "Special Olympics North Macedonia",
    link: {
      name: "Project ➔",
      url: somPdf,
      isOpeningPdf: true,
    },
  },
  {
    textSide: "left",
    imagePath: learning,
    description: "Learning UI/UX on the go",
    link: {
      name: "Project ➔",
      url: learningPdf,
      isOpeningPdf: true,
    },
  },
  {
    textSide: "right",
    imagePath: sugar,
    description: "SugarWish Redesign",
    link: {
      name: "Project ➔",
      url: sugarPdf,
      isOpeningPdf: true,
    },
  },
  {
    textSide: "left",
    imagePath: plant,
    description: "Smart Plant",
    link: {
      name: "In Progress",
      url: "/projects/smart-plant",
      isOpeningPdf: false,
    },
  },
];

const Home = () => {
  return (
    <div>
      <HomeItem
        textSide={"left"}
        imagePath={makedonka}
        description={
          "Hello, my name is Makedonka and I am UI/UX Designer. My main goal is to create and develop a quality product. Meanwhile it will help me to improve my skills."
        }
        link={{
          name: "Download CV",
          url: cvPdf,
          isOpeningPdf: true,
        }}
      />
      <h2 className={clasess.subTopic} id="projects">
        Projects
      </h2>

      {projectsData.map((homepageDataItem, i) => {
        const { textSide, imagePath, description, link } = homepageDataItem;

        return (
          <HomeItem
            key={i}
            textSide={textSide}
            imagePath={imagePath}
            description={description}
            link={link}
          />
        );
      })}
      <h2 className={clasess.subTopic} id="contact">
        Contact with me
      </h2>
      <HomeItem
        textSide={"contact"}
        imagePath={contact}
        description={
          "If you like my work and you like to work with me, feel free to reach out to me! I’m open to new opportunities!"
        }
        link={{
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/makedonka-eftimova-800a76166/",
          isOpeningPdf: false,
        }}
      />
      <ScrollToTop
        smooth
        color="#fff"
        style={{
          width: "45px",
          height: "45px",
          borderRadius: "50%",
          backgroundColor: "#000",
        }}
      />
    </div>
  );
};

export default Home;
