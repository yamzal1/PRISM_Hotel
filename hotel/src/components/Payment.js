import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
const MyCards = (props) => {
	
	const location = useLocation()
	const date = location.state.date.value.toString()
	const dateM = date.split(',')
	const dateDeb = dateM[0].split('2022')
	const dateFin = dateM[0].split('GMT')
	const [data, setData] = useState({
		cvc: "",
		expiry: "",
		name: "",
		number: ""
	});
	const handleInputChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value
		});
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
			<form action="">
                <input
					maxLength={16}
					type="number"
					name="number"
					placeholder="Card Number"
					onChange={handleInputChange}					
				/>
				<input
					maxLength={3}
					type="number"
					name="cvc"
					placeholder="CVC"
					onChange={handleInputChange}					
				/>
				<input
					type="month"   
					name="expiry"
					placeholder="Expire Date MM/YY"
					onChange={handleInputChange}
                    maxLength="5"
                    minLength="5"
				/>
				<input
					type="text"
					name="name"
					placeholder="Your Name"
					onChange={handleInputChange}
				/>
				<input
					type="email"
					name="email"
					placeholder="Your Email"
					pattern=".+@gmail.com"
					onChange={handleInputChange}
				/>
				<input
					type="text"
					name="address"
					placeholder="Your Address"
					onChange={handleInputChange}
				/>				
			</form>
		</div>
	);
};

export default MyCards;