import PropTypes from "prop-types";
import { FriendsItem } from "./friendsListItem";

export const Friends = ({ friends }) => {
    return (
        <ul>
            {friends.map(({ avatar, id, isOnline, name }) => (
                <FriendsItem
                    key={id}
                    avatar={avatar}
                    isOnline={isOnline}
                    name={name}
                />
            ))}
        </ul>
    );
};

Friends.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool
        })
    )
};