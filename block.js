// Klasse Block
class Block{

    //Konstruktor + Parameter
    constructor(timestamp, lastHash, hash, data){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }//end constructor

    //für debugging-Zweck, Inhalt des Objekts
    toString(){
        return ` 
        ----------- Block -----------
        Timestamp:  ${this.timestamp}
        Last Hash:  ${this.lastHash.substring(0,10)}
        Hash:       ${this.hash.substring(0,10)}
        Data:       ${this.data}
        `;

    }//end toString()

    // Block 0 - Start Block
    static genesis(){
        return new this("Genesis time", "no Hash", "abc1234", ["no Data"]);
    }//end genesis()

    // zweiter Block
    static mineBlock(lastBlock, data){
        const timestamp = Date.now(); //Zeit in ms seit 01.01.1970
        const lastHash = lastBlock.hash;
        const hash = "new Hash";
        return new.this(timestamp, lastHash, hash, data); //call constructor


    }//end mineBlock()




}//end class Block

module.exports = Block; //Export als Modul