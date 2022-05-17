// TODO: answer here
import { useState } from "react";
import { likePost } from "../api/post";

export default function LikeDislikeButton({id, isLiked, isDisliked, likeCount, dislikeCount}) {
    // TODO: answer here
    const [isLikedState, setIsLikedState] = useState(isLiked);
    const [isDislikedState, setIsDislikedState] = useState(isDisliked);
    const [likeCountState, setLikeCountState] = useState(likeCount);
    const [dislikeCountState, setDislikeCountState] = useState(dislikeCount);

    const handleLike =  async () =>{
        if(isLikedState === true){
            await likePost(id, "unlike");
            setIsLikedState(false);
            setLikeCountState(likeCountState -1);
        }else{
            await likePost(id, "like")
            setIsLikedState(true);
            setLikeCountState(likeCountState + 1);
        }
        if (isDislikedState) {
            setIsDislikedState(false);
            setDislikeCountState(dislikeCountState - 1);
        }
    
    }

    const handleDislike = async () =>{
        if (isDislikedState) {
            await likePost(id, "undislike");
            setIsDislikedState(false);
            setDislikeCountState(dislikeCountState - 1);
        } else {
            await likePost(id, 'dislike');
            setIsDislikedState(true);
            setDislikeCountState(dislikeCountState + 1);
        }

        if (isLikedState) {
            setIsLikedState(false);
            setLikeCountState(likeCountState - 1);
        }
    }

    return(
        <div>
            <button aria-label="Like Button" onClick={handleLike}>Like</button>
            <button aria-label="Dislike Button" onClick={handleDislike}>Dislike</button>
            <p aria-label="Like Count">{likeCountState}</p>
            <p aria-label="Dislike Count">{dislikeCountState}</p>
        </div>
    )
}