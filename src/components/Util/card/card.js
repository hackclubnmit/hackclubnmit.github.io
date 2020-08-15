import React, { Fragment } from 'react';
import { motion } from 'framer-motion';

const Card = (props) => {
  return (
    <Fragment>
      <motion.article
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="card"
      >
        {props.children}
      </motion.article>
      <style>
        {`
          .card {
            width: 300px;
            height: 300px;
            background: white;
            border-radius: 30px;
            box-shadow: 10px 10px 20px #d9d9d9, -10px -10px 20px #ffffff;
            padding: 10px;
            margin: 30px;
            transition: all 0.1s ease;
          }
          
          .card:hover{
            box-shadow:  17px 17px 34px #d9d9d9, 
             -17px -17px 34px #ffffff;
          }
        `}
      </style>
    </Fragment>
  );
};

export default Card;
