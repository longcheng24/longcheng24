// JavaScript Document
$(document).ready(function(){
	
	//homepage two parts move
	function leftPartClick(){
		$("#leftPart").off("click")
		$("#rightPart").off("click")
		if(($("#rightPart").css("left")).replace(/[^-\d\.]/g, '')==$( window ).width()/2){
			$(this).css("z-index",15)
			$(this).animate({left:'0'},1500)
		}else{
			$("#rightPart").animate({left:'50%'},800)
			$(this).css("z-index",15)
			$("#rightPart").css("z-index",10)
			$(this).animate({left:'0'},1500)
		}
		setTimeout(function(){
			$("#leftPart").on("click",leftPartClick)
			$("#rightPart").on("click",rightPartClick)
		},2100)
	}
	
	function rightPartClick(){
		$("#leftPart").off("click")
		$("#rightPart").off("click")
		if(($("#leftPart").css("left")).replace(/[^-\d\.]/g, '')<0){
				$(this).css("z-index",15)
				$(this).animate({left:'10%'},1500)
			}else{
				$("#leftPart").animate({left:'-40%'},800)
				$(this).css("z-index",15)
				$("#leftPart").css("z-index",10)
				$(this).animate({left:'10%'},1500)
		}
		setTimeout(function(){
			$("#leftPart").on("click",leftPartClick)
			$("#rightPart").on("click",rightPartClick)
		},2100)
	}
		
	$("#leftPart").on("click",leftPartClick)
	$("#rightPart").on("click",rightPartClick)
	
	//left part animation
	$("#education").click(function(){
		$(this).addClass("educationMove");
		$("#education span:first-child").addClass("eduBefore");
		$(this).siblings().addClass("sibilngsMove");
	})
	
	$("#career").click(function(){
		$(this).addClass("careerMove");
		$("#career span:first-child").addClass("carBefore");
		$("#career span:nth-child(2)").addClass("careerAfterMove");
		$(this).siblings().addClass("sibilngsMove");
	})
	
	$("#design").click(function(){
		$(this).addClass("designMove");
		$("#design span:nth-child(2)").addClass("dsgAfter");
		$(this).siblings().addClass("sibilngsMove");
	})
	
})
