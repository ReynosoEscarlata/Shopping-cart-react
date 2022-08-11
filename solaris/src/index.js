import React from 'react';
import ReactDOM from 'react-dom/client';
import ProjectRoutes from './routes/projectRoutes';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ProjectRoutes/>
  </React.StrictMode>
);

reportWebVitals();
