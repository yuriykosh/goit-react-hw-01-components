import styles from './FriendsListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return <li className="item">
  <span className={[styles.status, isOnline ? styles.isOnline : styles.isOffline].join(' ')}></span>
  <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
</li>
}