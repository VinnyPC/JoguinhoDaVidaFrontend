import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { Action, addToken } from "../../../../store/tokens/actions";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { TokenState } from "../../../../store/tokens/tokensReducer";

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  let history = useNavigate();
  const dispatch = useDispatch();

  function goLogout(){
    dispatch(addToken(""));
    alert("Usuario deslogado")
    history("/login");
  };

  var navbarComponent;
  if (token != ""){
    navbarComponent = (
      <AppBar
        position="static"
        className="Appbar"
        style={{ background: "#810081" }}
      >
        <Toolbar
          variant="dense"
          className="Navbar"
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "1em",
          }}
        >
          <Box style={{ cursor: "pointer" }} className="Navbar-Logo">
            <Typography variant="h4" color="inherit">
              BlogPessoal - Vinicius
            </Typography>
          </Box>

          <Stack direction={"row"} gap={5}>
            <Link to="/home">
              <Box px={2} style={{ cursor: "pointer" }} className="NavbarLink">
                <Button variant="text" style={{ color: "white" }}>
                  Home
                </Button>
              </Box>
            </Link>
            <Link to="/postagens">
              <Box px={1} style={{ cursor: "pointer" }} className="NavbarLink">
                <Button variant="text" style={{ color: "white" }}>
                  Postagens
                </Button>
              </Box>
            </Link>
            <Link to="/temas">
              <Box px={2} style={{ cursor: "pointer" }} className="NavbarLink">
                <Button variant="text" style={{ color: "white" }}>
                  Temas
                </Button>
              </Box>
            </Link>
            <Link to="/formularioTema">
              <Box px={1} style={{ cursor: "pointer" }} className="NavbarLink">
                <Button variant="text" style={{ color: "white" }}>
                  Cadastrar Tema
                </Button>
              </Box>
            </Link>

            <Box
              px={2}
              style={{ cursor: "pointer" }}
              className="NavbarLink"
              onClick={goLogout}
            >
              <Button variant="text" style={{ color: "white" }}>
                Logout
              </Button>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
    );
  }
  return <>{navbarComponent}</>;
}

export default Navbar;
function dispatch(arg0: Action) {
  throw new Error("Function not implemented.");
}
