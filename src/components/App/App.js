import React from 'react';
import Title from '~/src/components/Title';
import AddStopForm from '~/src/containers/AddStopForm';
import Itinerary from '~/src/containers/Itinerary';
import './App.less';

const App = () => (
  <div className='App'>
    <Title />
    <AddStopForm />
    <Itinerary />
  </div>
);

export default App;
