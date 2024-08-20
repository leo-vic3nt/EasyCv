function Header({ cvData, cvFont }) {
	const { fullName, phoneNumber, location, email, github, linkedin } = cvData;

	return (
		<div className="flex flex-col items-center gap-3">
			<h1 className="font-semibold text-4xl">{fullName}</h1>

			<div className="flex gap-3">
				<p>{phoneNumber}</p>
				<p className="border-black border-l-2 pl-2">{email}</p>
				<p className="border-black border-l-2 pl-2">{location}</p>
			</div>

			<div>
				<p>{github}</p>
				<p>{linkedin}</p>
			</div>
		</div>
	);
}

export { Header };
