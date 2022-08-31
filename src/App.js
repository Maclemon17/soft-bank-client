import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/globalComp/Footer";
import Navbar from "./components/globalComp/Navbar";
import Home from "./components/pages/home/Home";
import SignIn from "./components/pages/signin/SignIn";
import SignUp from "./components/pages/signup/SignUp";




function App() {
	const [loggedIn, setLoggedIn] = useState(localStorage.getItem("authenticated"));
	console.log(loggedIn)
	return (
		<>
			<Navbar auth={loggedIn} />
			<Routes>
				<Route path="/" element={ <Home /> } />
				<Route path="/register" element={ <SignUp /> } />
				<Route path="/login" element={ <SignIn /> } />
				<Route path="/dashboard" element={ <Dashboard /> } />
			</Routes>
			<Footer />
			{/* <SignIn /> */}

		</>
	);
}

export default App;
