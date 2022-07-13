const cheerio = require('cheerio')
const request = require('request')
const express = require('express');
const cors = require('cors');



const app = express()
app.use(cors())

// NA 
let eventsNA = []
let datesNA = []
let statusNA = []
let AlleventsOBJNA = []

// EU 
let eventsEU = []
let datesEU = []
let statusEU = []
let AlleventsOBJEU = []

// AP
let eventsAP = []
let datesAP = []
let statusAP = []
let AlleventsOBJAP = []

// KR
let eventsKR = []
let datesKR = []
let statusKR = []
let AlleventsOBJKR = []

// JP
let eventsJP = []
let datesJP = []
let statusJP = []
let AlleventsOBJJP = []

// LA
let eventsLA = []
let datesLA = []
let statusLA = []
let AlleventsOBJLA = []

//BR
let eventsBR = []
let datesBR = []
let statusBR = []
let AlleventsOBJBR = []


let AlleventsARR = []
let teamsARR = []
let AllDates = []
let AlleventsOBJ = []
let AllEventsStatus = []
let eventsTeamsAll = []

// extras
let everyTeam = []
let teamcountry = []
let allmightyteams = []


// /playerData

let AllPlayers = []
let AllPlayersTeams = []
let AllPlayersRND = []
let AllPlayersKD = []
let AllMightyPlayerData = []

app.get('/', (req, res) => {




    res.send("<h1 style='display: flex; justify-content: center;align-items: center;color: darkgreen;font-family: cursive;'>Data fetched from vlr.gg<h1/>")


})
app.get('/teams', (req, res) => {
    everyTeam = []
    teamcountry = []
    allmightyteams =[]
    

    for (let i = 0; i < eventsTeamsAll.length; i++) {


        if (i % 2 == 0) {

            everyTeam.push(eventsTeamsAll[i])
        }
        else {
            teamcountry.push(eventsTeamsAll[i])
        }
    }

    for (let i = 0; i < everyTeam.length; i++) {




        let obj = {
            results: everyTeam[i],
            teamorigin: teamcountry[i],
           
        }
        allmightyteams.push(obj)
    }


    // console.log(everyTeam);




    res.send({ success: true, results: allmightyteams,  totalitems: everyTeam.length })


})

