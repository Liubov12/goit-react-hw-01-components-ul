import React from 'react';
import PropTypes from 'prop-types';
import  s from './Statistic.module.css';

const Statistics = ({title, stats})=> {
    return (
        <section className={s.statistics}>
        {/* <h2 className={s.title}>

        </h2> */}

        <ul className={s.stat_list}>
        {stats.map(item => (
        <li className ={s.item} key ={item.id}>
          
          <span className={s.label}>{item.label} </span>
          <span className={s.percentage}>{item.percentage}%</span>
        </li>
        ))}
        </ul>
</section>
    );
 }
 Statistics.propTypes = {
  //  title : PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }),
    )
 }
 export default Statistics