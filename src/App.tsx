
import './App.css'
import Login from './assets/paginas/login/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store/store'
import Home from './assets/paginas/home/Home';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App
