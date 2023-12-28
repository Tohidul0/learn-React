import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from 'react-bootstrap/Button';

import './App.css'
import Spinner from './Component/BasicExample';
import BasicExample from './Component/BasicExample';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>Using react with Bootstrap</h1>
        <Button variant="secondary">Secondary</Button>
        <BasicExample></BasicExample>
    </>
  )
}

export default App
