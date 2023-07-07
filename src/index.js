import app from "./app.js";
import { db } from "./db.js";

db();
app.listen(3000);
console.log('Server on port', 3000);