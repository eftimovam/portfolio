import clasess from "./home-item.module.css";

interface HomeItemInterface {
  textSide: string;
  imagePath: string;
  description: string;
  link: {
    name: string;
    isOpeningPdf: boolean;
    url: string;
  };
}

const HomeItem = (props: HomeItemInterface) => {
  const { textSide, imagePath, description, link } = props;

  if (textSide === "contact") {
    return (
      <div className={clasess.homeItem}>
        <div>
          <p>{description}</p>
          <a href={link.url} target="_blank" rel="noreferrer">
            {link.name}
          </a>
          <p>
            Or reach me at: <span>eftimova.m997@gmail.com</span>
          </p>
          <p></p>
        </div>
        <img src={imagePath} alt={link.name} />
      </div>
    );
  }

  if (textSide === "left") {
    return (
      <div className={clasess.homeItem}>
        <div>
          <p>{description}</p>
          {link.isOpeningPdf ? (
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.name}
            </a>
          ) : (
            <p>In Progress</p>
          )}
        </div>
        <img src={imagePath} alt={link.name} />
      </div>
    );
  }

  return (
    <div className={clasess.homeItem}>
      <img src={imagePath} alt={link.name} />
      <div>
        <p>{description}</p>
        {link.isOpeningPdf ? (
          <a href={link.url} target="_blank" rel="noreferrer">
            {link.name}
          </a>
        ) : (
          <p>In Progress</p>
        )}
      </div>
    </div>
  );
};

export default HomeItem;
