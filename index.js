const sharp = require("sharp");
const fs = require("fs");

const resizeImage = (folderPath) => {
  if (!fs.existsSync(folderPath)) {
    console.log("folder does not exist");
    return;
  }
  if (!fs.existsSync("./output")) {
    fs.mkdirSync("./output");
  }
  fs.readdirSync(folderPath).forEach((fileName) => {
    sharp(folderPath + "/" + fileName)
      .resize({
        width: 150,
        fit: "contain",
      })
      .toFile("./output" + "/" + fileName + ".jpg");
  });
};
resizeImage("./images");

