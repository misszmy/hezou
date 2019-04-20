// JavaScript Document
//产品详情页left内容浮动
$(document).ready(function(){
     $(window).scroll(function(){
     var mytop=$(window).scrollTop();
      //导航智能浮动
     if (mytop>750){
         $("#tab_nav").addClass("floatnv").find(".liuwater").show();
          }else{
          $("#tab_nav").removeClass("floatnv").find(".liuwater").hide();
            }
      //定位
      var top=$(document).scrollTop();
      var menu=$("#tab_nav");
      var items=$("#content").find(".item");
      var currentId="";
      items.each(function(){
        var m=$(this);
        var itemTop=m.offset().top;
        if(top>itemTop){
          currentId="#"+m.attr("id");
        }
        else{
         return false;
     }
      });
      var currentLink=menu.find(".current");
      if(currentId && currentLink.attr("href")!=currentId){
        currentLink.removeClass("current");
        menu.find("[href="+currentId+"]").addClass("current");
      }
         });
    });
$(function(){
	$(".pring li dl dd ul li").each(function(){
		$(this).find("dl").each(function(i){
			if(i%3==2){
				$(this).css("padding-right","0");
			}
		})
	})
	//搜索
	$(".search").focus(function(){
		if($(this).val()=='搜索目的地/攻略/酒店/产品或帖子编号'){
			var index=$(this).val();
		}
		if(index==this.defaultValue){
			$(this).val("").css("color","#000");
		};
	});
	$(".search").blur(function(){
		var index=$(this).val();
		if(index==""){
			$(this).val(this.defaultValue).css("color","#ccc");
			};
		});
	//商家产品选项
	$(".rightj").click(function(){
		var $selecLi = $(".selce1 li.gover");
		$selecLi.appendTo(".selce2");
	});
	$(".leftj").click(function(){
		var $selecLi = $(".selce2 li.gover");
		$selecLi.appendTo(".selce1");
	});
	$('[name=goman]:checkbox').click(function(){
		if(this.checked){
			$(this).parent().addClass("gover");
		}else{
			$(this).parent().removeClass("gover");
		};
		var flag=true;
		$('[name=goman]:checkbox').each(function(){
			if(!this.checked){
				flag=false;
			}
		});
		$('#checkyou').attr('checked',flag);
	});
	$("#checkyou").click(function(){
		if(this.checked){
			$('[name=goman]:checkbox').attr("checked", true);
			$(".hao li").addClass("gover");
		}else{
			$('[name=goman]:checkbox').attr("checked", false);
			$(".hao li").removeClass("gover");
		}
	});
	$(".wrap_740 h1").addClass("gund");
	//优惠券
	$(".gogo li").click(function(){
		$(this).addClass("ahover").siblings().removeClass("ahover");
		var go=$(".gogo li").index(this);
		$(".kuqi section").eq(go).show().siblings().hide();
	})
	$(".kuqi ul.english").each(function(){
		$(this).find("li").each(function(i){
			if(i%4==3){
			     $(this).css("margin-right","0");
		     }
		})
	})
	//景点
	$(".otext dt span").hover(function(){
		$(".otext dt div").show();
	},function(){
		$(".otext dt div").hide();
	})
	$(".second dl").css("padding-bottom","0");
	$(".sxiao .tj-pro li:last-child").css("margin-right","0");
	$(".greng").each(function(){
		$(this).find("a").each(function(i){
			if(i%9==8){
				$(this).css("margin-right","0");
			}
		})
	 })
	//帮助页面
	$(".helpme dt").click(function(){
	   $(this).next().toggle();
    })
	//带爸妈旅行
	$(".paroduct").each(function(){
		$(this).find("li").each(function(i){
			if(i%2==1){
				$(this).css({"margin-right":"0","float":"right"});
			}
		})
	})
	$(".loney").each(function(){
		$(this).find("dd").each(function(i){
			if(i%3==2){
				$(this).css({"margin-right":"0","float":"right"});
			}
		})
	})
	$(".mother").each(function(){
		$(this).find("article").each(function(i){
			if(i%3==2){
				$(this).css({"margin-right":"0","float":"right"});
			}
		})
	})
	$(".gook").each(function(){
		$(this).find("aside").each(function(i){
			if(i%2==1){
				$(this).css({"margin-right":"0","float":"right"});
			}
		})
	})
	//下单页
	$(".pcleft p a").each(function(){
		var maxwidth=25;
		if($(this).text().length>maxwidth){
			$(this).text($(this).text().substring(0,maxwidth));
			$(this).html($(this).html()+'…');
		}
	});
	//icon
	$(".icon li:last").css("padding-right","0");
	$(".lvcheng li:last,.second dl:last,.one dl:last,.tggo_bottom div.tggo:last").css({"margin-right":"0","float":"right"});
	$(".boke li").eq(0).css("margin-left","0");
	$(".coyp dl:last").css("margin-right","0");
	$(".tuing").each(function(){
		$(this).find("li:last").css("margin-right","0");
		});
	$(".tu_pr li:last,.tguang li:last,.tgcot > div.tggo:last").css("margin-right","0");
	$(".lging li:last").css("padding-bottom","0");
	$(".link li").each(function(){
		$(this).find("a:last").css("margin-right","0");
		});
	$(".tgcotain,.tgcot").each(function(){
		$(this).find("div.rain:last").css({"margin-right":"0","float":"right"});
		$(this).find("div.tggo:last").css({"margin-right":"0","float":"right"});
	});
	//专题
	$(".haid").each(function(){
		$(this).find(".gosea").each(function(i){
			if(i%2==1){
				$(this).css("margin-right","0");
			}
		})
	});
	$(".haid").each(function(){
		$(this).find(".okting").each(function(i){
			if(i%3==2){
				$(this).css("margin-right","0");
			}
		});
	});
	$(".bottfu a:last-child").css("margin-right","0");
	//产品详情
	$(".bihehe li").on("click",function(){
		var tising=$(".bihehe li").index(this);
		$(this).addClass("mabing").siblings().removeClass("mabing");
		$(".binggo section").eq(tising).show().siblings().hide();
	});

	//产品详情
	$(".bihehe").find("p").on("click",function(){
		var tising=$(".bihehe p").index(this);
		$(this).addClass("mabing").siblings().removeClass("mabing");
		$(".binggo section").eq(tising).show().siblings().hide();
	});

	$(".detail_infor").eq(0).css("padding-top","10px");
	$(".pro_info ul.qiu li,.pong_c ul.qiu li").hover(function(){
		$(this).find("div").show();
	},function(){
		$(this).find("div").hide();
	})
	$(".wren li:last-child").css("background","url(/Public/images/is.png) left top no-repeat");
	$(".pingl:last").css("margin-bottom","25px");
	//图片路径不存在
	 $(".prong_u img,.lvcheng li img,.hgr01 img,.tj-pro li img").error(function() { 
		 $(this).attr("src", "/Public/images/error.jpg");
	 });
	 $("#pro_viwe .pro_pic img").error(function(){
	 	$(this).attr("src", "/Public/images/errt.jpg");
	 })
	 $(".hgr01 dl.onwidth img").error(function() { 
		 $(this).attr("src", "/Public/images/nothing.jpg");
	 });
	 $(".hgr02 dt a img").error(function() { 
		 $(this).attr("src", "/Public/images/not.jpg");
	 });
	 $(".banner img").error(function() {
		$(this).attr("src", "/Public/images/long.jpg");
	 });
	$(".photo img").error(function() {
		$(this).attr("src", "/Public/images/avatar.png");
	 });
	 //文字多行限制
	$(".hgr01 dd h3 a,.hgr02 dd h3 a").each(function(){
		 var maxwidth=47;
		  if($(this).text().length>maxwidth){
			   $(this).text($(this).text().substring(0,maxwidth));
			   $(this).html($(this).html()+'...');
			}
		});
	//出国旅游
	$(".third").each(function() {
        $(this).find("dl").each(function(i) {
            if(i%3==2){
				$(this).css({"margin-right":"0","float":"right"});
				}
        });
    });
    $(".userping:last-child").css("border-bottom","none");
    //左侧菜单
    	//$(".youmenu li a").hover(function(){
    	//	$(this).addClass("cgo").parent().siblings().children("a").removeClass("cgo");
    	//})
    $(".tgchina").each(function(){
    	$(this).find("article").each(function(i){
    		if(i%2==1){
    			$(this).css({"margin-right":"0","float":"right"});
    		}
    	})
    })
    $(".tgchina article").eq(0).css("margin-bottom","17px").end().eq(1).css("margin-bottom","17px").end().eq(4).css("margin-bottom","17px").end().eq(5).css("margin-bottom","17px")
    .end().eq(8).css("margin-bottom","17px").end().eq(9).css("margin-bottom","17px");
    //产品名称
    var $category = $('.pring li.active dl dd a:gt(15)');
    $category.hide();
	var $toggleBtn = $(".pring li span");
	$toggleBtn.click(function(){
		if($category.is(":visible")){
			$category.hide();
			$(this).css("background","url(/Public/images/tou.png) no-repeat right 12px");
			}else{
				$category.show();
				$(this).css("background","url(/Public/images/tou_down.png) no-repeat right 12px")
				}
		})
	//风向标
	$(".angel li").mouseover(function(){
		$(this).find("a").children("span").addClass("bingx");
	}).mouseout(function(){
		$(this).find("a").children("span").removeClass("bingx");
	})
})
$(function(){
	var numpic = $('#slides li').size()-1;
	var nownow = 0;
	var inout = 0;
	var TT = 0;
	var SPEED = 5000;

	$('#slides li').eq(0).siblings('li').css({'display':'none'});
	var ulstart = '<ul id="pagination">',
		ulcontent = '',
		ulend = '</ul>';
	ADDLI();
	var pagination = $('#pagination li');
	var paginationwidth = $('#pagination').width();
	//$('#pagination').css('margin-left',(470-paginationwidth))

	pagination.eq(0).addClass('current')
	function ADDLI(){
		//var lilicount = numpic + 1;
		for(var i = 0; i <= numpic; i++){
			ulcontent += '<li>' + '<a href="#">' + (i+1) + '</a>' + '</li>';
		}
		$('#slides').after(ulstart + ulcontent + ulend);
	}

	pagination.on('click',DOTCHANGE)

	function DOTCHANGE(){
		var changenow = $(this).index();

		$('#slides li').eq(nownow).css('z-index','900');
		$('#slides li').eq(changenow).css({'z-index':'800'}).show();
		pagination.eq(changenow).addClass('current').siblings('li').removeClass('current');
		$('#slides li').eq(nownow).fadeOut(400,function(){$('#slides li').eq(changenow).fadeIn(500);});
		nownow = changenow;
	}

	pagination.mouseenter(function(){
		inout = 1;
	})

	pagination.mouseleave(function(){
		inout = 0;
	})
	function GOGO(){
		var NN = nownow+1;

		if( inout == 1 ){
			} else {
			if(nownow < numpic){
			$('#slides li').eq(nownow).css('z-index','900');
			$('#slides li').eq(NN).css({'z-index':'800'}).show();
			pagination.eq(NN).addClass('current').siblings('li').removeClass('current');
			$('#slides li').eq(nownow).fadeOut(400,function(){$('#slides li').eq(NN).fadeIn(500);});
			nownow += 1;

		}else{
			NN = 0;
			$('#slides li').eq(nownow).css('z-index','900');
			$('#slides li').eq(NN).stop(true,true).css({'z-index':'800'}).show();
			$('#slides li').eq(nownow).fadeOut(400,function(){$('#slides li').eq(0).fadeIn(500);});
			pagination.eq(NN).addClass('current').siblings('li').removeClass('current');

			nownow=0;

			}
		}
		TT = setTimeout(GOGO, SPEED);
	}

	TT = setTimeout(GOGO, SPEED);
});
//顶部
$(document).ready(function(){
     $(window).scroll(function(){
     var mytop=$(window).scrollTop();
      //导航智能浮动
     if (mytop>350){
         $(".youmenu dl").addClass("floatyou");
          }else{
          $(".youmenu dl").removeClass("floatyou");
            }
     if (mytop>320){
         $(".mleft dl").addClass("floatyou");
          }else{
          $(".mleft dl").removeClass("floatyou");
            }
     if (mytop>350){
         $(".youmenu ul").addClass("goung");
          }else{
          $(".youmenu ul").removeClass("goung");
           };
      });
    });
	
