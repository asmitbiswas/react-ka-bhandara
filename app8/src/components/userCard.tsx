import styles from "./UserCard.module.css"

interface UserProps{
    userName :string;
    userBio:string;
    userRole:string;
    avatarImg?: string;
    avatarImgFact?: string;
    onFollow: () => void;
    onMessage: () => void;
}

export function UserDetails({userName, userBio,userRole, avatarImg, onFollow, onMessage, avatarImgFact}: UserProps){
    return(
        <div>
            {avatarImg && <img src="_.jpeg" alt={avatarImgFact}/>}
            <h2>{userName}</h2>
            <h2>{userBio}</h2>
            <h2>{userRole}</h2>
            <button onClick={onFollow}>Follow</button>
            <button onClick={onMessage}>Message</button>

        </div>
    )
}
