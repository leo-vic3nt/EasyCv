import clsx from "clsx";

function Header({ cvData, cvFont, cvAccentColor }) {
	const { fullName, phoneNumber, location, email, github, linkedin } = cvData;

	return (
		<div className="flex flex-col items-center gap-3">
			<h1
				style={{ color: cvAccentColor }}
				className={clsx(
					"font-semibold",
					cvFont === "font-serif" ? "text-5xl" : "text-4xl",
				)}
			>
				{fullName}
			</h1>

			{/* First row */}
			<div
				className={clsx("flex gap-3", cvFont === "font-serif" ? "text-lg" : "")}
			>
				<p>{phoneNumber}</p>
				<p className="border-black border-l-2 pl-2">{email}</p>
				<p className="border-black border-l-2 pl-2">{location}</p>
			</div>

			{/* Second row */}
			<div className="flex gap-5 text-center">
				<div className="flex items-center gap-1">
					<img
						src="/github-142-svgrepo-com.svg"
						alt="github icon"
						className="size-5"
					/>
					<p className="text-lg">{github}</p>
				</div>
				<div className="flex items-center gap-1">
					<img
						src="/linkedin-svgrepo-com.svg"
						alt="linkedin icon"
						className="size-5"
					/>

					<p className="text-lg">{linkedin}</p>
				</div>
			</div>
		</div>
	);
}

export { Header };
