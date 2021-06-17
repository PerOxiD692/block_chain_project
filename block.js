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
        return ` Block -
        Timestamp:  ${this.timestamp}
        Last Hash:  ${this.lastHash.substring(0,10)}
        Hash:       ${this.hash.substring(0,10)}
        Data:       ${this.data}
        `;

    }//end toString()





}//end class Block