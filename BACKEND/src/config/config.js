export const cookiesOption = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'Production',
  sameSite: 'lax',
  maxAge: 2000 * 60 * 5 //5min
};