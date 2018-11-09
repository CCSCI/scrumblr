var data=require('../lib/data.js').db
var db = new data(function() {
    var u=process.argv[2]
    var p=process.argv[3]
    if(u && p){
    db.setUser(u,p,()=>{
        console.log('Done!')
        process.exit()
    })
} else{
    console.log('Usage: node tools/createUser.js  [user] [pass]')
}
});