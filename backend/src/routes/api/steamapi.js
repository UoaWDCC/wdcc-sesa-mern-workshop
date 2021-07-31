/*
    API functions needed for retrieving steam info and hours

    Steam API Key: C07812B75A464A1431BB501AE01D2BB8

*/

const request = require('request');
const axios = require('axios');

async function getSteamJSON(URL) {
    try {
      const response = await axios.get("https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=C07812B75A464A1431BB501AE01D2BB8&steamid=76561197960434622&format=json");
      console.log(JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

 function returnSteamInfo(steamID) {
    const API = "C07812B75A464A1431BB501AE01D2BB8";
    const format = "json"
    let URL = `"https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=C07812B75A464A1431BB501AE01D2BB8&steamid=${steamID}&format=json"`;
    let userInfo = getSteamJSON(URL);
    return userInfo;
    //let hours = 0;
    //return hours;
}


function grabHours(steamID) {
    info = returnSteamInfo(steamID);
    // grab hours somehow;
}


export const grabID = function(req, res) {
    console.log(req.body.SteamID);
    let SteamID = req.body.SteamID;
    let hours = returnSteamInfo(SteamID);
    res.status(200).send(`${hours}`);
}