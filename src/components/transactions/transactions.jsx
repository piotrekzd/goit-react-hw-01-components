import PropTypes from 'prop-types';
import History from './transactions.module.css';

export const Transactions = ({ items }) => {
    return (
        <table className={History.table}>
            <thead className={History.tableHead}>
                <tr className={History.tableRow}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <tr key={id}>
                        <td className={History.tableItem}>{type}</td>
                        <td className={History.tableItem}>{amount}</td>
                        <td className={History.tableItem}>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

Transactions.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired
        })
    )
};