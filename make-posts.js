const path = require('path');
const fs = require('fs');
const inFolder = path.resolve(__dirname, './images/photos/');
const outFolder = path.resolve(__dirname, './_posts/');

let i = 0;

function sortNumber(a, b) {
  return parseFloat(a) - parseFloat(b);
}

fs.readdir(inFolder, (err, files) => {
  var sorted = files.sort(sortNumber);

  sorted.forEach(file => {
    i++;
    if (file.endsWith('jpg') || file.endsWith('png')) {
      fs.writeFile(path.resolve(outFolder, `./2018-11-16-Photo-${i}.md`), getTemplate(file, i), (err) => {
        console.log(file + ' done');
      });
    }
  });
});

const getTemplate = (filename, num) => {
  return `---
layout: photo
order: ${num}
title: "Photo #${num}"
filename: ${filename}
focus: center
---

Description text.`;
};
