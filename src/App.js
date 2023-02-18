import { BrowserRouter } from 'react-router-dom';

import Navbar from './modules/Navbar/Navbar';

import { Wrapper } from 'App.styled';
import UserRoutes from './UserRoutes';

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Navbar />
        <UserRoutes />
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
