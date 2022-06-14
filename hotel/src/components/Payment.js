import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { validEmail,validCard,validDateCard,validCrypto  } from "./Regex";

const MyCards = (props) => {
	
	const location = useLocation()
	const date = location.state.date.value.toString()
	const dateM = date.split(',')
	const dateDeb = dateM[0].split('2022')
	const dateFin = dateM[0].split('GMT')
	var validate = false
	const [data, setData] = useState({
		cvc: "",
		expiry: "",
		name: "",
		number: "",
		email: ""
	});
	const handleInputChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value
		});
		if (validCard.test(data.number) && validDateCard.test(data.expiry) && validEmail.test(data.email) && validCrypto.test(data.cvc)){
			console.log('Form right format');
			validate = true;
			console.log(validate);
		}

	};

	return (
		
		<div id="PaymentForm">
			<br></br>
			<Cards
				cvc={data.cvc}
				expiry={data.expiry}
				focus={data.focus}
				name={data.name}
				number={data.number}
			/>
			<form action="" className="form-card">
                <input
					maxLength={16}
					type="text"
					name="number"
					placeholder="Numéro de carte"
					onChange={handleInputChange}					
				/>
				<input
					maxLength={3}
					type="text"
					name="cvc"
					placeholder="Cryptogramme"
					onChange={handleInputChange}					
				/>
				<input
					type="month"   
					name="expiry"
					placeholder="Date d'expiration MM/YY"
					onChange={handleInputChange}
                    maxLength="5"
                    minLength="5"
				/>
				<input
					type="text"
					name="name"
					placeholder="Nom"
					onChange={handleInputChange}
				/>
				<input
					type="email"
					name="email"
					placeholder="Email"
					pattern=".+@gmail.com"
					onChange={handleInputChange}
				/>
				<input
					type="text"
					name="address"
					placeholder="Adresse"
					onChange={handleInputChange}
				/>				
			</form>
		</div>
	);
};

export const valideForm = MyCards.validate;

export default MyCards;