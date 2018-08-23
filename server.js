const { app } = require("./index");

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
