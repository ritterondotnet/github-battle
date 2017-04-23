/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCEiG1aq7T4JSlWFW5jsCAbHRWtn5Voxq4',
  authDomain: 'https://github-battle-215e7.firebaseapp.com',
  databaseURL: 'https://github-battle-215e7.firebaseio.com',
  storageBucket: 'gs://github-battle-215e7.appspot.com'
};

const fb = firebase
  .initializeApp(config)
  .database()
  .ref();

const App = (props) => {
  console.log('snapshot', props);
  return (
    <div>
      <h1>My Prototype</h1>
      <p>{JSON.stringify(props)}</p>
    </div>
  );
};

fb.on('value', snapshot => {
  const store = snapshot.val();
  ReactDOM.render(
    <App {...store} />,
    document.getElementById('root')
  );
});
