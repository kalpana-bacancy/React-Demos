import classes from './Auth.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { authActions } from '../store/auth';
import { useRef } from 'react';

const Auth = () => {
  const dispatch = useDispatch();
  const email = useRef('email');
  const password = useRef('password');
  const onLoginHandler = (event) => {
    event.preventDefault();
    if(email.current.value.length > 0 && password.current.value.length ) {
      dispatch(authActions.login());
    }    
  }
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={email} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={password} />
          </div>
          <button onClick={onLoginHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
