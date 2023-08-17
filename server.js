const express = require("express");
const app = express();
//gets express and sets it to app
// defines port
const PORT = process.env.PORT || 3001;
//gets the routes so they can be defined
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//defines the path to the files in the URL
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
