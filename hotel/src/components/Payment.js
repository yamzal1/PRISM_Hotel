import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const MyCards = () => {
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
			<Cards
				cvc={data.cvc}
				expiry={data.expiry}
				focus={data.focus}
				name={data.name}
				number={data.number}
			/>
			<form action="">
                <input
					type="number"
					name="number"
					placeholder="Card Number"
					onChange={handleInputChange}
				/>
				<input
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