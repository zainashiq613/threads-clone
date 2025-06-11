import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './components/common/Loader';
import Header from './components/common/Header';
import Home from './pages/Protected/Home';
import Search from './pages/Protected/Search';
import Error from './pages/Error';
import Register from './pages/Register';
import { Box } from '@mui/material';
import ProtectedLayout from './pages/Protected/ProtectedLayout';
import ProfileLayout from './pages/Protected/profile/ProfileLayout';
import Threads from './pages/Protected/profile/Threads';
import Replies from './pages/Protected/profile/Replies';
import Repost from './pages/Protected/profile/Repost';
import SinglePost from './pages/Protected/SinglePost';

function App() {
  return (
    <>
      <Box minHeight={'100vh'}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<ProtectedLayout />}>
              <Route exact path="" element={<Home />} />
              <Route exact path="post/:id" element={<SinglePost />} />
              <Route exact path="search" element={<Search />} />
              <Route exact path="profile" element={<ProfileLayout />}>
                <Route exact path="threads/:id" element={<Threads />} />
                <Route exact path="replies/:id" element={<Replies />} />
                <Route exact path="reposts/:id" element={<Repost />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Box>
    </>
  );
}

export default App;
