const convertTime = (seconds) =>{
    if(seconds == ""){
      return ""
    }
    else{
      seconds = parseInt(seconds);

      if (seconds <= 59){
        return `${seconds} secs ago`
      }

      else if(seconds <= 60*60)
      {
        return `${parseInt(seconds / (60))} mins ago` // mins
      }

      else if(seconds <= 60*60*24) // mins and hour
      {
        return `${parseInt(seconds/(60*60))} hrs ${seconds % (60*60)} mins ago`
      }

      else if(seconds <= 60*60*24*365){
        return `${parseInt(seconds/(60*60*24))} days ago`
      }

      else{
        return `${parseInt(seconds/(60*60*24*365))} years ago`
      }
    } 

}



console.log(convertTime("1672656000"))

