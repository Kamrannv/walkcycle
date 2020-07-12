var slider = document.getElementById("myRange");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");


slider.oninput = function(){
	if (this.value < 15){
		one.classList.remove("hidden");
		two.classList.add("hidden");
		three.classList.add("hidden");
		four.classList.add("hidden");
		five.classList.add("hidden");
		six.classList.add("hidden");
		seven.classList.add("hidden");
		eight.classList.add("hidden");
	}else if(this.value>=15 && this.value < 30){
		one.classList.add("hidden");
		two.classList.remove("hidden");
		three.classList.add("hidden");
		four.classList.add("hidden");
		five.classList.add("hidden");
		six.classList.add("hidden");
		seven.classList.add("hidden");
		eight.classList.add("hidden");
	}else if(this.value>=30 && this.value < 45){
		one.classList.add("hidden");
		two.classList.add("hidden");
		three.classList.remove("hidden");
		four.classList.add("hidden");
		five.classList.add("hidden");
		six.classList.add("hidden");
		seven.classList.add("hidden");
		eight.classList.add("hidden");
	}else if(this.value>=45 && this.value < 60){
		one.classList.add("hidden");
		two.classList.add("hidden");
		three.classList.add("hidden");
		four.classList.remove("hidden");
		five.classList.add("hidden");
		six.classList.add("hidden");
		seven.classList.add("hidden");
		eight.classList.add("hidden")
	}else if(this.value>=60 && this.value < 75){
		one.classList.add("hidden");
		two.classList.add("hidden");
		three.classList.add("hidden");
		four.classList.add("hidden");
		five.classList.remove("hidden");
		six.classList.add("hidden");
		seven.classList.add("hidden");
		eight.classList.add("hidden");

}else if(this.value>=75 && this.value < 85){
		one.classList.add("hidden");
		two.classList.add("hidden");
		three.classList.add("hidden");
		four.classList.add("hidden");
		five.classList.add("hidden");
		six.classList.remove("hidden");
		seven.classList.add("hidden");
		eight.classList.add("hidden");
	}


else if(this.value>=85 && this.value < 90){
		one.classList.add("hidden");
		two.classList.add("hidden");
		three.classList.add("hidden");
		four.classList.add("hidden");
		five.classList.add("hidden");
		six.classList.add("hidden");
		seven.classList.remove("hidden");
		eight.classList.add("hidden");
	}
	else if(this.value>=90 && this.value < 100){
		one.classList.add("hidden");
		two.classList.add("hidden");
		three.classList.add("hidden");
		four.classList.add("hidden");
		five.classList.add("hidden");
		six.classList.add("hidden");
		seven.classList.add("hidden");
		eight.classList.remove("hidden");
	}
}












