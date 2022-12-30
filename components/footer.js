import Link from "next/link";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="row clearfix">
					<div className="col-sm-12">
						<div className="footer-sec clearfix">
							<div className="footerCol footerCol-start">
								<div className="footerLogo">
									<img
										src="images/codeclouds_colour.svg"
										width="205"
										height="51"
										alt="codeclouds footer logo"
									/>
								</div>
								<div className="footer-cell-cnt">
									<p>
										With a brilliant team of 500+ experts,
										CodeClouds provides effective solutions
										for various technologies.
									</p>
								</div>
								<ul className="footerPartners new-footerPartners">
									<li>
										<img
											src="images/iso-9001-2015.svg"
											height="40"
											width="40"
											alt="CodeClouds is ISO certified for quality management"
										/>
									</li>
									<li>
										<img
											src="images/nasscom_member.svg"
											height="50"
											width="23"
											alt="CodeClouds is a member of Nasscom"
										/>
									</li>
									<li>
										<img
											src="images/cii-2020.svg"
											height="40"
											width="23"
											alt="CodeClouds is a member of the Confederation of Indian Industry"
										/>
									</li>
									<li>
										<img
											src="images/duns-registered-2020.svg"
											height="40"
											width="34"
											alt="CodeClouds is Dun and Bradstreet registered"
										/>
									</li>
								</ul>
							</div>
							<div className="footerCol footerCol1">
								<div className="footer-widget-title menu-title mb-2">
									Our Solutions
								</div>
								<ul className="footer-widget-list desk">
									<li>
										<a href="https://www.codeclouds.com/creative-design/">
											Creative Design
										</a>
									</li>
									<li>
										<a href="https://www.codeclouds.com/web-development/">
											Web Development
										</a>
									</li>
									<li>
										<a href="https://www.codeclouds.com/cms/">
											eCommerce Development
										</a>
									</li>
									<li>
										<a href="https://www.codeclouds.com/consulting/">
											Specialist CRM Consultants
										</a>
									</li>
								</ul>
								<div className="d-flex justify-content-between footer-widget-list w-100">
									<ul className="mob">
										<li>
											<a href="https://www.codeclouds.com/creative-design/">
												Creative Design
											</a>
										</li>
										<li>
											<a href="https://www.codeclouds.com/cms/">
												eCommerce Development
											</a>
										</li>
									</ul>
									<ul className="mob">
										<li>
											<a href="https://www.codeclouds.com/web-development/">
												Web Development
											</a>
										</li>
										<li>
											<a href="https://www.codeclouds.com/consulting/">
												Specialist CRM Consultants
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="footerCol footerCol2">
								<div className="footer-widget-title menu-title mb-2">
									Our Products
								</div>
								<ul className="footer-widget-list">
									<li>
										<a href="https://www.codeclouds.com/hire-developers/">
											Unify Checkout
										</a>
									</li>
									<li>
										<a href="https://www.codeclouds.com/hire/web-development-experts/">
											Unify Wordpress
										</a>
									</li>
									<li>
										<a href="https://www.codeclouds.com/hire/laravel-developers/">
											Unify CMS
										</a>
									</li>
									<li>
										<a href="https://www.codeclouds.com/hire/front-end-developers/">
											Unify Mobile
										</a>
									</li>
								</ul>
							</div>
							<div className="footerCol footerCol3">
								<div className="footer-widget-title menu-title mb-2">
									Explore
								</div>
								<ul className="footer-widget-list desk">
									<li>
										<a href="https://www.codeclouds.com/blog/">
											Blog
										</a>
									</li>
									<li>
										<a
											href="https://www.codeclouds.com/portfolio/"
											rel="nofollow"
										>
											Portfolio
										</a>
									</li>
									<li>
										<a href="https://www.codeclouds.com/reviews/">
											Reviews
										</a>
									</li>
									<li>
										<a href="https://www.codeclouds.com/jobs/">
											Jobs
										</a>
									</li>
								</ul>
								<div className="d-flex justify-content-between footer-widget-list w-100">
									<ul className="mob">
										<li>
											<a href="https://www.codeclouds.com/blog/">
												Blog
											</a>
										</li>
										<li>
											<a
												href="https://www.codeclouds.com/portfolio/"
												rel="nofollow"
											>
												Portfolio
											</a>
										</li>
									</ul>
									<ul className="mob">
										<li>
											<a href="https://www.codeclouds.com/reviews/">
												Reviews
											</a>
										</li>
										<li>
											<a href="https://www.codeclouds.com/jobs/">
												Jobs
											</a>
										</li>
									</ul>
								</div>
							</div>

							<div className="footerCol footerCol-last">
								<div className="desk">
									<div className="footer-widget-title mb-2">
										Locations
									</div>
									<div className="cc-new-footer-location">
										<ul>
											<li>
												<a
													href="https://g.page/CODECLOUDS-INDIA?gm"
													rel="nofollow"
													target="_blank"
												>
													<img
														src="images/cc-flag-ind.svg"
														alt="flag India"
													/>
												</a>
											</li>
											<li>
												<a
													href="https://g.page/CODECLOUDS-NZ?gm"
													rel="nofollow"
													target="_blank"
												>
													<img
														src="images/cc-flag-nz.svg"
														alt=" flag NZ"
													/>
												</a>
											</li>
											<li>
												<a
													href="https://g.page/codeclouds-australia?gm"
													rel="nofollow"
													target="_blank"
												>
													<img
														src="images/cc-flag-aus.svg"
														alt="flag AUS"
													/>
												</a>
											</li>
											<li>
												<a
													href="https://g.page/CODECLOUDS?gm"
													rel="nofollow"
													target="_blank"
												>
													<img
														src="images/cc-flag-us.svg"
														alt="flag Us"
													/>
												</a>
											</li>
										</ul>
									</div>
									<div className="footer-widget-title mb-2">
										Follow Us
									</div>
									<ul className="mediaList">
										<li>
											<a
												href="https://www.facebook.com/codeclouds.it.solutions/"
												target="_blank"
												rel="me"
											>
												<img
													src="images/fb.svg"
													height="15"
													width="15"
													alt="Like us on facebook"
												/>
											</a>
										</li>
										<li>
											<a
												href="https://twitter.com/codeclouds"
												target="_blank"
												rel="me"
											>
												<img
													src="images/twitter.svg"
													height="15"
													width="15"
													alt="share on twitter"
												/>
											</a>
										</li>
										<li>
											<a
												href="https://www.linkedin.com/company/codeclouds/"
												target="_blank"
												rel="me"
											>
												<img
													src="images/linkedin.svg"
													height="15"
													width="15"
													alt="share on linkedin"
												/>
											</a>
										</li>
										<li>
											<a
												href="https://www.youtube.com/user/codeclouds"
												rel="me"
												target="_blank"
											>
												<img
													src="images/youtube.svg"
													height="15"
													width="15"
													alt="Subscribe us on youtube"
												/>
											</a>
										</li>
										<li>
											<a
												href="https://www.glassdoor.co.in/Overview/Working-at-CodeClouds-EI_IE332786.11,21.htm"
												target="_blank"
												rel="me"
											>
												<img
													src="images/glassdoor-glyph.svg"
													alt="share on glassdor"
													height="15"
													width="15"
												/>
											</a>
										</li>
										<li>
											<a
												href="https://www.upwork.com/ag/codeclouds/"
												target="_blank"
												rel="me"
											>
												<img
													src="images/upwork-glyph.svg"
													height="15"
													width="15"
													alt="share on upwork"
												/>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="lastCell">
				<div className="container">
					<div className="row clearfix">
						<div className="col-sm-4">
							<p>
								Made with <ion-icon name="heart"></ion-icon> at
								CodeClouds.
							</p>
						</div>
						<div className="col-sm-4">
							<div className="cc-footer-copyright text-left">
								<p>
									Copyright © 2022 CodeClouds. All Rights
									Reserved.
								</p>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="cc-footer-listing">
								<ul>
									<li>
										<a
											href="/privacy-policy/"
											rel="nofollow"
										>
											Privacy Policy
										</a>
									</li>
									<li>|</li>
									<li>
										<Link href="/contact">Contact Us</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
