import type { NextPage } from "next";
import Header from "../components/Header";
import Credits from "../components/Credits";
import OldWay from "../components/OldWay";
import NewWay from "../components/NewWay";
import Experiment from "../components/Experiment";
import Quiz from "../components/Quiz";
import Footer from "../components/Footer";

const Home: NextPage = () => {
	return (
		<>
			<Header />
			<Credits />
			<OldWay />
			<NewWay />
			<Experiment />
			<Quiz />
			<Footer />
		</>
	);
};

export default Home;
