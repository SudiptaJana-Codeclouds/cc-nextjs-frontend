export default function Review({review}) {

	return (
		<>
			<div className="col-md-4">
				<div className="feedback_box">
					<div className="d-flex justify-content-between">
						<p className="name">{review.attributes.name}</p>
						<img
							src="images/Assets/Group 1859.png"
							width="26"
							height="26"
						/>
					</div>
					<ul className="d-flex ratings">
						<li>
							<ion-icon name="star"></ion-icon>
						</li>
						<li>
							<ion-icon name="star"></ion-icon>
						</li>
						<li>
							<ion-icon name="star"></ion-icon>
						</li>
						<li>
							<ion-icon name="star"></ion-icon>
						</li>
						<li>
							<ion-icon name="star"></ion-icon>
						</li>
					</ul>
					<p className="mt-3">{review.attributes.description}</p>
				</div>
			</div>
		</>
	);
}