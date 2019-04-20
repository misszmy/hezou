
/**
通栏banner
*/
;(function(global,document,$,undefined){var noop=function(){},slider=global.Slider=function(ops){this.init(ops||{});};slider.prototype={constructor:slider,_ops:{length:3,shell:null,auto:true,cName:'left',duration:200,unitSize:500,delay:5000,easing:'swing',onbeforeplay:noop,onplay:noop},init:function(ops){var self=this,_ops=this._ops;for(var k in _ops){if(typeof ops[k]==='undefined'){ops[k]=_ops[k];}}this.shell=$(ops.shell);this.ops=ops;this.index=-1;this.play(0);if(ops.auto){this.shell.bind('mouseenter.slider',function(){self.stopAuto();}).bind('mouseleave.slider',function(){self.autoPlay();});}},play:function(inx){var self=this,ops=this.ops;inx=~~(inx===undefined?this.index+1:inx)%ops.length;inx=inx<0?ops.length+inx:inx;if(inx===this.index||ops.onbeforeplay.call(this,inx,this.index)===false){return this;}var aniOps={};aniOps[ops.cName]=-inx*ops.unitSize;this.shell.stop().animate(aniOps,ops.duration,ops.easing,function(){ops.onplay.call(self,inx,self.index);self.index=inx;if(ops.auto){self.autoPlay();}});clearTimeout(this.timer);return this;},next:function(){return this.play();},prev:function(){return this.play(this.index-1);},autoPlay:function(){var self=this;this.ops.auto=true;clearTimeout(this.timer);this.timer=setTimeout(function(){self.play();},this.ops.delay);},stopAuto:function(){clearTimeout(this.timer);this.ops.auto=false;}};})(window,document,jQuery);

//Home Banner
	jQuery(function($){
		var 
		rdir = /(prev|next)/,
		shell = $('#banner'),
		shellUl = shell.find('ul').eq(0),
		shellTriggers = shell.find('.triggers a'),
		slider = new Slider({
			cName: 'left',
			length : shellUl.find('li').length,
			shell : shellUl,
			auto : true,
			duration : 400,
			unitSize : 1920,
			onplay: function(inx){
				shellTriggers.removeClass('current');
				shellTriggers.eq(inx).addClass('current');
			}
		});
		shell.mouseover(function(){
				shell.find('.controller').show();
			});
		shell.mouseleave(function(){
				shell.find('.controller').hide();
			});
		shell.find('.controller a').click(function(e){
			e.preventDefault();
			if(rdir.test(this.className)){
				slider[RegExp.$1]();
			}
		});
		shellTriggers.click(function(e){
			slider.play(shellTriggers.index(this));
		});
	});
/**
顶部用户
*/
	$(".head_user li").hover(function(){
			$(this).addClass("hover");
			$(this).children("ul li").attr('class','');
		},function(){
			$(this).removeClass("hover");  
			$(this).children("ul li").attr('class','');
		}
	); 
$(document).ready(function(){
$(".say-list li:even,.comment-list li:even").addClass("eqa");//偶数行的背景色
$(".say-list li:odd,.comment-list li:odd").addClass("eqb");//奇数行的背景色
$(".say-list li,.comment-list li").hover(
function(){$(this).addClass("eqc")},
function(){$(this).removeClass("eqc")
});//鼠标移动改变背景色
});


function words_deal() 
{ 
var curLength=$("#textArea").val().length; 
if(curLength>300) 
{ 
var num=$("#textArea").val().substr(0,300); 
$("#textArea").val(num); 
alert("写太多了吧~~" ); 
} 
else 
{ 
$("#textCount").text(300-$("#textArea").val().length); 
} 
} 

//产品第二列排序
$(function(){
	$(".column_con").each(function(){
		$(this).find("dl").each(function(i){
			if(i%2==1){
				$(this).css("margin-right","0");
				}
			})
		})
	})
