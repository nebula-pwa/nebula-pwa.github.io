// watchFile.js
const fs = require('fs');
const path = require('path');

// Path to your policy file 
const policyFilePath = path.join(__dirname, '../components/PolicyPage.js');

// Path to the file where the date will be stored
const lastModifiedDateFile = path.join(__dirname, '../lastModifiedDate.json');

// Watch the policy file for changes
fs.watchFile(policyFilePath, (curr, prev) => {
  if (curr.mtime !== prev.mtime) {
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    // Save the current date to the JSON file
    fs.writeFileSync(lastModifiedDateFile, JSON.stringify({ lastModifiedDate: currentDate }, null, 2));

    console.log(`Policy file was modified on: ${currentDate}`);
  }
});
