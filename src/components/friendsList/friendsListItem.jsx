export const FriendsItem = ({ avatar, isOnline, name }) => {
    return (
        <li>
            <span></span>
            <img src={avatar} alt='avatar' width='48' />
            <p>{name}</p>
        </li>
    );
};