import { useContext, useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import NotificationContext from '@/store/notificationContext';

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments,setComments] = useState([]);
  const notificationCtx = useContext(NotificationContext);

  useEffect(()=>{
    if(showComments){
      fetch(`/api/comments/${eventId}`).then(response => response.json()).then(data=> {
        setComments(data.comments);
      })
    }
  },[showComments])
  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }
  
  function addCommentHandler(commentData) {
    // send data to API
    notificationCtx.showNotification({
      title:'Pending!',
      message:'comment is still adding',
      status:'pending'
    })
    fetch(`/api/comments/${eventId}`,{
      method:'POST',
      body:JSON.stringify(commentData),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(response => {
      if(response.ok){
        return response.json();
      }
      return response.json().then(data=>{
        throw new Error(data.message);
      })
    }).then(data=> {
      notificationCtx.showNotification({
        title:'Success!',
        message:'comment added successfully',
        status:'success'
      })
    }).catch(err=>{
      notificationCtx.showNotification({
        title:'Error!',
        message:'Something went wrong',
        status:'error'
      })
    })
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;
