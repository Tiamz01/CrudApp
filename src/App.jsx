import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import AddEditPost from "./pages/AddEditPost";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

function App() {
	return (
		<div className='App'>
			<Header />
			<ToastContainer />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/details/:id' element={<Detail />} />
				<Route path='/create' element={<AddEditPost />} />
				<Route path='/updates/id' element={<AddEditPost />} />
				<Route path='/about' element={<About />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
