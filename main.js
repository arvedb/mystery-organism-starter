// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    _specimenNum: specimenNum,
    _dna: dna,

    get specimenNum(){
      return this._specimenNum;
    },

    get dna(){
      return this._dna;
    },

    set specimenNum(value){
      this._specimenNum = value;
    },

    set dna(value){
      this._dna = value;
    },

    mutate(){
      let randomDnaBaseIndex = Math.floor(Math.random()*4);
      let originalBase = this._dna[randomDnaBaseIndex];

      while(this._dna[randomDnaBaseIndex] === originalBase){
        this._dna[randomDnaBaseIndex] = returnRandBase();
      }

      return this._dna;
    },

    compareDNA(pAequor){
      let equalCounter = 0;
      let percentageEqual = 0;

      for (let i = 0; i < pAequor.dna.length; i++) {
        if(pAequor.dna[i] === this.dna[i]){
          equalCounter++;
        }
      }
      percentageEqual = 100*equalCounter/pAequor.dna.length;

      console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percentageEqual.toFixed(2)}% DNA in common.`);
    },

    willLikelySurvive(){
      let countC = 0;
      let countG = 0;

      for (const base of this.dna) {

        switch(base){
          case 'C': 
            countC++; 
            break;
          case 'G': 
            countG++;
        }
      }
      
      let willSurvive = ((100*countC/this.dna.length) >= 60 || (100*countG/this.dna.length) >= 60) ? true : false;
      return willSurvive;
    }

  }
}





// Test-Code

//let testSpecimen1 = pAequorFactory(2,mockUpStrand());
//let testSpecimen2 = pAequorFactory(1,mockUpStrand());
let testSpecimen1 = pAequorFactory(1,['C','G','C']);
let testSpecimen2 = pAequorFactory(2,['A','A','A']);

console.log(testSpecimen1);
console.log(testSpecimen2);
//console.log(testSpecimen1.mutate());
//testSpecimen1.compareDNA(testSpecimen2);
console.log(testSpecimen1.willLikelySurvive());







