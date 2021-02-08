const fullConfig = require("./config.json")

class ConfigService 
{
    private config: any

    init(env: string)
    {
        this.config = fullConfig[env]
    }

    all()
    {
        return this.config
    }

    get(key: string)
    {
        return this.config[key]
    }
}

export const Config = new ConfigService()