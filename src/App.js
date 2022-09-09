import Home from "./pages/home/Home.js";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/login/Login.js";
import List from "./pages/list/List.js";
import New from "./pages/new/New.js";
import Single from "./pages/single/Single.js";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List/>} />
              <Route path=":userId" element={< Single />} />
              <Route path="new" element={< New/>} />
            </Route>
            <Route path="products">
              <Route index element={<List/>} />
              <Route path=":productsId" element={< Single />} />
              <Route path="new" element={< New/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


//firstly we gonna have login page ,home page in menu bar user ,products

// '/' 1:=> home
// '/' 2:=> Login
// 'users' 2:=> list
// 'users:userID' 2:=> list
// 'users/new' 2:=> new

