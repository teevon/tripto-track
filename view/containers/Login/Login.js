import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import './Login.css';
import GoogleAuth from '../../components/GoogleAuth/GoogleAuth';
const Login = ({ login, history, auth }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { email, password } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className='login-container'>
      <div className='row login-row'>
        <div className='col-sm-6 signin-pattern signin-pattern-container' />
        <div className='col-sm-6 login-column-side'>
          <div className='login-form-container'>
            <h1 className='mobile'>
              <img
                src='https://res.cloudinary.com/taofeeq/image/upload/v1569272981/TriptoTracker/logo_uhmcpr.png'
                alt='TriptoTracker logo'
              />
            </h1>
            <h1 className='large signin-label' style={{ margin: '0px auto' }}>
              Sign In
            </h1>

            <form
              className='form login-form'
              onSubmit={e => {
                e.preventDefault();
                login(email, password, history);
              }}>
              <div className='form-group'>
                <label className='signin-input-label' htmlFor='email'>
                  Email
                </label>
                <input
                  id='email'
                  className='form-control'
                  onChange={e => onChange(e)}
                  value={email}
                  type='email'
                  placeholder='Email Address'
                  name='email'
                  required
                />
              </div>
              <div className='form-group'>
                <label className='signin-input-label' htmlFor='password'>
                  Password
                </label>
                <input
                  className='form-control'
                  id='password'
                  onChange={e => onChange(e)}
                  value={password}
                  type='password'
                  placeholder='Password'
                  name='password'
                  required
                />
              </div>
              <p
                className='signin-forgot-password'
                style={{ margin: '0px auto', textAlign: 'center' }}>
                {' '}
                <Link to='/forgot'>Forgot Password?</Link>
              </p>
              <div className='col-sm-11' style={{ margin: '0px auto' }}>
                <button type='submit' className='btn custom-form-control'>
                  {auth.loading ? (
                    <i className='fa fa-circle-o-notch text-white spin-loader' />
                  ) : null}
                  Sign in
                </button>
              </div>
              <div
                className='col-sm-11'
                style={{
                  margin: '0px auto',
                  width: '100%',
                  textAlign: 'center',
                  fontWeight: '800',
                  padding: '5px'
                }}>
                OR
              </div>
              <div className='col-sm-11 gooogle-auth' style={{ margin: '0px auto' }}>
                <GoogleAuth />
              </div>
            </form>

            <p
              className='my-1'
              style={{ margin: '0 auto', textAlign: 'center' }}>
              Don't have an account? <Link to='/register'>Sign Up</Link>
              <Link className='ml-2' to='/'>
                Home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { login }
)(Login);
