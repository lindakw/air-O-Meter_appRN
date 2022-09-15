import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Search from './screens/search_screen/search';

export default function App() {
  const [city, setCity] = useState("");
  return (
    <Provider store={store}>
      <Search
        setCity={setCity}
        city={city}
      />
    </Provider>

  );
}
