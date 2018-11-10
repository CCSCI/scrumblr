function go() {
  var boardname = document.forms[0].elements["boardname"].value;
  var username = document.forms[0].elements["username"].value;
  var pass = document.forms[0].elements["pass"].value;
 if(boardname==''||username==''||pass==''){
    return false
 }
 $.ajax({
     url:'/login',
     dataType:'json',
     data:{
         boardname:boardname,
         username:username,
         password:pass
     },
     success:function(d){
        if(d.msg &&  d.msg==='OK' &&d.token){
            window.location.href=escape(boardname)+'?token='+d.token
        }
    },
     error:function(e){
         console.log(e)
     }
 })
  //   value = escape(boardname);
//   window.location.href = value;
  return false;
}

$(function(){
    $('#board-table').keydown(function (event) {
        if (event.keyCode == 13) {
        $("#go").click();
        }
        });
})
