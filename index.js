const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.join(__dirname, "public");

// Serve static files
app.use(express.static(publicPath));

// Root route
app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});