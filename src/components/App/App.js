import React from 'react';
import Title from '~/src/components/Title/index';
import AddStopForm from '~/src/containers/AddStopForm/index';
import Itinerary from '~/src/containers/Itinerary/index';
import './App.less';

const App = () => (
  <div className='App'>
    <Title />
    <AddStopForm />
    <Itinerary />
  </div>
);

export default App;
