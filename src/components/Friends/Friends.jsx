import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Friends = () => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Friend</h2>
            <p>has : {gift}</p>
        </div>
    );
};

export default Friends;