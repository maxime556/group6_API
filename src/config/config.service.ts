const fullConfig = require("./config.json")
const localConfig = require("./config.local.json")


class ConfigService 
{
    private config: any

    init(env: string)
    {
        this.config = fullConfig[env]
        if (env== 'local') {
            this.config = { ...this.config, ...localConfig}
        }
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