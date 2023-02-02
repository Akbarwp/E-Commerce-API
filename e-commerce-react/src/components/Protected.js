import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Protected(props) {

    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            navigate("/login");
        }
    });

    const navigate = useNavigate();
    let Cmp = props.Cmp;

    return (
        <div className="app">
            <Cmp />
        </div>
    );
}

export default Protected;