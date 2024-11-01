function findTheKiller(whisper, suspects) {
    const whisperEnds = whisper[whisper.length - 1] === '$';
    const whisperLength = whisperEnds ? whisper.length - 1 : whisper.length;
    const suspectList = [];
  
    suspects.forEach((suspect) => {
      if ((whisperEnds && whisperLength !== suspect.length) 
      || suspect.length < whisperLength) {
        return;
      }
  
      for (let i = 0; i < whisperLength; i++) {
        if (whisper[i] !== '~' && whisper[i].toLowerCase() 
        !== suspect[i].toLowerCase()) {
          return;
        }
      }
  
      suspectList.push(suspect);
    });
  
    return suspectList.join(',');
  }