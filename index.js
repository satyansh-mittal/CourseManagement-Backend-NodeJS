const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const adminRoutes = require("./routes/admin_auth_routes");
const userRoutes = require("./routes/user_routes");
const managerRoutes = require("./routes/manager_routes");
const planRoutes = require("./routes/company_plan_routes")
const adminController = require("./controller/admin_auth_controller");
require('./utils/index');



const app = express();
let port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', adminRoutes);
app.use('/api', userRoutes);
app.use('/api', managerRoutes);
app.use('/api', planRoutes);

app.listen(port, () => {
    console.log('Server is running on port 3000');
});