app.get('/date', (req, res) => {

    AlleventsOBJ = []

    for (let i = 0; i < AlleventsARR.length; i++) {

        let obj = {
            event: AlleventsARR[i],
            date: AllDates[i],
            status: AllEventsStatus[i]
        }
        AlleventsOBJ.push(obj)

    }



    res.send({ success: true, results: AlleventsOBJ, totalitems: AlleventsOBJ.length })
    // res.send({ success: true, AllEvents: AlleventsARR, totalitems: AlleventsARR.length })


})
app.get('/AllteamsNA', (req, res) => {

    AlleventsOBJNA = []

    for (let i = 0; i < eventsNA.length; i++) {

        let obj = {
            event: eventsNA[i],
            date: datesNA[i],
            status: statusNA[i]
        }
        AlleventsOBJNA.push(obj)

    }

    // res.send(AlleventsOBJNA)
    res.send({ success: true, results: AlleventsOBJNA,  totalitems:AlleventsOBJNA.length })


})
app.get('/AllteamsEU', (req, res) => {

    AlleventsOBJEU = []

    for (let i = 0; i < eventsEU.length; i++) {

        let obj = {
            event: eventsEU[i],
            date: datesEU[i],
            status: statusEU[i]
        }
        AlleventsOBJEU.push(obj)

    }

    // res.send(AlleventsOBJEU)
    res.send({ success: true, results: AlleventsOBJEU,  totalitems:AlleventsOBJEU.length })


})
app.get('/AllteamsBR', (req, res) => {

    AlleventsOBJBR = []

    for (let i = 0; i < eventsBR.length; i++) {

        let obj = {
            event: eventsBR[i],
            date: datesBR[i],
            status: statusBR[i]
        }
        AlleventsOBJBR.push(obj)

    }

    // res.send(AlleventsOBJBR)
    res.send({ success: true, results: AlleventsOBJBR,  totalitems:AlleventsOBJBR.length })


})
app.get('/AllteamsAP', (req, res) => {

    AlleventsOBJAP = []

    for (let i = 0; i < eventsAP.length; i++) {

        let obj = {
            event: eventsAP[i],
            date: datesAP[i],
            status: statusAP[i]
        }
        AlleventsOBJAP.push(obj)

    }

    // res.send(AlleventsOBJAP)
    res.send({ success: true, results: AlleventsOBJAP,  totalitems:AlleventsOBJAP.length })


})
app.get('/AllteamsKR', (req, res) => {

    AlleventsOBJKR = []

    for (let i = 0; i < eventsKR.length; i++) {

        let obj = {
            event: eventsKR[i],
            date: datesKR[i],
            status: statusKR[i]
        }
        AlleventsOBJKR.push(obj)

    }

    // res.send(AlleventsOBJKR)
    res.send({ success: true, results: AlleventsOBJKR,  totalitems:AlleventsOBJKR.length })


})
app.get('/AllteamsJP', (req, res) => {

    AlleventsOBJJP = []

    for (let i = 0; i < eventsJP.length; i++) {

        let obj = {
            event: eventsJP[i],
            date: datesJP[i],
            status: statusJP[i]
        }
        AlleventsOBJJP.push(obj)

    }

    // res.send(AlleventsOBJJP)
    res.send({ success: true, results: AlleventsOBJJP,  totalitems:AlleventsOBJJP.length })


})
app.get('/AllteamsLA', (req, res) => {

    AlleventsOBJLA = []

    for (let i = 0; i < eventsLA.length; i++) {

        let obj = {
            event: eventsLA[i],
            date: datesLA[i],
            status: statusLA[i]
        }
        AlleventsOBJLA.push(obj)

    }

    // res.send(AlleventsOBJLA)
    res.send({ success: true, results: AlleventsOBJLA,  totalitems:AlleventsOBJLA.length })


})
app.get('/AllPlayers',(req,res)=>{
    
    res.send({success:true , totalresults:AllPlayers.length,results:AllPlayers})
})
app.get('/detailedData', (req, res) => {

    AlleventsOBJLA = []
    let k = 0

    for (let i = 0; i < AllPlayers.length; i++) {

        let obj = {
            
            playername: AllPlayers[i],
            playTeam: AllPlayersTeams[i],
            roundplayed: AllPlayersRND[i],


            Acs : AllPlayersKD[k],
            KD : AllPlayersKD[k + 1],
            KASTratio : AllPlayersKD[k + 2],
            AvgDamagePerRound : AllPlayersKD[k + 3],
            KillsPerRound : AllPlayersKD[k + 4],
            AssistsPerRound : AllPlayersKD[k + 5],
            FirstKillsPerRound : AllPlayersKD[k + 6],
            FirstDeathsPerRound : AllPlayersKD[k + 7],
            HeadshotPercentage : AllPlayersKD[k + 8],
            ClutchSuccess : AllPlayersKD[k + 9],
        }
        AllMightyPlayerData.push(obj)
        k = k+ 10

    }
    res.send({success:true , totalresults:AllPlayers.length,results:AllMightyPlayerData})

  
})






//ALL TEAMS -----------------------------



// ALL EVENTS --------------------------------
request('https://www.vlr.gg/events', cb1);


function cb1(error, response, html) {
    if (error) {
        console.log(error);
    } else {

        handleEvents(html)
    }
}


function handleEvents(html) {

    let selTool = cheerio.load(html)

    let allevents = selTool('.event-item-title')


    for (let i = 0; i < allevents.length; i++) {
        let data = selTool(allevents[i]).text()

        AlleventsARR.push(data.trim())


    }


    let Dates = selTool('.event-item-desc-item.mod-dates')

    for (let i = 0; i < Dates.length; i++) {
        //     let data = selTool(Dates[i]).text()
        let data = selTool(Dates[i]).text()
        let goodData = data.trim().slice(0, 10).replace('\t', "")
        AllDates.push(goodData.replace("\t", "").replace("\t", "").replace("\t", "").replace("\t", ""))
    }





    let status = selTool('.event-item-desc-item-status')
    for (let i = 0; i < status.length; i++) {

        let data = selTool(status[i]).text()
        AllEventsStatus.push(data)



    }

}






request('https://www.vlr.gg/events/north-america', cbNA);


function cbNA(error, response, html) {
    if (error) {
        console.log(error);
    } else {

        handleEventsNA(html)
    }
}


function handleEventsNA(html) {

    let selTool = cheerio.load(html)

    let allevents = selTool('.event-item-title')


    for (let i = 0; i < allevents.length; i++) {
        let data = selTool(allevents[i]).text()

        eventsNA.push(data.trim())


    }


    let Dates = selTool('.event-item-desc-item.mod-dates')

    for (let i = 0; i < Dates.length; i++) {
        //     let data = selTool(Dates[i]).text()
        let data = selTool(Dates[i]).text()
        let goodData = data.trim().slice(0, 10).replace('\t', "")
        datesNA.push(goodData.replace("\t", "").replace("\t", "").replace("\t", "").replace("\t", ""))
    }





    let status = selTool('.event-item-desc-item-status')
    for (let i = 0; i < status.length; i++) {

        let data = selTool(status[i]).text()
        statusNA.push(data)


    }


}





