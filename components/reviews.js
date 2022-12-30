import React, { Component, useEffect, useState } from "react";
import Review from "./review";

export default function Reviews({reviews}) {
	return (
		<>
			<section className="client-review">
				<div className="container">
					<h3 className="client-head-title">
						Clients speak about us
					</h3>
					<div className="row mt-5 desk">
						{reviews.data?.map((review, i) => 
							<Review review={review} key={i}/>
						)}
					</div>
					<div className="text-center">
						<button className="btn dark-strok-btn">
							See more reviews
							<ion-icon
								name="arrow-forward-outline"
								role="img"
								className="md hydrated"
								aria-label="arrow forward outline"
							></ion-icon>
						</button>
					</div>
				</div>
			</section>
		</>
	);
}