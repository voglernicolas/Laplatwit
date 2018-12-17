import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: 'reacter-e4c51',
  storageBucket: 'reacter-e4c51.appspot.com',
  messagingSenderId: ''
})

import App from './components/App'

render(<App />, document.getElementById('root'))
