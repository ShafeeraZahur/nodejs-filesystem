





//Creating a folder.

const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const port = 5000;

// 1. Endpoint to create a file in a particular folder


app.post('/createfile', (req, res) => {
  const folderPath = 'My-Folder'; 
  console.log('Folder Path:', folderPath);
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString(); 
  const fileName = `${formattedDate}.txt`;
  const filePath = path.join(folderPath, fileName);
  const content = `${Date.now()}`; 

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Error creating file' });
    }
    console.log('File created successfully:', filePath);
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





