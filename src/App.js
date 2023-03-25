import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddPostController from './pages/AddPost/AddPostController';
import ListPostsController from './pages/ListPosts/ListPostsController';
import './styles/style.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPostsController />} />
        <Route path="/add-post" element={<AddPostController />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
