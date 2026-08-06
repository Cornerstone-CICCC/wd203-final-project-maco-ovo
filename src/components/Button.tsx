export default function Button({ children }) {
	return (
		<button className="bg-primary text-on-primary font-sans font-semibold rounded px-6 py-3 transition-transform hover:scale-[1.02] shadow-[0_4px_12px_rgba(135,206,235,0.2)]">
			{children}
		</button>
	);
}
