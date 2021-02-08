class ArgsSingleton
{
    private args: Object = {};

    readonly COLOR = {
        RED: '\x1b[31m',
        RESET: '\x1b[0m',
    };

    constructor()
    {
        this.args = this.parse(process.argv.slice(2));
    }

    all(): Object
    {
        return this.args;
    }
    
    get(key: string, defaultValue: string = null): any
    {
        return this.exists(key) ? this.args[key] : defaultValue;
    }

    exists(key: string): boolean
    {
        return typeof(this.args[key]) === 'undefined' ? false : true;
    }

    required(key: string, allowed: Array<any> = [])
    {
        if (this.isNull(key) || this.isEmpty(key)) {
            console.log(this.COLOR.RED + '\Argument --'+ key +' is required'+ this.COLOR.RESET)
            process.exit(0)
        }

        if (allowed.length > 0 && allowed.indexOf(this.get(key)) === -1) {
            console.log(this.COLOR.RED + '\Argument value "'+ this.get(key) +'" for --'+ key +' is not allowed'+ this.COLOR.RESET)
            console.log(this.COLOR.RED + '\Allowed values are "'+allowed.join('|')+'"' + this.COLOR.RESET)
            process.exit(0)
        }

        return this
    }

    isNull(key: string): boolean
    {
        return (!this.exists(key) || this.get(key) === null) ? true : false;
    }

    isEmpty(key: string): boolean
    {
        return (!this.exists(key) || this.get(key) === '') ? true : false;
    }

    private parse(processArgv: Array<any>): Object
    {
        let list: Object = {};

        for (let argv of processArgv) {

            let exp = argv.split('='),
                key = exp[0].replace('--', ''),
                val = exp[1];

            list[key] = val;
        }

        return list;
    }
}

export let Args = new ArgsSingleton()