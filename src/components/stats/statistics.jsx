import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    const randomHex = () => {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`
    }
    return (
        <section>
            {title && <h2>{title}</h2>}
            <ul>
                {stats.map(({ id, label, percents }) => (
                    <li
                        key={id}
                        style={{ backgroundColor: randomHex()}}
                    >
                        <span>{label}</span>
                        <span>{percents}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired
};