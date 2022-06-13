import React from 'react';
import '../App.css'

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
    
    };


      resetForm(){
        this.setState({nom: '', email: '', objet: '', message: ''})
      }
      
    render() {
      const { nom } = this.state;
      const { email } = this.state;
      const { objet } = this.state;
      const { message } = this.state;


      return(
        <div class="h-screen bg-[#ececec] pt-12">
        <div class="flex">
            <div class="w-1/2 ml-20 mt-8 mr-8"> 
            <p class="text-center font-bold text-[28px] pb-6">Contactez nous</p>
          <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
            
            <div class="mb-3 pt-0">
                <textarea
                    required
                    placeholder="Nom"
                    type="text"
                    class="m-2 form-flex-1 appearance-none border border-[#dcbb92] w-full py-2 px-4 bg-white text-[#dcbb92] placeholder-[#dcbb92] rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#dcbb92] focus:border-transparent" 
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
                        data-type="email"   
                        type="email"  
                        placeholder="E-mail"       
                        name="email"
                        value={email}
                        class="m-2 form-flex-1 appearance-none border border-[#dcbb92] w-full py-2 px-4 bg-white text-[#dcbb92] placeholder-[#dcbb92] rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#dcbb92] focus:border-transparent" 
                                                onChange={e => this.setState({
                          email: e.target.value
                        })}
                      />
            </div>
            
            <div class="mb-3 pt-0">
            <textarea
                        required
                        data-type="objet"   
                        type="objet"
                        placeholder="Objet"         
                        name="objet"
                        value={objet}
                        class="m-2 form-flex-1 appearance-none border border-[#dcbb92] w-full py-2 px-4 bg-white text-[#dcbb92] placeholder-[#dcbb92] rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#dcbb92] focus:border-transparent" 
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
            <button type="submit" class="ml-48 justify-center py-2 px-4 bg-[#dcbb92] text-white w-1/2 duration-200 text-center font-semibold rounded-lg ">Envoyer</button>
            </div>
          </form>
          </div>
          <div class="rounded-xl bg-[#fff] w-1/3 p-6">         
                <div>
                    <p class="font-bold text-center text-xl"> Notre adresse </p>
                    <p class="text-center"> 13 avenue des Sciences </p>
                    <p class="text-center"> 91190 Gif-Sur-Yvette</p>
                    <p class="font-bold text-center text-xl">Appelez nous </p>
                    <p class="text-center mb-4"> +33 1 01 01 01 01</p>
                    <div class="flex justify-center ">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.7113352753418!2d2.1686606514238176!3d48.710998118925346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67f538f1df01d%3A0xe5d2ea29a4e0ceb!2sIUT%20d&#39;Orsay!5e0!3m2!1sfr!2sfr!4v1652610451161!5m2!1sfr!2sfr" width="400" height="300" class="w-full b-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>  
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
