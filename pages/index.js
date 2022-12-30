import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import { useEffect, useState } from "react";
import axios from "axios";
import Reviews from "../components/reviews";
import Banner from "../components/banner";
import TrustedBusinessSection from "../components/sections/trusted-business-section";
import YourTeamSection from "../components/sections/your-team-section";
import ScheduleMeetingSection from "../components/sections/schedule-meeting-section";

export default function Home({ page, reviews }) {
	const [loaded, setLoaded] = useState(true);

	return (
		<Layout>
			<Head>
				<title>{page.data?.attributes?.seo.meta_title ?? 'Simple title'}</title>
				<meta name="description" content={page.data?.attributes?.seo.meta_description ?? 'Simple description'}></meta>
				<meta property="og:title" content={page.data?.attributes?.seo.meta_title ?? 'Simple title'} />
				<meta property="og:description" content={page.data?.attributes?.seo.meta_description ?? 'Simple description'} />
				<meta property="og:type" content="video.movie" />
				<meta property="og:url" content="/" />
				<meta property="og:image" content={"http://localhost:1337" + page.data?.attributes?.seo.meta_image.data.attributes.formats.large.url ?? "https://via.placeholder.com/1200x630"} />
			</Head>

			<Banner />

			<TrustedBusinessSection />

			<YourTeamSection />

			<Reviews reviews={reviews}/>

			<ScheduleMeetingSection />
		</Layout>
	);
}

export async function getServerSideProps() {
	const pageData = await fetch("http://localhost:1337/api/pages/1?populate[0]=seo&populate[1]=seo.meta_image&populate[2]=seo.meta_image.media");
	let page = await pageData.json();

	const reviewData = await fetch("http://localhost:1337/api/reviews?populate=*");
	let reviews = await reviewData.json();

	return { props: { page, reviews } };
}
