import { useEffect, useState } from "react";

export default function Home({ users }) {
	return (
		<div>
			<table>
				<tbody>
					{users.map((user, index) => (
						<tr key={index}>
							<td>{user.name}</td>
							<td>{user.username}</td>
							<td>{user.email}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
export async function getServerSideProps() {
	const data = await fetch("https://jsonplaceholder.typicode.com/users");
	const users = await data.json();
	return { props: { users } };
}
