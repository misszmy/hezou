//  Initialize Swiper 轮播图
var swiper = new Swiper('.swiper-container', {
    delay: 1000, //1秒切换一次
    autoplay: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  // 分页器
  $(function() {
    $("#pagination2").pagination({
      currentPage: 1,//当前默认选中页数
      totalPage: 4, //总页数
      isShow: false, //首尾页的现实
      count: 4,  //显示页数 
      prevPageText: "< 上一页",
      nextPageText: "下一页 >",
      callback: function(current) {
        $("#current2").text(current)
      }
    });
  });