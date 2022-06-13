import React from 'react';
import '../App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Formulaire extends React.Component {

  state = {
    nom: '',
    email: '',
    objet: '',
    message: ''
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");

    var mailHeaders = new Headers();
    mailHeaders.append("cache-control", "no-cache");
    mailHeaders.append("content-type", "application/json");
    mailHeaders.append("x-apikey", "62a1b0851a51777906aff8ad");

    const { nom } = this.state;
    const { email } = this.state;
    const { objet } = this.state;
    const { message } = this.state;


    fetch("https://dbhotel-bb79.restdb.io/mail", {
      method: 'POST',
      headers: mailHeaders,
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify({
        "to": "reactjshotel@yopmail.com",
        "subject": JSON.stringify(objet),
        "html": JSON.stringify(message),
        "company": JSON.stringify(nom),
        "sendername": JSON.stringify(email)
      })
    })

      .then(
        (error) => {
          console.log(error)
        }
      )

    this.resetForm();
    this.notif();

  };


  resetForm() {
    this.setState({ nom: '', email: '', objet: '', message: '' })
  }

  notif() {
    toast.success("Votre message a bien été envoyé !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }





  render() {
    const { nom } = this.state;
    const { email } = this.state;
    const { objet } = this.state;
    const { message } = this.state;


    return (

      <div class="h-screen bg-[#ececec] pt-12">
        <div class="flex">
          <div class="w-1/2 ml-20 mt-8 mr-8">
            <p class="text-center text-[28px] pb-6 font-bold">Contactez nous</p>
            <form id="contact-form" onSubmit={this.handleSubmit} method="POST">

              <div class="mb-3 pt-0">
                <textarea
                  required
                  rows={1}
                  placeholder="Nom"
                  type="text"
                  class="resize-none m-2 form-flex-1 appearance-none border border-[#dcbb92] w-full py-2 px-4 bg-white text-[#dcbb92] placeholder-[#dcbb92] rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#dcbb92] focus:border-transparent"
                  name="nom"
                  value={nom}
                  onChange={e => this.setState({
                    nom: e.target.value
                  })}
                />
              </div>


              <div class="mb-3 pt-0">
                <textarea

                  required
                  rows={1}
                  data-type="email"
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  value={email}
                  class="resize-none m-2 form-flex-1 appearance-none border border-[#dcbb92] w-full py-2 px-4 bg-white text-[#dcbb92] placeholder-[#dcbb92] rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#dcbb92] focus:border-transparent"
                  onChange={e => this.setState({
                    email: e.target.value
                  })}
                />
              </div>

              <div class="mb-3 pt-0">
                <textarea
                  required
                  rows={1}
                  data-type="objet"
                  type="objet"
                  placeholder="Objet"
                  name="objet"
                  value={objet}
                  class="resize-none m-2 form-flex-1 appearance-none border border-[#dcbb92] w-full py-2 px-4 bg-white text-[#dcbb92] placeholder-[#dcbb92] rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#dcbb92] focus:border-transparent"
                  onChange={e => this.setState({
                    objet: e.target.value
                  })}
                />
              </div>

              <div class="mb-3 pt-0">
                <textarea class="m-2 form-flex-1 appearance-none border border-[#dcbb92] w-full py-2 px-4 bg-white text-[#dcbb92] placeholder-[#dcbb92] rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#dcbb92] focus:border-transparent"
                  rows="5"
                  name="message"
                  value={message}
                  onChange={e => this.setState({
                    message: e.target.value
                  })}
                  placeholder="Message" />

              </div >
              <div class="mb-3 pt-0">
                <button type="submit" class="ml-44 justify-center py-2 px-4 bg-[#dcbb92] text-white w-1/2 duration-200 text-center font-semibold rounded-lg ">Envoyer</button>
              </div>
              <ToastContainer />
            </form>
          </div>
          <div class="rounded-xl bg-[#fff] w-1/3 p-6">
            <div>
              <p class="font-bold text-center text-xl"> Notre adresse </p>
              <p class="text-center"> Route de Ceinture</p>
              <p class="text-center"> Bora Bora</p>
              <p class="font-bold text-center text-xl mt-4">Appelez nous </p>
              <p class="text-center mb-8"> +33 1 01 01 01 01</p>
              <div class="flex justify-center ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45692.45748298493!2d-151.7461533791801!3d-16.490604133537055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76bda2ce24449a97%3A0x1fdfb5a65311c3b8!2sHotel%20Royal%20Bora%20Bora!5e0!3m2!1sfr!2sfr!4v1655149554121!5m2!1sfr!2sfr" width="400" height="300" class="w-full b-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }

  // onNameChange(event) {
  //   this.setState({nom: event.target.value})
  // }

  // onEmailChange(event) {
  //   this.setState({email: event.target.value})
  // }

  // onObjetChange(event) {
  //     this.setState({objet: event.target.value})
  // }

  // onMessageChange(event) {
  //   this.setState({message: event.target.value})
  // }

  // handleSubmit(event) {
  // }
}

export default Formulaire;
