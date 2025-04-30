import React from 'react';

function App() {
  return (
<html>
  <head>
    <title>Static Web App Lab 4</title>
  </head>
  <body
    style="display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background-color: #f0f0f0;"
  >
    <div
      style="background-color: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;"
    >
      <h1>Static Web App Lab 4 - Write</h1>
      <div style="margin: 20px;">
        <h2>Secret Thoughts</h2>
        <textarea
          id="secretThoughts"
          rows="10"
          cols="50"
          placeholder="Paste your secret thoughts here..."
          style="width: 100%; max-width: 500px;"
        ></textarea>
      </div>
    </div>
  </body>
</html> );
}

export default App;
