class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];
    
    return Math.floor(Math.random() * 3);
  }

  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection)
  {
    if (userSelection == cpuSelection)
    {
      return "tie"
    }
    else if (userSelection == 'rock')
    {
      if (cpuSelection == 'scissors'){
        return "wins"
      }
      else {
        return "lose"
      }
    }
    else if (userSelection == 'paper')
    {
      if (cpuSelection == 'rock'){
        return "wins"
      }
      else {
        return "lose"
      }
    }
    else 
    {
      if (cpuSelection == 'paper'){
        return "wins"
      }
      else {
        return "lose"
      }
    }
  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
    let cpuSelection = this.generateCPUResponse();
    if(this.determineWinner(userSelection, cpuSelection) == 'win')
    {
      this.score.user++;
      this.gameHistoryLog.push(this.username.user + " selected " + userSelection + ", CPU selected " + cpuSelection + ": " + this.username.user + "wins.")
    }
    else if(this.determineWinner(userSelection, cpuSelection) == 'lose')
    {
      this.score.cpu++;
      this.gameHistoryLog.push(this.username.user + " selected " + userSelection + ", CPU selected " + cpuSelection + ": CPU wins.")
    }
    else 
    {
      this.gameHistoryLog.push(this.username.user + " selected " + userSelection + ", CPU selected " + cpuSelection + ": There was a Tie.")
    }
  }

}