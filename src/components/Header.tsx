export default function Header() {
	return (
		<div class="font-roboto">
			<header class="flex text-2xl sm:text-2xl md:text-4xl lg:text-5xl justify-center text-center py-2 md:py-5">
				<a href='/'>
        <h3 class="font-bold tracking-tighter">
            #DK.PL
          </h3>
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
          <li>
						<a href="/about">
							<h3 class="no-underline p-2 m-2 text-lg lg:text-xl tracking-wider hover:text-green">About</h3>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}