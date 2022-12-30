import Image from "next/image";

export default function TrustedBusinessSection() {
	return (
		<section className="trusted_business">
			<div className="container">
				<div className="trusted_head">
					Trusted by business and partners world-wide
				</div>
				<ul>
					<li>
						<Image
							src="/images/Assets/Trusted Businesses/worthy-flavors.png"
							width="138"
							height="77"
							alt="worthy-flavors"
						/>
					</li>
					<li>
						<Image
							src="/images/Assets/Trusted Businesses/prowriter.png"
							width="138"
							height="77"
							alt="prowriter"
						/>
					</li>
					<li>
						<Image
							src="/images/Assets/Trusted Businesses/puppy-dogs-icecream.png"
							width="138"
							height="77"
							alt="puppy-dogs-icecream"
						/>
					</li>
					<li>
						<Image
							src="/images/Assets/Trusted Businesses/aid-of-indiana.png"
							width="138"
							height="77"
							alt="aid-of-indiana"
						/>
					</li>
					<li>
						<Image
							src="/images/Assets/Trusted Businesses/chateau-divoire.svg"
							width="138"
							height="77"
							alt="chateau-divoire"
						/>
					</li>
					<li>
						<Image
							src="/images/Assets/Trusted Businesses/netreputation-full-logo.svg"
							width="138"
							height="77"
							alt="netreputation-full-logo"
						/>
					</li>
				</ul>
			</div>
		</section>
	);
}
