import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./index.module.scss";

const Header = () => {
  const buttons = [
    { id: 1, title: "Главная", link: "/" },
    { id: 2, title: "О нас", link: "/" },
    { id: 3, title: "Наши ресурсы", link: "/" },
    { id: 4, title: "Радиостанции", link: "/" },
    { id: 5, title: "Клиенты", link: "/" },
    { id: 6, title: "Команда", link: "/" },
  ];

  return (
    <div className={styles.headerContainer}>
      <div>
        <img src={logo} />
      </div>
      <div className={styles.links}>
        {buttons.map((button) => (
          <Link>{button.title}</Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
