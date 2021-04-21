var Month; var Day;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question(`Enter Month: `, Month => {
    console.log(`Month is ${Month}`)

    readline.question(`Enter Day: `, Day => {
        console.log(`Day is ${Day}`)
        checkStatus(Month, Day)
        readline.close();
    })
})
  function checkStatus(Month, Day) {
      if(( (Month <= 6 & Day <= 20) )){
      console.log( "Month & Day are True ")
      } else{
          console.log(" Month and Day are False ")
      }
      if(( (Month >= 3 & Month < 6) & (Day <= 20)  )){
          console.log("Month and Day are True ")
      } else{
          console.log("Month and Day are False ")
      }

      

    
  }

