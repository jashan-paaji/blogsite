import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './Components/Register';
import Login from './Components/Login'
import Post from './Components/Post';
import AddPost from './Components/AddPost';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/posts" element={<Post />} />
          <Route exact path="/add-post" element={<AddPost/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
