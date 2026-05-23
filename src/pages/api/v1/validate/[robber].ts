import type { APIRoute } from "astro"
import { pattern } from "@tammergard/robber"
import { apiError, decodeParam, json, preflight } from "../../../../lib/api"

export const GET: APIRoute = ({ params }) => {
	const robber = decodeParam(params.robber)
	if (robber == null) return apiError(400, "Saknar sträng att validera.")
	return json({ input: robber, valid: pattern.test(robber) })
}

export const OPTIONS: APIRoute = () => preflight()
