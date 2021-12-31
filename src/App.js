import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import MainLayout from './layouts/main_layouts.js';
// import EmptyLayout from './layouts/empty_layouts.js';
// import Home from './pages/home.js';
// import About from './pages/about.js';
// import SignIn from './pages/sign-in.js';
// import NotFound from './pages/not-found.js';

import Login from "./Login";
import Main from "./Main";
import MainLayout from './layouts/main_layouts.js';
import EmptyLayout from './layouts/empty_layouts.js';
function App() {
  return (
    <div>
     {/* <Routes >
      <Route  element={<MainLayout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Route>
      <Route element={<EmptyLayout/>}>
        <Route path="/sign-in" element={<SignIn/>} />
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes> */}
     <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main/*" element={<Main />} />
          <Route path="/main-layout/*" element={<MainLayout />} />
          <Route path="/empty-layout/*" element={<EmptyLayout />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
/// https://stackoverflow.com/questions/69988285/nested-routing-in-react-router-dom-v6