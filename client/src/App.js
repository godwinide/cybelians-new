// src/index.js
import React, { useState } from 'react';
import AppRouter from './AppRouter';
import Prompt from './components/Prompt';
const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {

        open
          ? <AppRouter />
          : <Prompt setOpen={setOpen} />
      }
    </>
  )
}

export default App