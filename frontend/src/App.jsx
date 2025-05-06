import { Routes, Route } from 'react-router-dom';
import Wider from './pages/wider';


function App() {

  return (
    <>
      <Routes >

        <Route path="/" element={<Wider />} />

      </Routes>
    </>
  );
}

export default App;
