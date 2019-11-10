import React from 'react';
import Title from '../components/Title';
import AddStop from '../containers/AddStop';
import Itinerary from '../containers/Itinerary';

const App = () => (
  <div className='App'>
    <Title />
    <AddStop />
    <Itinerary />
  </div>
);

export default App;
