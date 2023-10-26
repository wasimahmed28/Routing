import './App.css';
import {Routes, Route} from 'react-router-dom';
import Posts from './Posts';
import NotFound from './NotFound';
import Navigation from './Navigation';
import Users from './Users';
import PostDetail from './PostDetail';
import UserDetail from './UserDetail';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<p>Home Page</p>} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/users" element= { <Users />} />
        <Route path='*' element={ <NotFound />} />
        <Route path="/post/:postId" element={<PostDetail />} />
        <Route path="/user/:userId" element= { <UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
