"use strict";
const args = process.argv.slice(2);
const command = args.shift();
if (!command) {
    console.log("Command list");
    process.exit();
}
Command.exec(command, args);
var Command;
(function (Command) {
    function exec(command, args) {
        switch (command) {
            case "include":
                Command.include(args);
                break;
            default: {
                console.log(`${command} is not a valid paket command!`);
                process.exit();
            }
        }
    }
    Command.exec = exec;
})(Command || (Command = {}));
var Command;
(function (Command) {
    function include(args) {
        const libname = args.shift();
        if (!libname) {
            console.log("Include command require a library: paket include libname");
            process.exit();
        }
        console.log(`Including ${libname}`);
    }
    Command.include = include;
})(Command || (Command = {}));
