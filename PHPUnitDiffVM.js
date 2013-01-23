function TestResultVM( ID, DeltaBase )
{
	var self = this;

	this.ID = ko.observable( ID );

	if(DeltaBase == null) DeltaBase = self;
	this.DeltaBase = ko.observable( DeltaBase );

	this.AddTestEvent = function( Event )
	{
		//TODO: make this it's own vm so the anonymous lambda is recreted for every event
		self[Event.test] = Event;
		
		self[Event.test].TimeDelta = ko.computed(
			function(TestName)
			{	
				return function()
				{

					var baseEvent = self.DeltaBase()[TestName];
					var thisEvent = self[TestName];
					
					return baseEvent.time - thisEvent.time;
							
				}
			}(Event.test)
		);

		self[Event.test].Delta = ko.computed(
			function(TestName)
			{	
				return function()
				{

					var baseEvent = self.DeltaBase()[TestName];
					var thisEvent = self[TestName];
					
					//if it failed show that
					if(thisEvent.status != 'pass')
					{
						return "failed";
					}
					else if(baseEvent == thisEvent)
					{
						return "";
					}
					else if(baseEvent.status != 'pass')
					{
						return "base fail";
					}
					else
					{
						var delta = thisEvent.TimeDelta()
						if(delta > 0) //Faster
						{
							return Math.abs(delta / thisEvent.time * 100).toFixed(2) + '%'
						}
						else //Slower
						{
							return Math.abs(delta / baseEvent.time * 100).toFixed(2) + '%'
						}
						
					}
							
				}
			}(Event.test)
		);





	}
}



function PHPUnitDiffVM()
{
	var self = this;


	var myTestNames = ko.observableArray();

	this.DropLogFile = function(vm, evt)
	{
		var files = evt.dataTransfer.files;
		for(var i = 0, l = files.length; i < l; i++)
		{
			var reader = new FileReader();
			reader.onload = (function(theFile) {
        		return function(e)
        		{
	          		self.AddTestResultSet( PHPUnitDiffVM.ParseTestEventsJSON( e.srcElement.result), theFile.name  );
        		};
      		})(files[i]);

      		reader.readAsText(files[i])
		}

		

	};


	this.AddTestResultSet = function( TestResultSet, Identifier )
	{
		var ResultVM = new TestResultVM(Identifier, self.TestResults().length > 0 ? self.TestResults()[0] : null);

		for(var i = 0, l = TestResultSet.length; i < l; i++)
		{
			var TestEvent = TestResultSet[i];

			if(TestEvent.event == "suiteStart")
			{
				//TODO: what should we do here? show header or something?
			}
			else if(TestEvent.event == "test")
			{
				//add it to the collection of test names if it isn't already there
				var TestName = TestEvent.test;
				
				if(myTestNames.indexOf(TestName) == -1)
				{
					myTestNames.push( TestName );
				}

				ResultVM.AddTestEvent( TestEvent ) ;
				
			}

		}

		self.TestResults.push( ResultVM );
	}

	//This seems to be needed for drags to work
	this.NoOp = function(vm, evt)
	{
		
	}


	this.TestFilter = ko.observable("");

	this.TestNames = ko.computed(function(){
		var filter = self.TestFilter().toUpperCase();
		if(filter == "")
		{
			return myTestNames();
		}

		return myTestNames().filter(
			function(element)
			{
				return (element.toUpperCase().indexOf(filter) > -1);
			}
		);
	})

	this.TestResults = ko.observableArray();

	
	this.FirstResult = ko.computed(function(){
		return self.TestResults()[0];
	});
	
	
	this.SetDeltaBase = function()
	{
		var results = self.TestResults();
		for(var i = 0, l = results.length; i < l; i++)
		{
			results[i].DeltaBase( this );
		}
	}

}

PHPUnitDiffVM.ParseTestEventsJSON = function( EventJSON )
{
	EventJSON = EventJSON.replace(/\}\{/g, "},{");
	var events = JSON.parse( "[" + EventJSON + "]" );

	return events;
}


ko.bindingHandlers.delta = {
    init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        
    },
    update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        
    }
};