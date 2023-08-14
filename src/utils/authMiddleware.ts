import jwt from 'jsonwebtoken'

export const authMiddleware = (token: string) => {
	jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
		console.log(decoded)
	})
}
