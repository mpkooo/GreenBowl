// // App.js
// import React from 'react';
// import { BrowserRouter as Routes, Route} from 'react-router-dom';
// import Home from './pages/Home';
// import LoginPage from './pages/LoginPage';
// import InputNamePage from './pages/InputNamePage';
// import './App.css';

// function App() {

//   return (
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/inputname" element={<InputNamePage />} />
//       </Routes>
//   );
// }

// export default App;

// import React from 'react';
// import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
// import Home from './pages/Home';
// import LoginPage from './pages/LoginPage';
// import InputNamePage from './pages/InputNamePage';
// import './App.css';

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/inputname" element={<InputNamePage />} />
//     </Routes>
//   );
// }

// export default App;

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import LoginPage from './pages/LoginPage'
import InputNamePage from './pages/InputNamePage'
import IntroductionPage from './pages/IntroductionPage'
import Onboarding1 from './pages/Onboarding1'
import Onboarding2 from './pages/Onboarding2'
import Onboarding3 from './pages/Onboarding3'
import Onboarding4 from './pages/Onboarding4'
import Onboarding5 from './pages/Onboarding5'
import Onboarding6 from './pages/Onboarding6'
import Onboarding7 from './pages/Onboarding7'
import Onboarding8 from './pages/Onboarding8'
import Onboarding9 from './pages/Onboarding9'
import Onboarding10 from './pages/Onboarding10'
import EndOfOnboard from './pages/EndOfOnboard'
import Home from './pages/Home'
import RecipeStart from './pages/recipeStart'
import Recipe1 from './pages/recipe1'
import Recipe2 from './pages/recipe2'
import Recipe3 from './pages/recipe3'
// import Recipe1 from './pages/recipe1'
// import Recipe1 from './pages/recipe1'
// import Recipe1 from './pages/recipe1'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/inputname" element={<InputNamePage />} />
        <Route path="/introduction" element={<IntroductionPage />} />

        {/* Onboarding */}
        <Route path="/onboarding1" element={<Onboarding1 />} />
        <Route path="/onboarding2" element={<Onboarding2 />} />
        <Route path="/onboarding3" element={<Onboarding3 />} />
        <Route path="/onboarding4" element={<Onboarding4 />} />
        <Route path="/onboarding5" element={<Onboarding5 />} />
        <Route path="/onboarding6" element={<Onboarding6 />} />
        <Route path="/onboarding7" element={<Onboarding7 />} />
        <Route path="/onboarding8" element={<Onboarding8 />} />
        <Route path="/onboarding9" element={<Onboarding9 />} />
        <Route path="/onboarding10" element={<Onboarding10 />} />

        <Route path="/finishonboard" element={<EndOfOnboard />} />

        <Route path="/home" element={<Home />} />

        <Route path="/recipestart" element={<RecipeStart />} />
        <Route path="/recipe1" element={<Recipe1 />} />
        <Route path="/recipe2" element={<Recipe2 />} />
        <Route path="/recipe3" element={<Recipe3 />} />
        <Route path="/recipe1" element={<Recipe1 />} />
        <Route path="/recipe1" element={<Recipe1 />} />
        <Route path="/recipe1" element={<Recipe1 />} />
      </Routes>
    </Router>
  )
}

export default App
