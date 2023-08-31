const express = require('express');
const path = require('path');
// routes
const apiRoutes = require('./routes/apiRoutes'); 
const htmlRoutes = require('./routes/htmlRoutes'); 

// declare
const app = express();
const PORT = process.env.PORT || 3001;

// middleware, used from mini-project
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// uses for api and html routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// to see if server is running
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});