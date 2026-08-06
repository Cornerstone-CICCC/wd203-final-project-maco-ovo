import { Link } from "react-router";
import heroImg from "../assets/hero-img.jpg";

const Home = () => {
	return (
		<div
			className="relative flex flex-col items-center justify-center w-screen min-h-screen left-1/2 -translate-x-1/2 -mt-24 text-center px-4 overflow-hidden"
			style={{
				backgroundImage: `url(${heroImg})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-0 pointer-events-none"></div>

			<div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center mt-12">
				{/* Hero */}
				<h1 className="font-display text-5xl md:text-6xl text-on-background leading-tight mb-6">
					Your Perfect Coffee,
					<br />
					<span className="text-primary italic">Everyday.</span>
				</h1>

				{/* disc*/}
				<p className="font-body text-lg md:text-xl text-on-surface-variant mb-10 leading-relaxed max-w-lg">
					Enjoy delicious coffee made with care. Take a relaxing break and find
					your favorite drink with us.
				</p>

				<Link
					to="/items"
					className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-body font-semibold rounded-full transition-all hover:scale-[1.02] hover:shadow-glow"
				>
					Order Now 　→
				</Link>
			</div>
		</div>
	);
};

export default Home;
