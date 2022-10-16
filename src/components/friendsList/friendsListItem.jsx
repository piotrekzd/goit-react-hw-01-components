import FriendsListItem from './friendsListItem.module.css';

export const FriendsItem = ({ avatar, isOnline, name }) => {
    return (
        <li className={FriendsListItem.item}>
            <span className={isOnline ? FriendsListItem.isActive : FriendsListItem.status}></span>
            <img className={FriendsListItem.avatar} src={avatar} alt='avatar' width='48' />
            <p className={FriendsListItem.name}>{name}</p>
        </li>
    );
};