require('dotenv').config();

export const ENV = process.env.NODE_ENV || 'development';
export const SESSION_SECRET = process.env.SESSION_SECRET || 'SESSION_SECRET';
export const TMDB_API_KEY = process.env.TMDB_API_KEY;
