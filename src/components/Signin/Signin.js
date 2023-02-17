import React from 'react';
import ipl from './ipl.jpg';
import Tilt from 'react-parallax-tilt';
import './Signin.css';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
    const { onRouteChange } = this.props;
    return ( 
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80 lh-solid">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="shadow-a f-headline fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="shadow db fw6 lh-solid f-subheadline" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bw1 b--black bg-transparent hover-bg-black hover-white w-100 h3"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="shadow db fw6 lh-solid f-subheadline" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bw1 b--black bg-transparent hover-bg-black hover-white w-100 h3"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="shadow">
              <input
                onClick={this.onSubmitSignIn}
                className=" shadow-a ba b--black ph3  input-reset  bg-transparent grow pointer f1 "
                type="submit"
                value="Sign in"
              />
            </div>
            <div className=" shadow lh-solid mt3">
            <input
                onClick={this.onSubmitSignIn}
                className=" shadow-a ba b--black ph3  input-reset  bg-transparent grow pointer f1 "
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Signin;