import { useState } from "react"

const LikeButton = () => {

    const [likes, setLikes] = useState(0);

    return (
        <>
        <button onClick={() => setLikes(likes + 1)}>Like</button>
        <p>{likes}</p>
        <button onClick={() => setLikes(likes === 0  ? 0 : 0)}>Reset</button>
        

    </>
    )

}

export default LikeButton