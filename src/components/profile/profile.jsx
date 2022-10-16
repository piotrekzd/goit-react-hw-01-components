import PropTypes from 'prop-types';
// import ProfileCSS from './profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div>
            <div>
                <img src={avatar} alt='avatar' />
                <p>{username}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>
            <ul>
                {[
                    [1, 'Followers', stats.followers],
                    [2, 'Views', stats.views],
                    [3, 'Likes', stats.likes],
                ].map(([id, text, value]) => (
                    <li key={id}>
                        <span>{text}</span>
                        <span>{value}</span>
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