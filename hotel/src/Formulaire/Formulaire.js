import React from 'react';
import axios from 'axios';
import '../App.css'

class Formulaire extends React.Component {
  handleSubmit() {
//     var formObj = ("#email_outbound-form").serializeObject();
//     var data = JSON.stringify(formObj);
 /*
    var request = require("request");

    var options = { method: 'POST',
      url: 'https://dbhotel-bb79.restdb.io/rest/email_outbound',
      headers: 
       { 'cache-control': 'no-cache',
         'x-apikey': '62a1b0851a51777906aff8ad',
         'content-type': 'application/json' },
      body: data,
      json: true };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      console.log(body);
    });
*/
    /*
    var formObj = ("#email_outbound-form").serializeObject();
    var data = JSON.stringify(formObj);


    var headers = new Headers();
    headers.append("cache-control", "no-cache");
    headers.append("x-apikey", "62a1b0851a51777906aff8ad");

    fetch("https://dbhotel-bb79.restdb.io/rest/email_outbound", {
        method: 'GET',
        headers: 
        { 'cache-control': 'no-cache',
          'x-apikey': '62a1b0851a51777906aff8ad',
          'content-type': 'application/json' },
          body: data,
        mode: 'cors',
        cache: 'default'
      })
      .then(res => res.json())
      .then(
        (result) => {

        },
        (error) => {
          console.log(error)
        }
    )
    */
    


    var mailHeaders = new Headers();
    mailHeaders.append("cache-control", "no-cache");
    mailHeaders.append("content-type", "application/json");
    mailHeaders.append("x-apikey", "62348bc0dced170e8c83a37c");

    fetch("https://pommedeterre-20df.restdb.io/mail", {
        method: 'POST',
        headers: mailHeaders,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify({
            "to": "yannisamzal@gmail.com",
            "subject": "Your end is near",
            "html": "Stuff",
            "company": "Popdot Consulting",
            "sendername": "Your worst ennemy"
        })
      })
      .then(
        (error) => {
          console.log(error)
        }
    )




  }

  render() {
    return (
      <div class="h-screen bg-[#cfcfcf] pt-12">

        <form role="form" id="email_outbound-form" onSubmit={this.handleSubmit}>

          <div class="form-group">
            <label>Objet : </label><input class="form-control" name="subject" data-type="text" type="text" required />
          </div>

          <div class="form-group">
            <label>Message :</label>
            <textarea wrap="hard" class="form-control" name="body" data-type="richtext" required></textarea>
          </div>

          <div class="form-group">
            <label>E-mail : </label><input class="form-control" name="to" data-type="email" type="email" required />
          </div>

          <div id="fg-errors" class="form-group">
          </div>
          <button class="btn btn-primary btn-lg" id="btn-submit" type="submit" data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Submitting...">Submit</button>
        </form>

      </div>
    );
  }


}

export default Formulaire;
