**OS**

The os module provides operating system-related utility methods and properties. 
It can be accessed using:
 
 const os = require('os');

 - OS
   - os.EOL()
   <br>

     The operating system-specific end-of-line marker.
```
    \n on POSIX <br>
    \r\n on Windows
```
   -os.arch()<br>
   Returns the operating system CPU architecture for which the Node.js binary was compiled.

   ```Ruby
   Note: return value is equivalent to process.arch .
   ```
   - os.constants
     <br>
    Contains commonly used operating system-specific constants for error codes, process signals, and so on.   
   - os.cpus()
    <br>
    Returns an array of objects containing information about each logical CPU core.
     ```Ruby
     var os=require('os')
     console.log(os.cpus());
     ```
     <br>
   - os.devNull <br> 
   - os.endianness()<br>
   - os.freemem() <br>
      ``` Ruby 
      var os=require('os')
      const freeMemory=os.freemem()
      console.log(`${freeMemory/1024/1024/1024}`);
      ```
   - os.getPriority([pid]) <br>
   - os.homedir()<br>
   - os.hostname()<br>
   - os.loadavg()<br>
   - os.networkInterfaces()<br>
   - os.platform()<br>
   ``` Ruby 
      var os=require('os')
      console.log(os.platform());
      ```
   - os.release()<br>
   - os.setPriority([pid, ]priority)<br>
   - os.tmpdir()<br>
   - os.totalmem()<br>
   ``` Ruby 
      var os=require('os')
      const totalMemory=os.totalmem()
      console.log(`${totalMemory/1024/1024/1024}`);
      ```
      <br> 
   - os.type()<br>
   - os.uptime()<br>
   - os.userInfo([options])<br>
   - os.version()
  
<br>

**OS Constant**

Following Constants are showed by :

```
os.constants

```
<br>

1. Type  of Constants

|  |  |
|---|---|
|Signal constants| Error constants|
|Windows-specific error constants|dlopen constants|
|Priority constants|libuv constants|


2. The Properties included:
   - model<string>
   - speed<number> Mhz
   - times<object>
     - user<number>
     - nice<number>
     - sys<number>
     - idle<number>
     - irq<number>

```
<br> 
Note: The number of milliseconds the CPU has Spent.