request('https://www.vlr.gg/events/europe', cbEU);


function cbEU(error, response, html) {
    if (error) {
        console.log(error);
    } else {

        handleEventsEU(html)
    }
}


function handleEventsEU(html) {

    let selTool = cheerio.load(html)

    let allevents = selTool('.event-item-title')


    for (let i = 0; i < allevents.length; i++) {
        let data = selTool(allevents[i]).text()

        eventsEU.push(data.trim())


    }


    let Dates = selTool('.event-item-desc-item.mod-dates')

    for (let i = 0; i < Dates.length; i++) {
        //     let data = selTool(Dates[i]).text()
        let data = selTool(Dates[i]).text()
        let goodData = data.trim().slice(0, 10).replace('\t', "")
        datesEU.push(goodData.replace("\t", "").replace("\t", "").replace("\t", "").replace("\t", ""))
    }





    let statuswebsite = selTool('.event-item-desc-item-status')
    for (let i = 0; i < statuswebsite.length; i++) {

        let data = selTool(statuswebsite[i]).text()
        statusEU.push(data)


    }


}
request('https://www.vlr.gg/events/brazil', cbBR);


function cbBR(error, response, html) {
    if (error) {
        console.log(error);
    } else {

        handleEventsBR(html)
    }
}


function handleEventsBR(html) {

    let selTool = cheerio.load(html)

    let allevents = selTool('.event-item-title')


    for (let i = 0; i < allevents.length; i++) {
        let data = selTool(allevents[i]).text()

        eventsBR.push(data.trim())


    }


    let Dates = selTool('.event-item-desc-item.mod-dates')

    for (let i = 0; i < Dates.length; i++) {
        //     let data = selTool(Dates[i]).text()
        let data = selTool(Dates[i]).text()
        let goodData = data.trim().slice(0, 10).replace('\t', "")
        datesBR.push(goodData.replace("\t", "").replace("\t", "").replace("\t", "").replace("\t", ""))
    }





    let statuswebsite = selTool('.event-item-desc-item-status')
    for (let i = 0; i < statuswebsite.length; i++) {

        let data = selTool(statuswebsite[i]).text()
        statusBR.push(data)


    }


}



request('https://www.vlr.gg/events/asia-pacific', cbAP);


function cbAP(error, response, html) {
    if (error) {
        console.log(error);
    } else {

        handleEventsAP(html)
    }
}


function handleEventsAP(html) {

    let selTool = cheerio.load(html)

    let allevents = selTool('.event-item-title')


    for (let i = 0; i < allevents.length; i++) {
        let data = selTool(allevents[i]).text()

        eventsAP.push(data.trim())


    }


    let Dates = selTool('.event-item-desc-item.mod-dates')

    for (let i = 0; i < Dates.length; i++) {
        //     let data = selTool(Dates[i]).text()
        let data = selTool(Dates[i]).text()
        let goodData = data.trim().slice(0, 10).replace('\t', "")
        datesAP.push(goodData.replace("\t", "").replace("\t", "").replace("\t", "").replace("\t", ""))
    }





    let statuswebsite = selTool('.event-item-desc-item-status')
    for (let i = 0; i < statuswebsite.length; i++) {

        let data = selTool(statuswebsite[i]).text()
        statusAP.push(data)


    }




}


request('https://www.vlr.gg/events/korea', cbKR);


function cbKR(error, response, html) {
    if (error) {
        console.log(error);
    } else {

        handleEventsKR(html)
    }
}


function handleEventsKR(html) {

    let selTool = cheerio.load(html)

    let allevents = selTool('.event-item-title')


    for (let i = 0; i < allevents.length; i++) {
        let data = selTool(allevents[i]).text()

        eventsKR.push(data.trim())


    }


    let Dates = selTool('.event-item-desc-item.mod-dates')

    for (let i = 0; i < Dates.length; i++) {
        //     let data = selTool(Dates[i]).text()
        let data = selTool(Dates[i]).text()
        let goodData = data.trim().slice(0, 10).replace('\t', "")
        datesKR.push(goodData.replace("\t", "").replace("\t", "").replace("\t", "").replace("\t", ""))
    }





    let statuswebsite = selTool('.event-item-desc-item-status')
    for (let i = 0; i < statuswebsite.length; i++) {

        let data = selTool(statuswebsite[i]).text()
        statusKR.push(data)


    }


}



