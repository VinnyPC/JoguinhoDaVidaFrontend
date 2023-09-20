import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { useEffect } from "react";

function Home() {
    let navigate = useNavigate();

    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );

    useEffect(() => {
      if (token == "") {
        alert("Você precisa estar logado!")
        navigate("/login");
      }
    }, [token]);

    return(
        <>
        
        </>
    );
}

export default Home;
