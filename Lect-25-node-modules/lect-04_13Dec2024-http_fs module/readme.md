### **README: Comprehensive Guide to HTTP, OS, FS, Path, and JSON Modules in Node.js**  

---

## **Topics Covered**  
1. [Introduction](#1-introduction)  
2. [HTTP Module](#2-http-module)  
   - [HTTP Status Codes](#21-http-status-codes)  
3. [OS Module](#3-os-module)  
4. [FS Module](#4-fs-module)  
   - [Key FS Functions](#41-key-fs-functions)  
5. [Path Module](#5-path-module)  
6. [JSON Methods](#6-json-methods)  
7. [Code Examples](#7-code-examples)  
8. [Resources](#8-resources)  

---

### **1. Introduction**  
Node.js provides built-in modules like `http`, `os`, `fs`, `path`, and `JSON` that enable developers to create servers, access system information, handle file operations, manage paths, and work with JSON data effectively. This guide explains how to use these modules in backend development.  

---

### **2. HTTP Module**  
The `http` module allows creating and managing web servers. You can handle requests and send responses directly through HTTP protocols.  

#### **Common HTTP Functions**  
- **`http.createServer()`**: Creates an HTTP server  
- **`server.listen(port)`**: Binds the server to a port  
- **Request and Response Properties:**  
  - `req.url`: Gets the request URL  
  - `req.method`: Gets the request method (GET, POST, etc.)  
  - `res.write()`: Sends data to the client  
  - `res.end()`: Ends the response  

---

### **2.1 HTTP Status Codes**  

#### **Informational Responses (100–199)**  
- `100 Continue`: The server has received the request headers  
- `101 Switching Protocols`: The requester has asked to switch protocols  

#### **Successful Responses (200–299)**  
- `200 OK`: Request succeeded  
- `201 Created`: Request has been fulfilled and resource created  

#### **Redirection Messages (300–399)**  
- `301 Moved Permanently`: Resource moved to a new location  
- `302 Found`: Temporary redirection  

#### **Client Error Responses (400–499)**  
- `400 Bad Request`: Malformed request  
- `401 Unauthorized`: Authentication required  
- `403 Forbidden`: Access denied  
- `404 Not Found`: Resource not found  

#### **Server Error Responses (500–599)**  
- `500 Internal Server Error`: Generic server-side error  
- `503 Service Unavailable`: Server overloaded or down for maintenance  

---

### **3. OS Module**  
The `os` module provides methods to interact with the operating system and fetch system-level information.  

#### **Common OS Functions**  
- `os.hostname()`: Returns the system’s hostname  
- `os.platform()`: Returns the operating system platform  
- `os.arch()`: Returns the architecture of the CPU  
- `os.uptime()`: Returns the system uptime in seconds  
- `os.freemem()`: Returns available system memory  
- `os.totalmem()`: Returns total system memory  

---

### **4. FS Module**  
The `fs` (File System) module allows file and directory operations like reading, writing, and updating files.  

#### **4.1 Key FS Functions**  

| **Function**     | **Description**                                                  |  
|------------------|------------------------------------------------------------------|  
| `fs.readFile()`  | Reads the contents of a file asynchronously                     |  
| `fs.writeFile()` | Writes data to a file, replacing the existing content           |  
| `fs.appendFile()`| Appends data to a file, creating the file if it does not exist  |  
| `fs.unlink()`    | Deletes a file                                                  |  
| `fs.rename()`    | Renames or moves a file                                         |  
| `fs.mkdir()`     | Creates a new directory                                         |  
| `fs.readdir()`   | Reads the contents of a directory                               |  
| `fs.stat()`      | Returns information about a file or directory                   |  

---

### **5. Path Module**  
The `path` module provides utilities for working with file and directory paths. It helps in managing and manipulating file paths across different operating systems.  

#### **Common Path Functions**  
- **`path.join()`**: Joins multiple path segments into a single path  
- **`path.resolve()`**: Resolves a sequence of paths into an absolute path  
- **`path.basename()`**: Returns the last part of a path (file or directory)  
- **`path.extname()`**: Returns the file extension of a path  
- **`path.dirname()`**: Returns the directory name of a path  

---

### **6. JSON Methods**  
JSON (JavaScript Object Notation) is used for storing and exchanging data. Node.js provides methods for parsing and stringifying JSON data.  

#### **Common JSON Methods**  
- **`JSON.parse()`**: Converts a JSON string into a JavaScript object  
  ```javascript  
  const jsonString = '{"name":"John","age":30}';  
  const obj = JSON.parse(jsonString);  
  console.log(obj);  // { name: 'John', age: 30 }  
  ```  
- **`JSON.stringify()`**: Converts a JavaScript object into a JSON string  
  ```javascript  
  const obj = { name: 'John', age: 30 };  
  const jsonString = JSON.stringify(obj);  
  console.log(jsonString);  // '{"name":"John","age":30}'  
  ```  

---

### **7. Code Examples**  

#### **Creating a Simple HTTP Server with System Info, File Handling, Path, and JSON Parsing**  

```javascript  
const http = require('http');  
const os = require('os');  
const fs = require('fs');  
const path = require('path');  

const server = http.createServer((req, res) => {  
    if (req.url === '/sysinfo') {  
        const systemInfo = {  
            hostname: os.hostname(),  
            platform: os.platform(),  
            architecture: os.arch(),  
            uptime: os.uptime(),  
            freeMemory: os.freemem(),  
            totalMemory: os.totalmem(),  
        };  

        fs.writeFile(path.join(__dirname, 'systemInfo.json'), JSON.stringify(systemInfo), (err) => {  
            if (err) {  
                res.writeHead(500, { 'Content-Type': 'text/plain' });  
                res.end('Error writing system info to file');  
            } else {  
                res.writeHead(200, { 'Content-Type': 'application/json' });  
                res.end(JSON.stringify(systemInfo));  
            }  
        });  
    } else if (req.url === '/readfile') {  
        fs.readFile(path.join(__dirname, 'systemInfo.json'), 'utf8', (err, data) => {  
            if (err) {  
                res.writeHead(404, { 'Content-Type': 'text/plain' });  
                res.end('File not found');  
            } else {  
                res.writeHead(200, { 'Content-Type': 'application/json' });  
                res.end(data);  
            }  
        });  
    } else {  
        res.writeHead(404, { 'Content-Type': 'text/plain' });  
        res.end('Resource not found');  
    }  
});  

server.listen(3000, () => {  
    console.log('Server running at http://localhost:3000/');  
});  
```  

---

### **8. Resources**  
- [Node.js HTTP Documentation](https://nodejs.org/api/http.html)  
- [Node.js OS Documentation](https://nodejs.org/api/os.html)  
- [Node.js FS Documentation](https://nodejs.org/api/fs.html)  
- [Node.js Path Documentation](https://nodejs.org/api/path.html)  
- [Node.js JSON Documentation](https://nodejs.org/api/json.html)  

---

Would you like additional explanations or examples on any of these topics?
