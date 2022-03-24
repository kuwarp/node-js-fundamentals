**os**

The os module provides operating system-related utility methods and properties. 
It can be accessed using:
 
 const os = require('os');

 -OS
  -os.EOL()
   <br>

     The operating system-specific end-of-line marker.

    \n on POSIX
    \r\n on Windows

   -os.arch()<br>
   Returns the operating system CPU architecture for which the Node.js binary was compiled.

   ```Ruby
   Note: return value is equivalent to process.arch .
   ```
    - os.constants
    - os.cpus()
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
    -
<br>

**OS Constant**

Following Constants are showed by :

```
os.constants

```
<br>

Type  of Constants

|  |  |
|---|---|
|Signal constants| Error constants|
|Windows-specific error constants|dlopen constants|
|Priority constants|libuv constants|