import PropTypes from 'prop-types';
import { Item, IsOnline, Name } from './StyleFriendList';

const FriendListItem = ({ friend }) => {
  return (
    <Item>
      <IsOnline isOnline={friend.isOnline}></IsOnline>
      <img src={friend.avatar} alt="User avatar" width="48" />
      <Name>{friend.name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default FriendListItem;
