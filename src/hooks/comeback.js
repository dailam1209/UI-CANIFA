import { useNavigate} from "react-router-dom";
import { Comeback } from "../assets/profile";

export const ItemComeBack = () => {
    let navigate = useNavigate();
    return (
        <div className="btn-comeback" onClick={() => navigate(-1)}>
            <div className="comeback">
                <Comeback/>
            </div>
            <div className="title">
            <h3>Trở lại</h3>
            </div>
        </div>
    );
};