import React from 'react';
import './App.css';
import ActivityCard from '../components/ActivityCard';
import ConstraintsForm from '../components/ConstraintsForm';

function App() {
  return (
    <div className='App'>
      <h1 className='title'> Generate an activity! </h1>
      <div className='content'>
        <ConstraintsForm />
        <ActivityCard />
      </div>
    </div>
  );
}

export default App;