import Image from "next/image";
import Link from "next/link";

export default function Header({ children, home }) {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav">
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<Image
						priority
						src="/images/Assets/Group 1064.png"
						className="navBarWhiteShow"
						height={100}
						width={100}
						alt="bar"
					/>
				</button>
				<Link className="navbar-brand" href="/">
					<Image
						priority
						src="/images/Assets/codeclouds-white-tm.svg"
						className="whiteLogo"
						height={50}
						width={235}
						alt="CodeClouds Logo"
					/>
					{/* <Image
						priority
						src="/images/Assets/CodeClouds_Logo_Full_Colour.svg"
						className="colorLogo"
						height={50}
						width={235}
						alt="CodeClouds Color Logo"
					/> */}
				</Link>

				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav justify-content-end w-100">
						<li className="nav-item">
							<a
								className="nav-link"
								aria-current="page"
								href="https://www.codeclouds.com/services/"
							>
								Services
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link"
								href="https://www.codeclouds.com/products/"
							>
								Products
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link"
								href="https://www.codeclouds.com/"
							>
								Company
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link"
								href="https://www.codeclouds.com/portfolio/"
							>
								Portfolio
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link"
								href="https://www.codeclouds.com/blog/"
							>
								Blog
							</a>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href="/contact">
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
