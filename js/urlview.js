// var 5BLEC = 'Lecture',
// 	5BTUT = 'Tutorial',
// 	5BSEC = 'Sectional Teaching',
// 	counter=1;
//model for lesson
var Lesson = Backbone.Model.extend({
  defaults: {
  	moduleCode:'',
  	classNo:'',
  	lessonType:'',
  	weekText:'',
  	dayText:'',
  	startTime:'',
  	endTime:'',
  	venue:'',}
    })
// var Module = Backbone.Collection.extend({
// 	defaults:{
// 		Lesson:'';

// 	}
// })
 var LinkSplitter = Backbone.View.Extend({
 	el:'$nameinput1',

 	initialize: function(){
      _.bindAll(this, "render");
      this.render(new myModel());
    },
 	render: function(){
 		var url = $this.val();
 		//obtaining part of URL with only moduleCodes, lessonType and lessonNo
 		var urlstore = url.split("?");
 		var spliturl = urlstore[urlstore.length-1];
 		//obtaining year and sem
 		var semstore = ((url.split("?")).pop()).split("/");
 		var sem;
    if(semstore[semstore.length-1]=="sem1"){
      sem = 1;
    }
    else if(semstore[semstore.length-1]=="sem2"){
      sem = 2;
    }
 		var year = semstore[semstore.length-2];
 		//count number of lessons
 		var lessonstore = spliturl.split("&");
 		var numberoflessons = lessonstore.length;
 		var numberofmodules; var noofmodules;
 		for(var i=0; i<numberoflessons; i++){
 			var loopstore=lessonstore[i].split("%");
      testvalue=[];
 			testvalue[i] = new Lesson;
      testvalue[i].Lesson = "lesson"+i;
      //loopstore[0]=modCode
      for(var j=0; j<=numberofmodules.length;j++){
        for(var k=0; k<j;k++){
          if(numberofmodules[k]==loopstore[1]){
            continue;
          }
          else{numberofmodules[numberofmodules.length]=loopstore[1];
          break;
          }
          noofmodules= numberofmodules.length;
      }
 			//to prevent different lessons of the
 			//same mod from having the same name
 			//pushing parameters into created lesson instances 
 			("lesson"+i).set({lessonType: "loopstore[1]", classNO: "loopstore[2]"})
 			
      $.getJSON('http://api.nusmods.com/'+year+sem+'/modules/'+loopstore[0]+'.json', function(json){
      modapi= json;
      for(var x=0;x<modapi.Timetable.length;x++){
        var modschedule = modapi.Timetable[k];
        if(modschedule.LessonType==lessontype && modschedule.ClassNo==ClassNO){
          ("lesson"+i).set({
            weekText:modschedule.WeekText,
            dayText:modschedule.DayText,
            startTime:modschedule.StartTime,
            endTime:modschedule.EndTime,
            venue:' '})}
        }
      }
      //store unique mods in array numberofmodules
 			// do{
 			// 	if(numberofmodules.length>0){
 			// 		for(var j=0;j<numberofmodules.length;j++){
 			// 			if(numberofmodules[j]!=loopstore[0]){
 			// 				numberofmodules.push("loopstore[0]");
 			// 			}
 			// 		}
 			// 	};
 			// 		else{
 			// 		numberofmodules.push("loopstore[0]");
				// };
				// counter++;
 			// 	}while(counter<numberoflessons);
 			 )
 			}

 		}//line30
 	}//line 23
 })
