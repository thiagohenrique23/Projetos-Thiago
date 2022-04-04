import express from "express"
import { json } from "express"
import axios from "axios"
import cors from "cors"

require("dotenv").config()

const app = express()

app.use(json())
app.use(cors())
app.listen(3333)

app.get("/summoner/:summonerName", async(req, res) => {
  const { summonerName } = req.params
  
  const summonerIdResponse = await axios
  .get(`${process.env.LOL_URL}/lol/summoner/v4/summoners/by-name/${summonerName}`,
  { headers: { 'X-Riot-Token': process.env.LOL_KEY } } )
  .catch(e => {
    return res.status(e.response.status).json(e.response.data)
  })

  const { id, profileIconId, summonerLevel } = summonerIdResponse.data

  const responseRanked = await axios.get(`${process.env.LOL_URL}/lol/league/v4/entries/by-summoner/${id}`,
  { headers: { 'X-Riot-Token': process.env.LOL_KEY } } )
  .catch(e => {
    return res.status(e.response.status).json(e.response.data)
  })
})