const args = process.argv.slice(2);

const command = args.shift();

if (!command) {
    console.log("Command list");
    process.exit();
}

Command.exec(command, args);