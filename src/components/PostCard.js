// TODO: answer here
import logo from '../logo.svg';
import LikeDislikeButton from './LikeDislikeButton';

export default function PostCard({ image, caption, username, userId, date }) {
  return(
    <div aria-label="Post Card">
      <img aria-label='Post Image' src={image}></img>
      <p aria-label='Post User Name'>{username}</p>
      <p aria-label='Post Caption'>{caption}</p>
      <p aria-label='Post Date'>{date}</p>
      <LikeDislikeButton/>
    </div>
  )
}
