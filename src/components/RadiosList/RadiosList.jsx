import React from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const RadiosList = () => {
  const radios = [
    "http://topmedia53.ru/images/u200255.png?crc=4164876936",
    "http://topmedia53.ru/images/u200181.png?crc=493677116",
    "http://topmedia53.ru/images/u200039-r.png?crc=351077059",
    "http://topmedia53.ru/images/u200115-r.png?crc=257078556",
    "http://topmedia53.ru/images/u200076.png?crc=55053219",
    "http://topmedia53.ru/images/u200113-r.png?crc=4084235756",
  ];

  return (
    <div className={styles.container}>
      <h1>Радиостанции</h1>
      <div className={styles.blockList}>
        {radios.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={styles.block}
          >
            <Link>
              <img src={src} alt={`Радиостанция ${index + 1}`} />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
