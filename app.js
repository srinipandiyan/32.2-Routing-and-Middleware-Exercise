/**Initialize express server and import files and modules */
const express = require('express')
const app = express();

const itemsRoutes = require('./routes/items');
const ExpressError = require('./error');


/**Use items routes */
app.use(express.json());
app.use('/', itemsRoutes);

/**Error handlers */
app.use(function (req, res, next) {
    next(err);
    return new ExpressError("Not Found", 404);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);

    return res.json({
        error: err.message,
    });
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});  

module.exports = app;