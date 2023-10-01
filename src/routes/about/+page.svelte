<svelte:head>
	<title>About | henrygrant.dev</title>

	<meta property="og:site_name" content="henrygrant.dev" />
	<meta property="og:title" content="About" />
	<meta property="og:description" content="About Henry Grant" />
</svelte:head>

<div class="container">
	<h1>About</h1>
	<section>
		<p>
			I moved to New York City in 2022 and currently reside in Greenpoint. I'm into riding bikes,
			running, woodworking, and building software. I volunteer for
			<a href="https://nycbikeandbrew.com/">NYC Bike + Brew</a>, a group that takes people on bike
			rides to breweries or other interesting places in around NYC.
		</p>
		<p>
			I love building things, and I love hanging out with other people who love building things. If
			you're in the NYC area, <a href="mailto:me@henrygrant.dev">drop me a line</a>. I'd love to
			hear about what you're working on.
		</p>
	</section>
	<section>
		<h2>Current Projects</h2>
		<p>
			My main grind is brownfielding-turned-rewriting a couple of legacy native mobile applications
			into one React Native application for Ally. I also write a lot of tooling and automation for
			the the Core Mobile team, as well some tools for the enterprise at large.
		</p>
		<p>
			I also work on <a href="https://github.com/henrygrant/ridemapper-svelte">Ridemapper</a> in my free
			time, an application that takes your data from Strava and draws it on a customizable, shareable
			map. I add features to this when I have time, though if you're interested in contributing I'd love
			to have you!
		</p>
		<p>
			This site uses some of the code/data from Ridemapper. You can see the background of this site
			is a map of NYC. The lines on top of the map are all the places I've biked or ran since I
			moved here in 2022. It gets updated as I add more activities to Strava.
		</p>
		<p>
			The next project I have on my mind is a mobile app that will capture run/ride data witout the
			need for Strava. I've learned a lot about mobile dev in the last year or two and want to put
			that to use.
		</p>
	</section>
	<section>
		<h2>Professional History</h2>
		<div class="timeline">
			<div>2017-2020</div>
			<div>
				<p>
					At my first real gig I worked on a large Python/MySQL application with a AngularJS
					frontend on a fairly small team. We did a good amount of reporting and data visualization
					stuff, and the app ran on Digital Ocean VMs with the deployment scripts and cronjobs were
					hand-written in bash.
				</p>
				<p>
					If I were to still work on this app today, there's a <i>number</i> of things i'd do differently,
					but I got a ton of experience from it. I wrote a ton of bad Javascript, then good Javascript,
					and later some good Typescript. I learned the whole CSS spec, wrote build steps to support
					preprocessors, wrote basic CI/CD pipelines to minify and test our code before deployment, etc.
				</p>
				<p>
					I did a fair amount of backend work here as well. Our frontend was a dumpster fire and we
					knew it, but we took pride in the setup of the database and the Python app. I got really
					slick at writing SQL queries for reporting and data visualization to for the higher-ups,
					writing bash to automate stuff on my machine and on the server, and writing Python scripts
					to do the same thing when the bash scripts got too wild. I used Jupyter, Pandas, and Numpy
					to make pretty graphs.
				</p>
				<p>
					We also all ran Debian on our machines, so I was basically forced to learn how to do
					things the "hard" (correct) way. Tools like git, ssh, curl, etc are all etched into my
					brain and I still use them <i>all the time</i>.
				</p>
				<p>
					I didn't really realize it then, but these skills would stay in my toolkit for the rest of
					my career. Without this job, I don't think I'd be nearly as well-rounded as I am now, and
					I don't think i'd have developed my love of devops and infrastructure that a lot of
					younger developers today have big knowledge gaps on.
				</p>
			</div>
		</div>
		<hr />
		<div class="timeline">
			<div>2020-2021</div>
			<div>
				<p>
					In early 2020 I moved states and wanted to try something new. I found a company that had
					an existing application that managed inventory and ordering for businesses in the "home
					renovation" space. Think of a "Sally's Showroom" that you go to to pick out everything
					you're going to put in your new bathroom, from the tub and toilet to the tiles and cabinet
					handles.
				</p>
				<p>
					The company was looking to expand into doing ecommerce for these businesses, and I was
					hired to build the front end along side a backend dev who was brought on to build out any
					endpoints we needed that didn't already exist to support this effort. During the interview
					process, I pitched a "how I'd do it" to the CEO and CTO, which was a Vue/NuxtJS setup that
					could serve a site per client with a shared codebase for the core functionality. They
					liked it, and I was hired.
				</p>
				<p>
					This was a fun experience, as I was given the freedom to build out something from scratch.
					I really loved working on making tools and automation for my team to be able to work
					faster and more efficiently. Despite it being a front end project, those tools and
					deployment configuration for a "backend for the frontend" setup like Nuxt scratched the my
					itch for doing automation/tooling/devops work. I learned a lot on this project, managed a
					team for the first time, and got to work with more modern web tools that I'd been yearning
					for at my last job. This was also the first time I got to get to use a bunch of new cloud
					services (GCP) for something bigger than just a side project. for
				</p>
			</div>
		</div>
		<hr />
		<div class="timeline">
			<div>2021-2022</div>
			<div>
				<p>
					In 2021 I accepted an offer at Ally on the "Startup" team, a team that had been formed to
					try out new technologies or organization patterns that the company didn't generally use.
					In this case, we were one of Ally's first full stack teams, and we were tasked with
					building a complete feature, from the database to the api to the web and mobile front end.
				</p>
				<p>
					I gravitated toward the infrastructure and devops side of things at first, at Ally uses
					Terraform for all of it's cloud infrastructure, and I was excited to get to use it in a
					production setting. They also had somewhat recently adopted Gitlab CI/CD which I had
					experience with from my previous role, so I ended up writing all of the CI/CD pipelines
					for the team.
				</p>
				<p>
					After much of the devops legwork had been completeted for the team, I started to work
					primarily on mobile side of things. No one on the team had much experience with Android or
					iOS dev, and we were tasked with brownfielding React Native to see if it could be a viable
					option for Ally. This task was particularly challenging as, at least in the beginning, we
					were told to have as minimal of an impact on the existing codebase/native developers as
					possible. We had to write a ton of tooling to pull this off, and dive really deep into the
					React Native source code as what we were trying to do didn't have a lot of documentation
					or examples.
				</p>
			</div>
		</div>
		<hr />
		<div class="timeline">
			<div>2022-Today</div>
			<div>
				<p>
					At the end of 2021, we demoed our React Native pilot to some other folks in the company
					and got the go-ahead to start working on the "Mobile Reimagined" project. I move to the
					Core Mobile team to work on this, and we've been working on it ever since. The previous
					feature was chosen because it didn't interact with much of the rest of the application,
					but this project involves rewriting a number of existing features, integrating with the
					features we aren't rewriting yet, and creating a seamless experience between the native
					and React Native parts of the app.
				</p>
				<p>
					This project has certainly been the most challenging of my career. Us on the Core team are
					supporting 4 feature teams doing the UI work while we work on the core integration,
					establish patterns, and solve tough problems that come up. It's been a lot of fun,
					frustrating at times, but I'm really proud of the work we've done so far.
				</p>
				<p>
					Additionally, there has been a ton of devex/devops work to do as we have drastically
					changed how the app is built and how folks work on it. I've spent a lot of time working on
					the pipelines and tooling for the other devs, and was promoted to Mobile Devops lead in
					the middle of 2023 and manage that team and their priorities. Currently I'm wearing
					multiple hats, as I stil spend a lot of my time on the core integration, but I am grateful
					to have an excellent group of developers around me. I look forward to shipping this at the
					end of 2023.
				</p>
			</div>
		</div>
	</section>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		text-align: justify;
		max-width: 800px;
		overflow-y: auto;
		margin: 0 auto 5rem;
	}
	h2 {
		margin: 0;
	}
	.timeline {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	section:not(:last-child) {
		margin-bottom: 1rem;
	}
</style>
