'use strict';

eventsApp.controller('EventController',function EventController($scope){
	$scope.event={
		name:'Hello Amod',
		fullName:'Amod Maroly',
		location:{
			age:'27',
			height:'5.7'
		},
	imgUrl:'images/pic_angular.jpg',
		
		infoArray:[
		           { 
		        	   info1:  'Task1',
		        	   creator:'Amod',
		        	   duration:'1hr',
		        	   desc:'super fast'
		           },
		           { 
		        	   info1:  'Task2',
		        	   creator:'Sumit',
		        	   duration:'2hr',
		        	   desc:'fast'
		        	}, 
		           {
		        		   info1:  'Task3',
			        	   creator:'rakesh',
			        	   duration:'3hr',
			        	   desc:'medium'
		        	},
		        	 {
		        		   info1:  'Task4',
			        	   creator:'sneha',
			        	   duration:'4hr',
			        	   desc:'slow'
		        	}
		           ],
		submitCount:0
	}
	$scope.submitCount=function(event){
		event.submitCount++;
	};
	
});