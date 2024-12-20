import React from "react";
import styles from "./index.module.scss";

export const TeamList = () => {
  return (
    <div className={styles.container}>
      <h2>Команда</h2>
      <div className={styles.blockList}>
        <div
          style={{
            backgroundImage:
              "url(http://topmedia53.ru/images/%d0%bc%d0%be%d1%80%d1%8f%d0%ba%d0%be%d0%b2.jpg?crc=3973052565)",
          }}
          className={styles.block}
        >
          <p>
            <h2>АЛЕКСАНДР МОРЯКОВ</h2>
            <p>Генеральный директор</p>
          </p>
        </div>
        <div
          style={{
            backgroundImage:
              "url(http://topmedia53.ru/images/%d0%ba%d0%be%d1%81%d1%82%d1%8f.jpg?crc=4016121507)",
          }}
          className={styles.block}
        >
          <p>
            <h2>КОНСТАНТИН НИКОЛАЕВ</h2>
            <p>Директор по продажам</p>
            <p>nikolaev@topmedia53.ru</p> +7 906 202 4207
          </p>
        </div>
        <div
          style={{
            backgroundImage:
              "url(	http://topmedia53.ru/images/%d1%80%d1%83%d1%81%d0%b0%d0%ba%d0%be%d0%b2%d0%b01.jpg?crc=170658978)",
          }}
          className={styles.block}
        >
          <p>
            <h2>ТАТЬЯНА РУСАКОВА</h2>
            <p>Менеджер по продажам</p>
            <p>rusakova@ topmedia53.ru</p> +7 950 680 6633
          </p>
        </div>
      </div>
    </div>
  );
};
