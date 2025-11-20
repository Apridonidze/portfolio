import { StrictMode } from 'react'; //importing strich mode 
import { createRoot } from 'react-dom/client'; //importing root

import './index.css'; //importing css file

import App from './App.jsx'; //importing main component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
); //creating root in index.html