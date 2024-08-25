import React from 'react';
import './App.css'; 
import images from './images/63c12849a1c7e9df64c819fc_programming-languages-shutterstock-1680857539.webp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src= {images} alt=" portfolio" className="profile-image" />
        <h1>დაჩი</h1>
        <p>Dachi
Frontend Developer in Progress

Hello! I'm Dachi, a budding frontend developer from the Netherlands with a strong foundation in web technologies.
 My journey began with mastering HTML, CSS, and SCSS, where I learned to create visually appealing and responsive designs.
 I also have experience in C#, which has given me a solid understanding of backend logic and software development principles.
Currently, I'm diving into React and React Native, expanding my skills to build dynamic user interfaces and mobile applications.
 My passion lies in crafting seamless and intuitive user experiences, and I'm excited to continue growing in the field of frontend development.</p>
      </header>
    </div>
  );
}

export default App;
