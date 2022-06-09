import React from 'react';
import '../App.css'


class Formulaire extends React.Component {

  state = {
    subject: '',
    message: '',
    sender: ''
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");

    var mailHeaders = new Headers();
          mailHeaders.append("cache-control", "no-cache");
          mailHeaders.append("content-type", "application/json");
          mailHeaders.append("x-apikey", "62a1b0851a51777906aff8ad");

    const { subject } = this.state;
    const { message } = this.state;
    const { sender } = this.state;


    fetch("https://dbhotel-bb79.restdb.io/mail", {
      method: 'POST',
      headers: mailHeaders,
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify({
          "to": "reactjshotel@yopmail.com",
          "subject": JSON.stringify(subject),
          "html": JSON.stringify(message),
          "company": "Popdot Consulting",
          "sendername": JSON.stringify(sender)
      })
    })
    .then(
      (error) => {
        console.log(error)
      }
  )

  };

  
  render() {
    const { subject } = this.state;
    const { message } = this.state;
    const { sender } = this.state;

    return (
      <div>
        <h1>Je deteste react</h1>
        <form onSubmit={this.handleSubmit}>
          
         



<div class="form-group">
    <label>Objet : </label>
    <textarea
            required
            type="text"
            name="subject"
            value={subject}
            onChange={e => this.setState({
              subject: e.target.value
            })}
          />
  </div>

  <div class="form-group">
    <label>Message :</label>
    <textarea
            required
            wrap="hard"
            data-type="richtext"            
            name="message"
            class="form-control"
            value={message}
            onChange={e => this.setState({
              message: e.target.value
            })}
          />
  </div>

  <div class="form-group">
    <label>E-mail : </label>
    <textarea
            required
            data-type="email"   
            type="email"         
            name="sender"
            class="form-control"
            value={sender}
            onChange={e => this.setState({
              sender: e.target.value
            })}
          />
  </div>

  <div id="fg-errors" class="form-group">
  </div>

          <br />
          <button class="btn btn-primary btn-lg" id="btn-submit" type="submit" data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Submitting...">Submit</button>
        </form>
      </div>

    );


  }

}

export default Formulaire;
