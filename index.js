const fs = require("fs");

fs.writeFile  ("read.txt", "How are brother", (err) => {
  if (err) console.log(err);
  console.log("writing File Asynchoronusly");
});
