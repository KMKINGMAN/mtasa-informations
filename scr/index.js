/**
 * @discord_support_server https://discord.gg/kingmandev
 * @github https://github.com/KMKINGMAN | https://github.com/KMCodes-Developers
 * @dev_number +962792914245
 * @info all rights are save
 */
const bace_err = require('./err')
const req = require("axios");
const mta_api = 'https://mtasa.com/api/'
class KINGMAN {
    /**
     * @description To set the default mta server information
     * @param {{ip: String, port: Number}} ops 
     */
    constructor(ops){
        this.req = req
        this.defult_data = ops
    }
    /**
     * @description to Get your server information by default information
     * @returns MTAS Server Data
     * @example 
     * new KINGMAN({ip: "87.98.182.70", port: 22003})
     * .getServerInfo()
     * .then((res)=> {
     *     console.log(res)
     * })
     * .catch((err)=> {
     *     console.log(err)
     * })
     */
    async getServerInfo(){
        return new Promise(async (res, rej)=> {
            let data = await this.req.get(mta_api);
            if(data.data){
                try{
                    let Server = data.data.filter((server)=> server.ip === this.defult_data.ip && server.port === this.defult_data.port )[0]
                    if(Server){
                        res({
                            ip: Server.ip, 
                            name: this.serverName(Server.name),
                            maxplayers: Server.maxplayers,
                            port:Server.port,
                            password:Server.password,
                            version: Server.version,
                            players: Server.players
                        })
                    } else {
                        rej(bace_err.INFO_ERR)
                    }
                }catch{
                    rej(bace_err.UNKNW_ERR)
                }
            } else {
                rej(bace_err.UNKNW_ERR)
            }
        })
    };
    /**
     * @description to Get your akk mta servers information by default information
     * @returns MTAS SERVERS DATA
     * @example
     * new KINGMAN({ip: "87.98.182.70", port: 22003})
     * .getAllServers()
     * .then((res)=> {
     *     console.log(res)
     * })
     * .catch((err)=> {
     *     console.log(err)
     * })
     */
    async getAllServers(){
        return new Promise(async(res, rej)=> {
            let data = await this.req.get(mta_api)
            if(data.data){
                res(data.data.map(Server=> { return {
                    ip: Server.ip,
                    name: this.serverName(Server.name),
                    maxplayers: Server.maxplayers,
                    port:Server.port,
                    password:Server.password,
                    version: Server.version,
                    players: Server.players
                } }))
            } else {
                rej(bace_err.UNKNW_ERR)
            }
        })
    }
    /**
     * @description Searching for a server by ip
     * @param {String} ServerIP 
     * @returns MTA SAERVER DATA
     * @example
     * new KINGMAN({ip: "87.98.182.70", port: 22003})
     * .getServerByIp(`87.98.182.70`)
     * .then((res)=> {
     *     console.log(res)
     * })
     * .catch((err)=> {
     *     console.log(err)
     * })
     */
    async getServerByIp(ServerIP){
        return new Promise(async(res, rej)=> {
            let data = await this.req.get(mta_api)
            if(data.data){
                let reg = new RegExp(ServerIP)
                try{
                    let data2 = data.data.filter((server)=> reg.test(server.ip))
                    if(data2 && data2.length !== 0){
                        res(data2.map(Server=> { return {
                            ip: Server.ip,
                            name: this.serverName(Server.name),
                            maxplayers: Server.maxplayers,
                            port:Server.port,
                            password:Server.password,
                            version: Server.version,
                            players: Server.players
                        } }))
                    }else{
                        rej(bace_err.WRONG_IP)
                    }
                }catch{
                    rej(bace_err.UNKNW_ERR)
                }
            } else {
                rej(bace_err.UNKNW_ERR)
            }
        })
    }
    /**
     * @description Searching for a server by name
     * @param {String} Server_Name 
     * @returns MTA SAERVERS DATA
     * @example
     * new KINGMAN({ip: "87.98.182.70", port: 22003})
     * .getServerByName(`RP`)
     * .then((res)=> {
     *     console.log(res)
     * })
     * .catch((err)=> {
     *     console.log(err)
     * })
     */
    async getServerByName(Server_Name){
        return new Promise(async(res,rej)=> {
            let data = await this.req.get(mta_api)
            if(data.data){
                let reg = new RegExp(Server_Name)
                try {
                    let data2 = await data.data.filter((server)=> reg.test(server.name) === true )
                    if(data2 && data2.length !== 0){
                        res(data2.map(Server=> { return {
                            ip: Server.ip,
                            name: this.serverName(Server.name),
                            maxplayers: Server.maxplayers,
                            port:Server.port,
                            password:Server.password,
                            version: Server.version,
                            players: Server.players
                        } }))
                    } else {
                        rej(bace_err.INFO_ERR)
                    }
                } catch (error) {
                    rej(bace_err.UNKNW_ERR)
                }
            } else {
                rej(bace_err.UNKNW_ERR)
            }
        })
    }
    /**
     * @param {String} raw 
     * @returns Handling unknown symbols
     */
    serverName(raw) {
        const str = Buffer.from(raw).toString('utf8');
        try {
            return decodeURIComponent(escape(str));
        }
        catch (e) {
            return str;
        }
    }    
}
module.exports = KINGMAN;
