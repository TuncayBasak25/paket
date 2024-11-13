declare const process: {
    argv: string[];
    exit(code?: number): never;
};

declare function require(name: string): any;