const KINGMAN = require("mtasa-informations")
;(async()=>{
    const KingClient = new KINGMAN({ip: "87.98.182.70", port: 22003})
    await KingClient.getServerByName("KSA")
    .then((res)=> {
        console.log(res)
    })
    .catch((err)=> {
        console.log(err)
    })
    await KingClient.getServerByIp("87.98.182.70")
    .then((res)=> {
        console.log(res)
    })
    .catch((err)=> {
        console.log(err)
    })
    await KingClient.getAllServers("87.98.182.70")
    .then((res)=> {
        console.log(res)
    })
    .catch((err)=> {
        console.log(err)
    })
    await KingClient.getServerInfo()
    .then((res)=> {
        console.log(res)
    })
    .catch((err)=> {
        console.log(err)
    })
})()
