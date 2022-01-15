import { lazy, Suspense } from 'react';
import {Routes, Route, Link}  from 'react-router-dom';
import './App.css';
import CounterPage from "./Counter"
import CounterHooks from "./Counter-fn"
import ColorPicker from './ColorPicker';

// const CounterPage = lazy(() => import('./Counter'));
// const CounterHooks = lazy(() => import ('./Counter-fn'));
// const ColorPicker = lazy(() => import('./ColorPicker'));

const colorPickerOptions = [
  {label: 'red', color: '#F44336'},
  {label: 'green', color: '#4CAF50'},
  {label: 'blue', color: '#2196F3'},
  {label: 'grey', color: '#607D8B'},
  {label: 'pink', color: '#E91E63'},
  {label: 'indigo', color: '#3F51B5'},
]

const App = () => {
  return (
  <>
  <h1>React with TypeScript</h1>

  <ul>
    <Link to="/counter">Counter</Link>
    <Link to="/counter-hooks">Counter Hooks</Link>
    <Link to="/color-picker">Color Picker</Link>
  </ul>


{/* <Suspense fallback = "Loading ..."> */}
  <Routes>
    {/* <Route path="/" /> */}
    <Route path = "/counter" element={<CounterPage/>} />
    <Route path = "/counter-hooks" element={<CounterHooks/>} />
    {/* <Route path = "/color-picker" options={colorPickerOptions} /> */}

  </Routes>
{/* </Suspense> */}
  </>
  )
}

export default App;

