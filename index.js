







// const fs = require('fs');

// fs.mkdir("My-Folder", () => {
//     console.log("Folder Created Successfullys");
//   });



const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

// 1. Endpoint to create a file
// app.post('/createFile', (req, res) => {
//   const folderPath = 'Sample-folder';
//   const currentDate = new Date().toISOString().replace(/:/g, '-').replace(/\..+/, '');
//   const fileName = `${currentDate}.txt`;
//   const filePath = path.join(folderPath, fileName);
//   const content = `${Date.now()}`; 

//   try {
//     fs.writeFileSync(filePath, content);
//     res.status(200).send(`File ${fileName} created in ${folderPath} with content: ${content}`);
//   } catch (err) {
//     res.status(500).send('Error creating file');
//   }
// });

app.post('/createfile', (req, res) => {
  const folderPath = 'Sample-Folder'; // Replace 'your-folder' with your desired folder path
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().replace(/:/g, '-'); // Format date for filename
  const fileName = `${formattedDate}.txt`;
  const filePath = path.join(folderPath, fileName);
  const content = `${Date.now()}`; // Content is the current timestamp

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Error creating file' });
    }
    return res.status(200).json({ message: 'File created successfully', filePath });
  });
});


// 2. Endpoint to retrieve all the files in a particular folder

app.get('/getAllFiles',(req,res)=>{
    const folderPath='My-Folder';
    try {
        const files = fs.readdirSync(folderPath);
        res.status(200).json({ files });
      } catch (err) {
        res.status(500).send('Error retrieving files');
      }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});





