import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store';

//steel
import './App.scss';
import './index.css'

//views
import Home from './views/Home'
import Login from './views/SignIn'
import UserDetail from './views/UserDetail'

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/SignIn" element={<Login/>} />
          <Route path="/UserDetail" element={<UserDetail/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
