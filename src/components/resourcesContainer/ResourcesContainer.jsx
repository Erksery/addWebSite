import React from "react";
import styles from "./index.module.scss";
import { motion } from "framer-motion";

export const ResourcesContainer = () => {
  const blocks = [
    {
      title: "Реклама на радио",
      description: "12 радиостанций с вашей целевой аудиторией",
    },
    {
      title: "Реклама в интернете",
      description:
        "Создадим или оптимизируем контекстную и таргетированную рекламу. Защитим рекламные бюджеты от слива.",
    },
    {
      title: "Реклама на справочных порталах",
      description:
        "Премиальное-размещение на Справка.Ру, 2ГИС, Яндекс.Справочник, Spravker.",
    },
    {
      title: "Создание сайтов",
      description: "От Landing-page до интернет-магазинов.",
    },
    {
      title: "SEO-продвижение",
      description: "Выведем ваш сайт в топ по нужным ключевым запросам.",
    },
  ];

  return (
    <div className={styles.resourcesContainer}>
      <h1>Наши ресурсы</h1>
      <div className={styles.blockList}>
        {blocks.map((block, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={styles.block}
          >
            <h3>{block.title}</h3>
            <p>{block.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
