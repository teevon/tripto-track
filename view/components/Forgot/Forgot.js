import React,{useState} from 'react';
import './Forgot.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestResetPassword } from '../../actions/auth';
const Forgot = ({requestResetPassword, auth,history}) => {
  const [formData, setFormData] = useState({
    email: ''
  });
  const { email } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className='mt-5 container-fluid login-container '>
      <div className='row form-group justify-content-center'>
        <div className='arrow-left'>
          <Link to='/login'>
            <i className='fas fa-arrow-left' />
          </Link>
        </div>
        <div className='wrapper'>
          <div className='reset'>
            <h2 className='text-center'>Forgot Password</h2>
          </div>
          <p>
            It is okay, we are humans afterall. Let's help you get back your login
            details
          </p>
          <form action method className='form-horizontal'
          onSubmit={e => {
            e.preventDefault();
            requestResetPassword(email,history)}}
            >
        <div className='form-group'>
          <label className='control-label sm-1 ml-3' htmlFor='email'>
            Enter your email address
          </label>
          <div className='col-sm-11'>
            <input
              type='email'
              name='email'
              onChange={e => onChange(e)}
              id='email'
              className='form-control'
              placeholder='johndoe@gmail.com'
            />
          </div>
        </div>
        <div className='form-group'>
          <div className='sm-1' />
          <div className='col-sm-11'>
            <button type='submit' className='btn custom-form-control'>
            {auth.loading?<i className="fa fa-circle-o-notch text-white spin-loader"></i>:null}
            Submit
            </button>
          </div>
        </div>
      </form>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { requestResetPassword }
)(Forgot);
