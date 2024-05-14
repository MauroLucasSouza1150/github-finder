import { UserProps } from "../Types/user";
import { MdLocationPin } from 'react-icons/md';

import classes from './User.module.css'

const User = ({ avatar_url, login, followers, following, location }: UserProps) => {
  return (
    <div className={classes.user}>
        <img src={avatar_url} alt={login}/>
        <h2>{login}</h2>
        {location && (
            <p className={classes.location}>
                <MdLocationPin />
                <span>{location}</span>
            </p>
        )}
        <div className={classes.status}>
            <div>
                <p>Seguidores:</p>
                <p className={classes.numbers}>{followers}</p>
            </div>
            <div>  
                <p>Seguindo:</p>
                <p className={classes.numbers}>{following}</p>
            </div>
        </div>
    </div>
  )
}

export default User