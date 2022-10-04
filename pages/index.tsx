import type { NextPage } from "next"
import Head from "next/head"
import Feed from "../components/Feed"
import Sidebar from "../components/Sidebar"
import Widgets from "../components/Widgets"

const Home: NextPage = () => {
	return (
		<div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
			<Head>
				<title>Twitter Clone 2.0</title>
				<meta name="Twitter Clone 2.0" content="Clone for the Twitter page" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="grid grid-cols-9">
				{/* Sidebar */}
				<Sidebar/>

				{/* Feed */}
				<Feed/>

				{/* Widgets */}
				<Widgets/>
			</main>
		</div>
	)
}

export default Home
