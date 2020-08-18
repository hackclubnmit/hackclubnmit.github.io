import React, { useState, createRef, useEffect } from 'react';
import { motion } from 'framer-motion';

import './card.css';

const Card = (props) => {
  const [isSticky, setIsSticky] = useState(false);
  const ref = createRef();

  useEffect(() => {
    const cachedRef = ref.current,
      observer = new IntersectionObserver(
        ([e]) => setIsSticky(e.intersectionRatio < 1),
        { threshold: [1] }
      );

    observer.observe(cachedRef);
  }, []);

  return (
    <motion.article
      whileHover={{ scale: 1.1 }}
      className={`card ${isSticky ? 'isSticky' : ''}`}
      ref={ref}
    >
      {props.children}
    </motion.article>
  );
};

export default Card;
