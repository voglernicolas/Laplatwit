import React, { PropTypes } from 'react'
import styles from './login.css'

const propTypes = {
  onAuthGit: PropTypes.func.isRequired,
  onAuthFacebook: PropTypes.func.isRequired
}

function Login ({ onAuthGit, onAuthFacebook }) {
  return (
    <div className={styles.root}>
      <p className={styles.text}>
        Necesitamos que inicies sesion con tu cuenta de GitHub
        para que puedas leer y escribir mensajes
      </p>
      <button
        onClick={onAuthGit}
        className={styles.button}
      >
        <span className='fa fa-github ' /> Login con Github
      </button> <br />
      <button
        onClick={onAuthFacebook}
        className={styles.button}
      >
        <span className='fa fa-facebook ' /> Login con Facebook
      </button>
    </div>
  )
}

Login.propTypes = propTypes

export default Login
