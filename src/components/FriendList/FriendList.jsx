import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import { FriendsList } from './StyleFriendList';

const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FriendList;
