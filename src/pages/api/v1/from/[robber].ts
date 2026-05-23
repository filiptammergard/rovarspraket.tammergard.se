import type { APIRoute } from "astro"
import { fromRobber, pattern } from "@tammergard/robber"
import { apiError, decodeParam, json, preflight } from "../../../../lib/api"

export const GET: APIRoute = ({ params }) => {
	const robber = decodeParam(params.robber)
	if (robber == null) return apiError(400, "Saknar rövarspråk att översätta.")
	if (!pattern.test(robber)) {
		return apiError(
			422,
			`"${robber}" är inte en giltig rövarspråkssträng.`,
		)
	}
	const text = fromRobber(robber)
	return json({ robber, text })
}

export const OPTIONS: APIRoute = () => preflight()
