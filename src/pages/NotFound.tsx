import { Link } from "react-router";

const NotFound = () => {
	return (
		<div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-12">
			<div className="bg-surface-container-lowest border border-tertiary-container/30 rounded-[2rem] p-10 md:p-16 max-w-lg w-full text-center shadow-sm transition-shadow duration-500 hover:shadow-glow">
				<div className="font-display text-primary text-7xl md:text-8xl mb-2 opacity-80 select-none">
					404
				</div>

				<h1 className="font-display text-3xl md:text-4xl text-on-background mb-12">
					Page Not Found
				</h1>

				<Link
					to="/"
					className="inline-flex items-center justify-center gap-3 w-full px-8 py-4 bg-primary text-white font-body font-semibold text-lg rounded-full transition-all hover:scale-[1.02] hover:shadow-glow active:scale-95"
				>
					Return to Home
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
