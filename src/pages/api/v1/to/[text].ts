import type { APIRoute } from "astro"
import { toRobber } from "@tammergard/robber"
import { apiError, decodeParam, json, preflight } from "../../../../lib/api"

export const GET: APIRoute = ({ params }) => {
	const text = decodeParam(params.text)
	if (text == null) return apiError(400, "Saknar text att översätta.")
	const robber = toRobber(text)
	return json({ text, robber })
}

export const OPTIONS: APIRoute = () => preflight()
