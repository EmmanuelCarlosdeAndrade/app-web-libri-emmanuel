import './App.css';
import NavBar from './components/layouts/NavBar';
import Container from './components/layouts/Container';
import Home from './components/pages/Home';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container>
        <NavBar />
        <Home />
      </Container>
    </>
  );
}

export default App;
