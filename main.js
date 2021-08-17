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
    }

  }
}





// Test-Code

let testSpecimen = pAequorFactory(2,mockUpStrand());
console.log(testSpecimen);
console.log(testSpecimen.mutate());






