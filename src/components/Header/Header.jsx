import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./index.module.scss";

const Header = ({ scrollEvent }) => {
  const buttons = [
    { id: 1, title: "О нас", index: 0 },
    { id: 2, title: "Наши ресурсы", index: 1 },
    { id: 3, title: "Почему мы", index: 2 },
    { id: 4, title: "Радиостанции", index: 3 },
    { id: 5, title: "Отзывы", index: 4 },
    { id: 6, title: "Команда", index: 5 },
  ];

  return (
    <div className={styles.headerContainer}>
      <div>
        <img src={logo} alt="Логотип" />
      </div>
      <div className={styles.links}>
        {buttons.map((button) => (
          <Link key={button.id} onClick={() => scrollEvent(button.index)}>
            {button.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
