import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAddFavorite } from "../../Redux/slices/favoriteSlice";

function AddFavorite(value){
    const [isLike, setIsLike] = useState(false)
    const dispatch = useDispatch()
    const favoriteMovie = useSelector(store => store.favorite.favoriteMovie)
    const isLiked = Array.isArray(favoriteMovie) && favoriteMovie.some(f => f.id === value.id);
    
    return(
        <>
            <button className="favorite-add-search" onClick={()=>dispatch(postAddFavorite(value))}>
                { isLiked
                ? (<img width="30" height="30" src="https://img.icons8.com/ios-filled/50/FA5252/like--v1.png" alt="liked"/>)
                : (<img width="30" height="30" src="https://img.icons8.com/ios/50/FFFFFF/like--v1.png" alt="like"/>)
                }
            </button>
        </>
    )
}

export default AddFavorite