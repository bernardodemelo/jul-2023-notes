// Importing React Npm Package
// same as: const React = require ('react');
import React from 'react'

// Importing DOM React feature
import ReactDOM from 'react-dom/client'

// Importing App file, that has an App component
import App from './App.jsx'

// Importing CSS for styling this file
import './index.css'

// This creates a div with id="root" that its inside is going to have your app content
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
