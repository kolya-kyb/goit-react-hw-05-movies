import { BrowserRouter } from 'react-router-dom';

import Navbar from './modules/Navbar/Navbar';

import { Wrapper } from 'App.styled';
import UserRoutes from './UserRoutes';

function App() {
  return (
    <Wrapper>
      <BrowserRouter basename="/goit-react-hw-05-movies">
        <Navbar />
        <UserRoutes />
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
