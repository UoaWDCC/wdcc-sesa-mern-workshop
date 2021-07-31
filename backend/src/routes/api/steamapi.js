/*
    API functions needed for retrieving steam info and hours

    Steam API Key: C07812B75A464A1431BB501AE01D2BB8

*/

const request = require('request');
const axios = require('axios');

async function getSteamJSON(URL) {
    try {
      let response = await axios.get(URL);
      response = response.data["response"];
      let total_games = response["total_count"];

      // console.log(JSON.stringify(response));
      // console.log(typeof(total_games));
      
      let allGames = response["games"];
      let initialPlayTime = 0;
      for(let i=0; i<total_games; i++) {
        // console.log(allGames[i]["name"])
        initialPlayTime += allGames[i]["playtime_forever"]
      }
      // console.log(initialPlayTime);
      return initialPlayTime;
    } catch (error) {
      console.error(error);
    }
  }

 async function returnHours(steamID) {
    const API = "C07812B75A464A1431BB501AE01D2BB8";
    const format = "json"
    let URL = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${API}&steamid=${steamID}&format=${format}`;
    let hours = await getSteamJSON(URL);
    return hours;
    //let hours = 0;
    //return hours;
}

    
export const grabID = async function(req, res) {
    console.log(req.body.SteamID);
    let SteamID = req.body.SteamID;
    let hours = await returnHours(SteamID);
    console.log(hours);
    res.status(200).send(`${hours}`);
}