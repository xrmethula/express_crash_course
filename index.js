const express = require('express');
const logger = require('./middleware/logger');

const app = express();


//init middleware
app.use(logger);


//body parser middleware
app.use(express.json());


//members API routes
app.use('/api/members', require('./routes/api/members'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
