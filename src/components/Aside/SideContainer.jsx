/* eslint-disable react/prop-types */
function SideContainer({ children }) {
	return (
		<>
			<style>
				{`
				.custom-scrollbar {
            scrollbar-color: #888 #f1f1f1;
			}`}
			</style>
			<div
				className="h-[29.7cm] pt-10 w-full min-w-72 max-w-lg overflow-auto custom-scrollbar pl-4"
				style={{ direction: "rtl" }}
			>
				<div
					className="flex w-full max-w-lg flex-col items-center gap-8 "
					style={{ direction: "ltr" }}
				>
					{children}
				</div>
			</div>
		</>
	);
}

export { SideContainer };
