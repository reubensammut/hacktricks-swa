import React from 'react';

function App() {
  return (<div>
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
    </div>);
}
 
export default App;
