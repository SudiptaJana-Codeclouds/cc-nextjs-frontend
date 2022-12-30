import Image from "next/image";

export default function YourTeamSection() {
	return (
		<section className="your_team">
			<div className="container">
				<div className="top_text">
					<h2 className="team_head">Your team, your way</h2>
					<p className="sub">
						With 13 years of experience helping businesses solve
						their development challenges, we’re confident we have
						the solutions that works best for you!
					</p>
				</div>
				<div className="row">
					<div className="col-lg-4">
						<div className="box">
							<div className="img_circle">
								<Image
									src="/images/Assets/build-team.svg"
									alt=""
									width={36}
									height={36}
								/>
							</div>
							<div className="text">
								<p>Build a Team</p>
								<p>
									Hire a developer or an entire team of
									experts to a deliver your project.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="box">
							<div className="img_circle">
								<Image
									src="/images/Assets/Group 1655.png"
									alt=""
									width={36}
									height={36}
								/>
							</div>
							<div className="text">
								<p>Augment Your Team</p>
								<p>
									Need extra resources? Our experts are ready
									to join your project anytime.{" "}
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="box">
							<div className="img_circle">
								<Image
									src="/images/Assets/business-time-solid.png"
									alt=""
									width={36}
									height={36}
								/>
							</div>
							<div className="text">
								<p>Timezone Matching *</p>
								<p>
									We work in your timezone with a minimum of 4
									hours overlap.
								</p>
							</div>
						</div>
						<p className="additional_cost">
							<span>*</span> Subject to additional cost
						</p>
					</div>
				</div>
				<div>
					<ul className="counts">
						<li>
							<div className="num">13+</div>
							<p>Years Experience</p>
						</li>
						<li>
							<div className="num">500 +</div>
							<p>Technology Experts</p>
						</li>
						<li>
							<div className="num">2300+</div>
							<p>Successful Projects</p>
						</li>
						<li>
							<div className="num">98%</div>
							<p>Client Satisfaction</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
