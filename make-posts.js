const path = require('path');
const fs = require('fs');
const inFolder = path.resolve(__dirname, './images/');
const outFolder = path.resolve(__dirname, './_posts/');

let i = 0;
fs.readdir(inFolder, (err, files) => {
  files.forEach(file => {
    i++;
    if (file.endsWith('jpg') || file.endsWith('png')) {
      fs.writeFile(path.resolve(outFolder, `./2018-11-16-Photo-${i}.md`), getTemplate(file), () => {
        console.log(file + ' done');
      });
    }
  });
});

const getTemplate = (filename) => {
  return `---
layout: photo
title: Test Photo
filename: ${filename}
focus: center
---

Description text.`;
};
