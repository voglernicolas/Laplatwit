import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'

// Initialize Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyCT_aFCtTxx0_2X1GhA4QtfoHKjr_5ALFU',
  authDomain: 'reacter-e4c51.firebaseapp.com',
  databaseURL: 'https://reacter-e4c51.firebaseio.com',
  projectId: 'reacter-e4c51',
  storageBucket: 'reacter-e4c51.appspot.com',
  messagingSenderId: '157780693471'
})

import App from './components/App'

render(<App />, document.getElementById('root'))
