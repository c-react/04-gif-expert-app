import React from 'react';
import ReactDOM from 'react-dom/client';

//Import father component
import { GifExpertApp } from './GifExpertApp';

//Import CSS
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
)
