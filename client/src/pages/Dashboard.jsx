import React, { useState, useEffect } from 'react';
//import jwt from 'jsonwebtoken';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
	const navigate = useNavigate()
	const [quote, setQuote] = useState('')
	const [tempQuote, setTempQuote] = useState('')

	async function populateQuote() {
		const req = await fetch('http://localhost:3001/api/quote', {
			headers: {
				'x-access-token': localStorage.getItem('token'),
			},
		})

        console.log("localStorage:" + localStorage.data)

		const data = await req.json()

        console.log("data:" + data.status)

		if (data.status === 'ok') {
			setQuote(data.quote)
		} else {
			alert(data.error)
		}
	}

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
            console.log("before decoded jwt : " + token);
            const decoded = jwt_decode(token);
            console.log("decoded jwt token: " + decoded);
			if (!decoded) {
				localStorage.removeItem('token')
                console.log("token removed");
				//navigate('/login')
			} else {
				populateQuote()
			} 
		}
	}, [])

	async function updateQuote(event) {
		event.preventDefault()

		const req = await fetch('http://localhost:3001/api/quote', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-access-token': localStorage.getItem('token'),
			},
			body: JSON.stringify({
				quote: tempQuote,
			}),
		})

		const data = await req.json()
		if (data.status === 'ok') {
			setQuote(tempQuote)
			setTempQuote('')
		} else {
			alert(data.error)
		}
	}

	return (
		<div>
			<h1>Your quote: {quote || 'No quote found'}</h1>
			<form onSubmit={updateQuote}>
				<input
					type="text"
					placeholder="Quote"
					value={tempQuote}
					onChange={(e) => setTempQuote(e.target.value)}
				/>
				<input type="submit" value="Update quote" />
			</form>
		</div>
	)
};

export default Dashboard;