import { fromRobber, pattern, toRobber } from "@tammergard/robber"

export { fromRobber, pattern, toRobber }

export function safeToRobber(text: string): string | null {
	try {
		return toRobber(text)
	} catch {
		return null
	}
}

export function safeFromRobber(robber: string): string | null {
	try {
		return fromRobber(robber)
	} catch {
		return null
	}
}

export function isRobber(text: string): boolean {
	return pattern.test(text)
}
