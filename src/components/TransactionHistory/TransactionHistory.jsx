import PropTypes from 'prop-types';
import { Table, Td, Th } from './StyleTransactionHistory';

const TransactionHistory = ({items}) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </thead>

      <tbody>
      {items.map(({id, type, amount, currency}) => (
        <tr key={id}>
          <Td>{type}</Td>
          <Td>{amount}</Td>
          <Td>{currency}</Td>
        </tr>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
}

export default TransactionHistory;
