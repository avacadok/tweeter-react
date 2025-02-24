import React from 'react'; //optional

function TweetForm(){
  const placeholder = "What are you humming about?";
  const click = (event) => {
    event.preventDefault();
  }
  const submit = (event) => {
    event.preventDefault();
  }

  return (
    <section className="newtweet">
      <form method="post" action="/tweets" className="newtweet__form" onSubmit={submit}>
        <textarea className="form__textarea" name="text" placeholder={placeholder}></textarea>
        <input type="submit" value="Tweet" className="form__input" onClick={click}/>
        <span className="form__counter">140</span>
      </form>
    </section>
  );
}

export default TweetForm;