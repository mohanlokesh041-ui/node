

//console.log(path);

//Join - 
// sysntax path.join(path1, path2,......)

// absolute path 
// Path.resolve(path) 

// Take the file extension 
// Path.extname(filename) 

// Take the filename
// Path.basename (filename) 


const foldername ="upload"

const fileName = "server.js"

const filePath = path.join(foldername, fileName);

console.log(filePath);


const absolutePath = path.resolve("server.js")

console.log(`absolutePath`,absolutePath);
