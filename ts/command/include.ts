namespace Command {
    export function include(args: string[]) {
        const libname = args.shift();
        if (!libname) {
            console.log("Include command require a library: paket include libname");
            process.exit();
        }
        console.log(`Including ${libname}`);
    }
}