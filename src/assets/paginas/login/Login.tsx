import React, { ChangeEvent, useState, useEffect } from "react";
import "./Login.css";
import UserLogin from "../../../models/UserLogin";
import { addToken } from "../../../store/tokens/actions";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { login } from "../../../service/Service";
function Login() {

    let history = useNavigate();

    const dispatch = useDispatch();
    const [token, setToken] = useState("");

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome: "",
            email: "",
            senha: "",
            nivel_atual: 0,
            pontos: 0,
            token: "",
        }
    );

    function updatedModel(e: ChangeEvent<HTMLInputElement>){
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value,
        });
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {

        e.preventDefault();
        try{
            await login(`/usuario/logar`, userLogin, setToken);
            alert("usuario logado com sucesso");
        }catch(error){
            alert(error)
        }
        
    };

    useEffect(() => {
        if(token != ""){
            dispatch(addToken(token))
            history("/home")
        }
    }, [token]);

    return (
      <>
        <form onSubmit={onSubmit}>
          <input
            id="email"
            name="email"
            type="text"
            value={userLogin.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
          ></input>
          <input
            id="password"
            name="senha"
            type="password"
            value={userLogin.senha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
          ></input>
          <button type="submit">Logar</button>
        </form>
      </>
    );
    
}

export default Login;
