const Footer = () => {
	return (
		<footer className="bg-surface-container-lowest border-t border-surface-dim mt-auto">
			<div className="max-w-[1280px] mx-auto px-4 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between">
				<p className="text-sm text-tertiary font-body">&copy; 2026 Cafe 203</p>
				<div className="flex gap-4 mt-4 md:mt-0">
					<span className="text-sm text-tertiary hover:text-primary cursor-pointer transition-colors">
						Privacy
					</span>
					<span className="text-sm text-tertiary hover:text-primary cursor-pointer transition-colors">
						Terms
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