request('https://www.vlr.gg/events/japan', cbJP);


function cbJP(error, response, html) {
    if (error) {
        console.log(error);
    } else {

        handleEventsJP(html)
    }
}


function handleEventsJP(html) {

    let selTool = cheerio.load(html)

    let allevents = selTool('.event-item-title')


    for (let i = 0; i < allevents.length; i++) {
        let data = selTool(allevents[i]).text()

        eventsJP.push(data.trim())


    }


    let Dates = selTool('.event-item-desc-item.mod-dates')

    for (let i = 0; i < Dates.length; i++) {
        //     let data = selTool(Dates[i]).text()
        let data = selTool(Dates[i]).text()
        let goodData = data.trim().slice(0, 10).replace('\t', "")
        datesJP.push(goodData.replace("\t", "").replace("\t", "").replace("\t", "").replace("\t", ""))
    }





    let statuswebsite = selTool('.event-item-desc-item-status')
    for (let i = 0; i < statuswebsite.length; i++) {

        let data = selTool(statuswebsite[i]).text()
        statusJP.push(data)


    }


}



request('https://www.vlr.gg/events/latin-america', cbLA);


function cbLA(error, response, html) {
    if (error) {
        console.log(error);
    } else {

        handleEventsLA(html)
    }
}


function handleEventsLA(html) {

    let selTool = cheerio.load(html)

    let allevents = selTool('.event-item-title')


    for (let i = 0; i < allevents.length; i++) {
        let data = selTool(allevents[i]).text()

        eventsLA.push(data.trim())


    }


    let Dates = selTool('.event-item-desc-item.mod-dates')

    for (let i = 0; i < Dates.length; i++) {
        //     let data = selTool(Dates[i]).text()
        let data = selTool(Dates[i]).text()
        let goodData = data.trim().slice(0, 10).replace('\t', "")
        datesLA.push(goodData.replace("\t", "").replace("\t", "").replace("\t", "").replace("\t", ""))
    }





    let statuswebsite = selTool('.event-item-desc-item-status')
    for (let i = 0; i < statuswebsite.length; i++) {

        let data = selTool(statuswebsite[i]).text()
        statusLA.push(data)


    }


}

request('https://www.vlr.gg/rankings', cbT);


function cbT(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        // console.log(response && response.statusCode);
        handleEventsrank(html)
    }
}


function handleEventsrank(html) {


    let selTool = cheerio.load(html)
    // console.log(selTool.html())
    let allevents = selTool('.rank-item-team div')
    // console.log(event);

    for (let i = 0; i < allevents.length; i++) {
        let data = selTool(allevents[i]).text()
        // console.log(data.trim());
        eventsTeamsAll.push(data.replaceAll('\t', "").replaceAll('\n', ""))


    }
    // console.log(eventsTeamsAll); 
    // console.log(eventsTeamsAll.length);


}

request('https://www.vlr.gg/stats', cbPD);


function cbPD(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        // console.log(response && response.statusCode);
        handleAllPlayers(html)
    }
}


function handleAllPlayers(html) {


    let selTool = cheerio.load(html)
    let allevents = selTool('.text-of')

    for (let i = 0; i < allevents.length; i++) {
        let data = selTool(allevents[i]).text()
        // console.log(data.trim());
        AllPlayers.push(data) 


    }  

    // console.log(AllPlayers);
    console.log(AllPlayers.length);
    


    handleTeams(selTool)
}

function handleTeams(selTool) {

    let playerteam = selTool('.stats-player-country')

         for (let i = 0; i < playerteam.length; i++) {
            let data = selTool(playerteam[i]).text()
            // console.log(data.trim());
            AllPlayersTeams.push(data) 


        } 
        console.log(AllPlayersTeams.length);


    handleRoundPlays(selTool)

}


function handleRoundPlays(selTool){
    let playerRND = selTool('.mod-rnd')

     for (let i = 1; i < playerRND.length; i++) {
        let data = selTool(playerRND[i]).text()
        // console.log(data.trim());
        AllPlayersRND.push(data) 

     
    } 
    console.log(AllPlayersRND.length);

    handleKD(selTool)

}


function handleKD(selTool){

    let playerKD = selTool('.color-sq span')

     for (let i = 0; i < playerKD.length; i++) {
        let data = selTool(playerKD[i]).text()
        // console.log(data.trim());
        AllPlayersKD.push(data) 

     
    } 
    console.log(AllPlayersKD.length);


}




app.listen(3000, () => { console.log("server started") })