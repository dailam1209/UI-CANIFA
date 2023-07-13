import { NavLink } from "react-router-dom";

function Background (image) {

    return(
        <div className="image">
            <NavLink>
                <img src={image?.background?.src} alt={image?.background?.alt}></img>
            </NavLink>
        </div>
    )
}

export default Background;