//产品列表城市筛选

$(document).ready(function(){
	/*						
	$(".select dl dd").click(function () {
		alert(1);
		$(this).addClass("selected").siblings().removeClass("selected");
		$(this).addClass("selected").parent().siblings().children("dd").removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectA").remove();
		} else {
			var copyThisA = $(this).clone();
			if ($("#selectA").length > 0) {
				$("#selectA a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisA.attr("id", "selectA"));
			}
		}
	});
	
	$(document).on("click","#selectA", function () {
		alert(2);
		$(this).remove();
		$("#select1 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	$(document).on("click",".select dd", function () {
		alert(3);
		if ($(".select-result dd").length > 1) {
			$(".select-no").hide();
		} else {
			$(".select-no").show();
		}
	});*/
	
	$("#country").hover(function(){
		$(".country").show();
		$("a.guonei").css("color","#a05cbc")
	  },function(){
		$(".country").hide();
		$("a.guonei").css("color","")
	})

	$("#abroad").hover(function(){
		$(".abroad").show();
		$("a.guowai").css("color","#a05cbc")
	  },function(){
		$(".abroad").hide();
		$("a.guowai").css("color","")
	})
	

      		$(".wisha").each(function(){
      			$(this).find("li").each(function(i){
      				if(i%2==1){
      					$(this).css("margin-right","0")
      				}
      			})
      		})
      		$(".my-tj-pro").each(function(){
      			$(this).find("li").each(function(i){
      				if(i%3==2){
      					$(this).css("margin-right","0")
      				}
      			})
      		});
	//产品详情页置顶
	$(window).scroll(function(){
		if ($(this).scrollTop() >= 600) {
			$('#pro_top').fadeIn(200);
		}else{
			$('#pro_top').fadeOut(200);
		}
	});

	$('#pro_top').click(function(){
		$('html,body').animate({
			'scrollTop': 0
		},500)
	});

	function topBtn(){
		if( $(this).width()<= 1350 ) {
			$('#pro_top').css({
				'right' : 0,
				'marginRight' : 'auto'
			});
		}else{
			$('#pro_top').css({
				'right' : '50%',
				'marginRight' : '-640px'
			});
		}
	}

	topBtn();
	$(window).resize(function() {
		topBtn();
	});

});
