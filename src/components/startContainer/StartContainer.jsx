import React from "react";
import styles from "./index.module.scss";

export const StartContainer = () => {
  return (
    <div className={styles.startContainer}>
      <div className={styles.logoContainer}>
        <div className={styles.block} />

        <h3>С НАМИ ПРИЯТНО РАБОТАТЬ</h3>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h2>О нас</h2>
          <p>
            ТопМедиа - крупнейший* медиахолдинг Великого Новгорода. Мы
            предлагаем комплексное размещение рекламы на 12 радиостанциях и в
            медиа, а также производим рекламные ролики. Охват холдинга только на
            радио - 470 тысяч человек, из которых 150 000 - жители Великого
            Новгорода. Ежедневно нас слушает ваша целевая аудитория и мы всегда
            готовы помочь ей узнать о вашей компании.
          </p>
          <div className={styles.blockContainer}>
            <div>
              <img src="http://topmedia53.ru/images/about-icn-01.svg?crc=442984117" />
              <h3>3 ОФИСА</h3> В Великом Новгороде и области.
            </div>
            <div>
              <img src="http://topmedia53.ru/images/about-icn-02.svg?crc=4186522615" />
              <h3>2000 АКТИВНЫХ КЛИЕНТОВ </h3>Нам одинаково доверяют как лидеры
              своих рынков так и частные предприниматели
            </div>
            <div>
              <img src="http://topmedia53.ru/images/about-icn-03.svg?crc=3833187026" />
              <h3>АУДИТОРИЯ - 700 000 ЧЕЛОВЕК</h3> Среди них - ваши
              потенциальные клиенты.
            </div>
            <div>
              <img src="http://topmedia53.ru/images/about-icn-04.svg?crc=3888742032" />
              <h3>12 СПЕЦИАЛИСТОВ</h3> Маркетологи, специалисты по контекстной
              рекламе и SEO-продвижению
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
