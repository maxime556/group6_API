class ConfigService 
{
    private env: string
    private config: any
    
    constructor()
    {
        this.env = process.env.ENV

        this.config = {
            DB_HOST: process.env.DB_HOST,
            DB_USER: process.env.DB_USER,
            DB_PASSWORD: process.env.DB_PASSWORD,
            DB_NAME: process.env.DB_NAME,
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