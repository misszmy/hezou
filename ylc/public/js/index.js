/*专门支持index.html页面中所有功能的js文件*/
//当页面加载完成后，自动执行:
$(function(){
  $.ajax({
    url:"http://localhost:3000/index",
    type:"get",
    success:function(result){
      console.log(result);
      var div=document.querySelector("#d1")
      div.innerHTML=result[0];
    }
  })
})