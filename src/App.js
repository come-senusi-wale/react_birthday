import React, {useState} from 'react';
import './App.css';
import data from './data';
import List from './list';


function App() {

  let [peoples, setpeople] = useState(data);
  return (
    <>
    <section id='container'>
      <div id='birth_container'>
        <p>{peoples.length} birthday today</p>
        <h2>list coponet</h2>
        <div>

          <List people={peoples} />


        </div>

        <div>
          <button onClick={() => {setpeople([])}}>clear</button>
        </div>
      </div>
    </section>
    
    </>
  );
}

export default App;
