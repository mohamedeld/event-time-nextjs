import { useContext, useRef } from 'react';
import classes from './newsletter-registration.module.css';
import NotificationContext from '@/store/notificationContext';

function NewsletterRegistration() {
  const notificationCtx = useContext(NotificationContext);
  const emailInputRef = useRef();
  
  function registrationHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    notificationCtx.showNotification({
      title:'Signing up...',
      message:'Registering for newsletter',
      status:'pending'
    })
    fetch('/api/newsletter',{
      method:'POST',
      body:JSON.stringify({email:enteredEmail}),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(response=> {
      if(response.ok){
       return response.json()
      }
      return response.json().then(data=>{
        throw new Error(data.message || 'Something went wrong');
      })
    }).then(data=> {
      notificationCtx.showNotification({
        title:'Success!',
        message:'Successfully registeration',
        status:'success'
      })
    }).catch(err=>{
      notificationCtx.showNotification({
        title:'Error!',
        message:'Something went wrong! '+err.message,
        status:'error'
      })
    })
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
