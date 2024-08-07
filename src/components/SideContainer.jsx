/* eslint-disable react/prop-types */
function SideContainer({ children }) {
	return (
		<div className="flex w-full min-w-72 max-w-lg flex-col items-center gap-8">
			{children}
		</div>
	);
}

export { SideContainer };
