import React, { Component } from 'react'
import { HashRouter, Match } from 'react-router'
import firebase from 'firebase'
import 'normalize-css'
import Header from '../Header'
import Main from '../Main'
import Profile from '../Profile'
import Login from '../Login'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null
    }

    this.handleOnAuthGit = this.handleOnAuthGit.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.handleOnAuthFacebook = this.handleOnAuthFacebook.bind(this)
  }

  componentWillMount () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user })
        console.log(user)
      } else {
        this.setState({ user: null })
      }
    })
  }

  handleOnAuthGit () {
    const provider = new firebase.auth.GithubAuthProvider()

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.error(`Error: ${error.code}: ${error.message}`))
  }

  handleOnAuthFacebook () {
    var provider = new firebase.auth.FacebookAuthProvider()

    firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken
    // The signed-in user info.
    var user = result
    console.log(result)
      
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code
    var errorMessage = error.message
    // The email of the user's account used.
    var email = error.email
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential
    })
  }

  handleLogout () {
    firebase.auth().signOut()
      .then(() => console.log('Te has desconectado correctamente'))
      .catch(() => console.error('Un Error ocurrió'))
  }

  render () {
    return (
      <HashRouter>
        <div>
          <Header />

          <Match exactly pattern='/' render={() => {
            if (this.state.user) {
              return (
                <Main
                  user={this.state.user}
                  onLogout={this.handleLogout}
                />
              )
            } else {
              return (
                <Login
                  onAuthGit={this.handleOnAuthGit}
                  onAuthFacebook={this.handleOnAuthFacebook}
                />
              )
            }
          }} />

          <Match pattern='/profile' render={() => {
            return (
              <Profile
                picture={this.state.user.photoURL}
                username={this.state.user.email}
                displayName={this.state.user.displayName}
                location={this.state.user.location}
                emailAddress={this.state.user.email}
              />
            )
          }} />

          <Match pattern='/user/:username' render={({ params }) => {
            return (
              <Profile
                displayName={params.username}
                username={params.username}
              />
            )
          }} />
        </div>
      </HashRouter>
    )
  }
}

export default App
