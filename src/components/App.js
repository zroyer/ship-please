import React from 'react';
import Title from '../components/Title';
import AddStopForm from '../containers/AddStopForm';
import Itinerary from '../containers/Itinerary';

const App = () => (
  <div className='App'>
    <Title />
    <AddStopForm />
    <Itinerary />
  </div>
);

export default App;
