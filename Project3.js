//Project 3: Credentials

var items = new Array();
items[0] = document.getElementById("interests");
items[1] = document.getElementById("courses");

console.log(menuItem);

for(var menuItem in items){
  items[menuItem].addEventListener("click", function(){
      console.log(this);
      /* this.classList.toggle("active"); */
      var list = this.nextElementSibling;
      console.log(list);
      if(list.style.maxHeight){
          console.log(list.style.maxHeight);
          list.style.maxHeight = null;
      }
      else{
          console.log(list.scrollHeight);
          list.style.maxHeight = list.scrollHeight + "px";
      }
  });
}

function Course(dept, num, title){
  this.department = dept;
  this.number = num;
  this.title = title;
}

function inputInterest(RI){
  var lst = document.getElementById("interestlist");
  var entry = document.createElement("p");
  entry.innerHTML = RI;
  lst.appendChild(entry);
}

function inputCourse(course){
  var lst = document.getElementById("courselist");
  var entry = document.createElement("p");
  entry.innerHTML = course.department + " " + course.number + ": " + course.title;
  lst.appendChild(entry);
}

var interests = new Array();
interests[0] = "Virtual Reality";
interests[1] = "Haptic Feedback";
interests[2] = "Fitts' Law";

for(var i = 0; i < interests.length; i++){
  inputInterest(interests[i]);
}

var courses = new Array();
courses[0] = new Course("HCSC", 330, "Web Programming");
courses[1] = new Course("HCSC", 425, "Artificial Intelligence");
courses[2] = new Course("HCSC", 480, "Artificial Intelligence and Machine Learning in Manufacturing Concepts");

for(var j = 0; j < courses.length; j++){
  inputCourse(courses[j]);
}