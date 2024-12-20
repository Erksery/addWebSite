import React, { useRef } from "react";
import Header from "../../components/Header/Header";
import styles from "./index.module.scss";
import { StartContainer } from "../../components/startContainer/StartContainer";
import { ResourcesContainer } from "../../components/resourcesContainer/ResourcesContainer";
import { WhoWeContainer } from "../../components/whoWeContainer/WhoWeContainer";
import { RadiosList } from "../../components/RadiosList/RadiosList";
import { FeedBack } from "../../components/feedBacks/FeedBack";
import { TeamList } from "../../components/teamList/TeamList";
import { Footer } from "../../components/Footer/Footer";

const Home = () => {
  const refs = useRef([]);

  const containers = [
    <StartContainer />,
    <ResourcesContainer />,
    <WhoWeContainer />,
    <RadiosList />,
    <FeedBack />,
    <TeamList />,
    <Footer />,
  ];

  const scrollToElement = (index) => {
    refs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.pageContainer}>
      <Header scrollEvent={scrollToElement} />
      <div className={styles.contentContainer}>
        {containers.map((container, index) => (
          <div key={index} ref={(el) => (refs.current[index] = el)}>
            {container}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
