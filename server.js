const express = require("express")
const yt_search = require("yt-search")

const app = express()
const port = 80

async function NameToUrl(nom_video){
    a = await yt_search(nom_video)
    return (a.videos[0].url)
}

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use('/', express.static(__dirname + '/public/'))

app.listen(port, () =>{
    console.log(`Le serveur est bien lancé sur http://127.0.0.1:${port}`)
})

app.get ("/", (req, res)=>{
    console.log("requete")
    res.sendFile("index.html")    
})

app.post ("/getlink", async (req, res)=>{
  let nom_video = req.body.nom_video
  res.send(await NameToUrl(nom_video))

})