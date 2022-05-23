function shout(string) {
    // todo
    return string.toUpperCase();
  }

  function whisper(string) {
    // todo
    return string.toLowerCase();
  }

  function logShout(string) {
    // todo
    console.log(string.toUpperCase());
  }

  function logWhisper(string) {
    // todo
    console.log(string.toLowerCase());
  }

  function sayHiToHeadphonedRoommate(string){
      if(string.toLowerCase() === string){
          return "I can't hear you!";
      }
      else if(string.toUpperCase() === string){
          return "YES INDEED!";
      }
      else 
        return "I would love to!";
  }