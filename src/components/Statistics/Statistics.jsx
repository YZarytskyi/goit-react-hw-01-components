import PropTypes from 'prop-types';
import { Item, Label, List, Percentage, Title } from './StyleStatistics';

const Statistics = ({ title, stats }) => {
  return (
    <section>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage} %</Percentage>
          </Item>
        ))}
      </List>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
