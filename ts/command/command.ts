namespace Command {
    export function exec(command: string, args: string[]) {
        switch (command) {
            case "include": include(args); break;
            default: {
                console.log(`${command} is not a valid paket command!`);
                process.exit();
            }
        }
    }
}