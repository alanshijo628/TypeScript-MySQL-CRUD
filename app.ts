import app from './src/server';
import config from './src/config/config';
import db from './src/config/db';

const PORT = config.port;

app.listen(PORT, ()=>{
    console.log(`APP Listening on port: ${PORT}`);
});

try {
    db.authenticate();
    console.log(`DB connected!`);
} catch (error) {
    console.error(`DB connection failed: ${error}`);
    
}