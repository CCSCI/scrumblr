const PlainEncoder={
    encode:i=>i
}
/**
 * to fix .. get encoder from config or env
 */
const getEncoder=()=>PlainEncoder
/**
 *  encode input
 * @param {*} input input 
 */
const encode=(input)=>{
    var encoder=getEncoder();
    return encoder.encode(input)
}
const isValidUser=(db,username,passwd,cbYes,cbNo)=>{
        db.getUser(username,function(pss){
                if(encode(pss)==passwd && pss !=undefined){
                    cbYes()
                }else{
                    cbNo()
                }
        })
}
exports.isValidUser= isValidUser