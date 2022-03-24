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
    Contains commonly used operating system-specific constants for error codes, process signals, and so on. [^1]    
   - os.cpus()
    <br>
    Returns an array of objects containing information about each logical CPU core.[^2]
   - os.devNull
   - os.endianness()
   - os.freemem()
   - os.getPriority([pid])
   - os.homedir()
   - os.hostname()
   - os.loadavg()
   - os.networkInterfaces()
   - os.platform()
   - os.release()
   - os.setPriority([pid, ]priority)
   - os.tmpdir()
   - os.totalmem()
   - os.type()
   - os.uptime()
   - os.userInfo([options])
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
Note: The number of milliseconds the CPU has Spent.

