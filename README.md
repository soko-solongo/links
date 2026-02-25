<h1>MPS CD | Project 4: Links </h1>

<h2>Overview</h2>

<p>This project is a dynamic, API-driven web experience exploring the philosophy of "clutter" by transforming live data from the Are.na API into a functional, maximalist interface.</p>

<p>The content has been collected by the designer, <a href: https://k881-droid.github.io/>Kinza Ghanchi</a>, on Are.na platform, and designed and coded by me (Soko Mungunsukh).</p>

<h2>Technical & Design Highlights</h2>

<p> Data is pulled in real-time from the Are.na channel "Clutter is Design". The site categorizes blocks into Visuals, Notes, Links, Embeds, and Files.</p>
<p><strong>API Integration:</strong> Uses a recursive `fetchJson` function and a `renderBlock` function to generate HTML for different media types.</p>
<p><strong>Intersection Observer:</strong> Watches `li` elements and applies a `.rotate` class as they enter the viewport to trigger "back-to-place" animations on JavaScript</p>
<p><strong>CSS Architecture:</strong> Employs CSS Nesting, variables for fluid scaling (`--spacing`), and `clip-path` for custom geometric shapes.</p>
<p><strong>Filtering System:</strong> A sticky navigation bar toggles the `.active` class on sections to filter content without page reloads.</p>

<h3>About me</h3>

Soko Mungunsukh is a graduate student in the MPS Communication Design program at The New School | Parsons School of Design.
