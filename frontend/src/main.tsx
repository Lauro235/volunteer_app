import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

if (process.env.NODE_ENV === 'development') {
  import('./mocks/browser.ts')
  .then(module => {
    module.worker.start();
    return () => {
      module.worker.stop();
    }
  })
  .catch(err => console.log(err)
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
