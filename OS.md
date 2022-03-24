**OS**

The os module provides operating system-related utility methods and properties. 
It can be accessed using:
 
 const os = require('os');

 - OS
   - os.EOL()
   <br>
    ```Ruby
    const os =require('os')
    console.log(os.EOL);
    ```
     The operating system-specific end-of-line marker.
```
    \n on POSIX <br>
    \r\n on Windows
```

   - os.arch()<br>
   Returns the operating system CPU architecture for which the Node.js binary was compiled.
   <br>
  
   >Note: return value is equivalent to process.arch .
   
   ```Ruby
   const os=require('os')
   console.log(os.arch());
   ```
   <br>
   
   - os.constants
     <br>
    Contains commonly used operating system-specific constants for error codes, process signals, and so on.  
    
   ```Ruby
   const os=require('os')
   console.log(os.constants);
   ```
   <br> 
   
   - os.cpus()
    <br>
   Returns an array of objects containing information about each logical CPU core.
    
  ```Ruby
     var os=require('os')
     console.log(os.cpus());
  ```
   <br>

   - os.devNull
   <br>
   * string:NULL
   
   <br> 
    
  ```Ruby
   const os=require('os')
   console.log(os.devNuLL);
  ```

   - os.endianness()
   <br>
   
    >Returns a string identifying the endianness of the CPU for which the Node.js binary was compiled.

    >Possible values are 'BE' for big endian and 'LE' for little endian.
  
  <br>
  
 ```Ruby
   const os=require('os')
   console.log(os.endianness());
 ```
  <br>
   - os.freemem() 
   <br>
   
  ``` Ruby 
      var os=require('os')
      const freeMemory=os.freemem()
      console.log(`${freeMemory/1024/1024/1024}`);
  ```
   - os.getPriority([pid])
    <br>
    
     >If pid is not provided or is 0, the priority of the current process is returned.
   <br>
     
   ``` Ruby 
     const os=require('os')
   console.log(os.getPriority());
   ```
   <br>
     
   - os.homedir()
   <br>
   
    >Returns the string path of the current user's home directory.
   <br>
    On POSIX, it uses the $HOME environment variable if defined.
    Otherwise it uses the effective UID to look up the user's home directory.
   <br>
     
  ``` Ruby 
     const os=require('os')
   console.log(os.homedir());
  ```

   - os.hostname()
   <br>
   
  ``` Ruby 
     const os=require('os')
   console.log(os.hostname());
  ```
   <br>
   
   - os.loadavg()
   <br>
   
     >The load average is a measure of system activity calculated by the operating system and expressed as a fractional number.

    >The load average is a Unix-specific concept. On Windows, the return value is always [0, 0, 0].
   <br>
   
  ``` Ruby 
     const os=require('os')
   console.log(os.loadavg());
  ```
  <br>
  
   - os.networkInterfaces()
   <br>
   
  ``` Ruby 
     const os=require('os')
   console.log(os.netWorkInterfaces());
  ```
   <br>
   
   - os.platform()
   <br>
   
  ``` Ruby 
      var os=require('os')
      console.log(os.platform());
  ```
   - os.release()
   <br>
   
  ``` Ruby 
     const os=require('os')
   console.log(os.release());
 ```
   
   - os.setPriority([pid, ]priority)
   <br>
   
  ``` Ruby 
     const os=require('os')
   console.log(os.setPriorty());
 ```
   
   - os.tmpdir()
   <br>
   
  ``` Ruby 
     const os=require('os')
   console.log(os.tmpdir());
 ```
   
   - os.totalmem()
   <br>
   
  ```Ruby 
      var os=require('os')
      const totalMemory=os.totalmem()
      console.log(`${totalMemory/1024/1024/1024}`);
  ```
   <br> 
   
  - os.type()
   <br>
   
 ``` Ruby 
     const os=require('os')
   console.log(os.type());
 ```
   
  - os.uptime()
   <br>
   
  ``` Ruby 
     const os=require('os')
   console.log(os.userInfo());
 ```
   
   >Returns the system uptime in number of seconds.
  
   - os.userInfo([options])
   <br>
   
 ``` Ruby 
     const os=require('os')
   console.log(os.userInfo());
 ```
   <br>
   
 **he returned object includes the username, uid, gid, shell, and homedir. On Windows, the uid andgid fields are -1, and shell is null.**
   
   - os.version()
   <br>
   
 ``` Ruby 
     const os=require('os')
   console.log(os.version());
 ```
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


 <br> 
 
# Note: The number of milliseconds the CPU has Spent.

