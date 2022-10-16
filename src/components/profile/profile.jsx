import PropTypes from 'prop-types';
import ProfileStyle from './profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div className={ProfileStyle.card}>
            <div className={ProfileStyle.user}>
                <img className={ProfileStyle.avatar} src={avatar} alt='avatar' />
                <p className={ProfileStyle.name}>{username}</p>
                <p className={ProfileStyle.tag}>@{tag}</p>
                <p className={ProfileStyle.location}>{location}</p>
            </div>
            <ul className={ProfileStyle.stats}>
                {[
                    [1, 'Followers', stats.followers],
                    [2, 'Views', stats.views],
                    [3, 'Likes', stats.likes],
                ].map(([id, text, value]) => (
                    <li
                        className={ProfileStyle.item}
                        key={id}
                    >
                        <span className={ProfileStyle.label}>{text}</span>
                        <span className={ProfileStyle.value}>{value}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })
};