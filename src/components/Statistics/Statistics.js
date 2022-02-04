import PropTypes from 'prop-types';
import Statistics from './StatisticsItem';
import s from './Statistics.module.css';

function StatisticsList({ stats }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>UPLOAD STATS</h2>
      <ul className={s.statList}>
        {stats.map(stat => (
          <Statistics
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default StatisticsList;
