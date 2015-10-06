function myOSfn() {
    var os = require("os");
    var myHostname = os.hostname();
    var myOS = os.type();
    var myArch = os.arch();
    var myRelease = os.release();
    var myUptime = os.uptime() / 86400; // coverted to days
    var myRam = os.totalmem();
    var myFreeRam = os.freemem();
    var myUsedRam = myRam - myFreeRam;
    // get together all the info
    var myPC = "My hostname: " + myHostname + "\n" + "My OS: " + myOS + "\n"
     + "My architecture: " + myArch + "\n" + "My release: "  + myRelease + "\n"
     + "My uptime: " + myUptime + "\n" + "Total memory: " + myRam + "\n"
     + "Free memory: " + myFreeRam + "\n" + "Used memory: " + myUsedRam;
    // print result to console
    //process.stdout.write(myPC);
    console.log(myPC)
}

myOSfn();
