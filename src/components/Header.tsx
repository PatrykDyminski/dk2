export default function Header() {
	return (
		<div class="font-roboto">
			<header class="flex text-lg sm:text-2xl md:text-4xl justify-center text-center py-2 md:py-5">
				<a href='/'>
					<h1>Droga Królów</h1>
				</a>
			</header>
			<nav>
				<ul class="flex justify-evenly items-center border-4 border-black">
					<li>
						<a href="/">
							<h3 class="no-underline p-2 m-2 text-lg lg:text-xl tracking-wider hover:text-green">Dom</h3>
						</a>
					</li>
					<li>
						<a href="/blog">
							<h3 class="no-underline p-2 m-2 text-lg lg:text-xl tracking-wider hover:text-green">Blog</h3>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}