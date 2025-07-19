import { json } from "express";
import pool from "./db.js";

const result = await pool.query('SELECT * FROM capitals');

console.log(result.rows);