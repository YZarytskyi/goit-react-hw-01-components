import PropTypes from "prop-types";
import { Container, Description, Image, Item, Location, Name, Quantity, StatsList, Tag } from "./StyleProfile";

const Profile = ({username, tag, location, avatar, stats}) => {
  return (
    <Container>
      <Description>
        <Image
          src={avatar}
          alt="User avatar"
        />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsList>
        <Item>
          <span>Followers</span>
          <Quantity>{stats.followers}</Quantity>
        </Item>
        <Item>
          <span>Views</span>
          <Quantity>{stats.views}</Quantity>
        </Item>
        <Item>
          <span>Likes</span>
          <Quantity>{stats.likes}</Quantity>
        </Item>
      </StatsList>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
  }).isRequired
}

export default Profile;
