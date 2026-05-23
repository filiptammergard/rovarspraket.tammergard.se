const CORS_HEADERS = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "GET, OPTIONS",
	"Access-Control-Allow-Headers": "Content-Type",
	"Access-Control-Max-Age": "86400",
}

function cacheControl(): string {
	return "public, max-age=0, s-maxage=604800, stale-while-revalidate=86400"
}

export function json(data: unknown) {
	return new Response(JSON.stringify(data), {
		headers: {
			"Content-Type": "application/json; charset=utf-8",
			"Cache-Control": cacheControl(),
			...CORS_HEADERS,
		},
	})
}

export function apiError(status: number, message: string, details?: unknown) {
	return new Response(
		JSON.stringify({
			error: { status, message, ...(details ? { details } : {}) },
		}),
		{
			status,
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"Cache-Control": "no-store",
				...CORS_HEADERS,
			},
		},
	)
}

export function preflight() {
	return new Response(null, { status: 204, headers: CORS_HEADERS })
}

export function decodeParam(value: string | undefined): string | null {
	if (value == null || value === "") return null
	try {
		return decodeURIComponent(value)
	} catch {
		return null
	}
}
