import PropTypes from 'prop-types';
import Statistic from './statistics.module.css'

export const Statistics = ({ title, stats }) => {
    const randomHex = () => {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`
    };
    return (
        <section className={Statistic.stats}>
            {title && <h2 className={Statistic.title}>{title}</h2>}
            <ul className={Statistic.statsList}>
                {stats.map(({ id, label, percents }) => (
                    <li
                        className={Statistic.item}
                        key={id}
                        style={{ backgroundColor: randomHex()}}
                    >
                        <span className={Statistic.label}>{label}</span>
                        <span className={Statistic.percents}>{percents}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired
};