export async function GET() {
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
	<defs>
		<linearGradient id="parchment" x1="0" y1="0" x2="0" y2="1">
			<stop offset="0%" stop-color="#f5ecd7"/>
			<stop offset="100%" stop-color="#e8d9b3"/>
		</linearGradient>
		<radialGradient id="vignette" cx="50%" cy="50%" r="70%">
			<stop offset="55%" stop-color="rgba(0,0,0,0)"/>
			<stop offset="100%" stop-color="rgba(61,40,24,0.22)"/>
		</radialGradient>
		<filter id="rough">
			<feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3"/>
			<feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.30  0 0 0 0 0.15  0 0 0 0.08 0"/>
			<feComposite in2="SourceGraphic" operator="in"/>
		</filter>
	</defs>

	<rect width="1200" height="630" fill="url(#parchment)"/>
	<rect width="1200" height="630" fill="url(#vignette)"/>
	<rect width="1200" height="630" filter="url(#rough)"/>

	<!-- Outer dashed border -->
	<rect x="40" y="40" width="1120" height="550" fill="none" stroke="#3d2818" stroke-width="4" stroke-dasharray="14 8"/>
	<rect x="58" y="58" width="1084" height="514" fill="none" stroke="#6b4a2e" stroke-width="1"/>

	<!-- EFTERLYSES eyebrow -->
	<text x="600" y="135" font-family="Georgia, 'Times New Roman', serif" font-size="36" font-style="italic" fill="#a8302a" text-anchor="middle" letter-spacing="6" font-weight="600">— Efterlyses —</text>

	<!-- Main title -->
	<text x="600" y="280" font-family="Georgia, 'Times New Roman', serif" font-size="120" font-weight="900" fill="#3d2818" text-anchor="middle" letter-spacing="6">RÖVARSPRÅKET</text>

	<!-- Translation sample card (slightly tilted) -->
	<g transform="translate(600, 420) rotate(-2)">
		<rect x="-360" y="-58" width="720" height="116" fill="#ebdfc1" stroke="#3d2818" stroke-width="3"/>
		<rect x="-350" y="-48" width="700" height="96" fill="none" stroke="#6b4a2e" stroke-width="1"/>
		<text x="-200" y="20" font-family="Georgia, 'Times New Roman', serif" font-size="50" font-weight="700" fill="#3d2818" text-anchor="middle">hej</text>
		<text x="-40" y="14" font-family="Georgia, 'Times New Roman', serif" font-size="48" font-weight="600" fill="#a8302a" text-anchor="middle">→</text>
		<text x="160" y="20" font-family="Georgia, 'Times New Roman', serif" font-size="50" font-weight="700" fill="#3d2818" text-anchor="middle">hohejoj</text>
	</g>

	<!-- Footer -->
	<text x="600" y="555" font-family="Georgia, 'Times New Roman', serif" font-size="22" fill="#6b4a2e" text-anchor="middle" letter-spacing="6" font-style="italic">rovarspraket.tammergard.se</text>
</svg>`

	return new Response(svg, {
		headers: {
			"Content-Type": "image/svg+xml; charset=utf-8",
			"Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
		},
	})
}
