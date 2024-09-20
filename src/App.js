import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './page/MainPage';
import SubPage1 from './page/SubPage1';
import SubPage2 from './page/SubPage2';
import SubPage3 from './page/SubPage3';
import SubPage4 from './page/SubPage4';
import SubPage5 from './page/SubPage5';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/subpage1' element={<SubPage1 />} />
              <Route path='/subpage2' element={<SubPage2 />} />
              <Route path='/subpage3' element={<SubPage3 />} />
              <Route path='/subpage4' element={<SubPage4 />} />
              <Route path='/subpage5' element={<SubPage5 />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
