const dbg = document.getElementById("debug");

const csslider = document.getElementById("csrange");
const csdisplay = document.getElementById("csdisplay");
var csSliderVal = csslider.value;

const csnames = ["No Computer Science", "CS-151: Intro to Programming in Python or equivalent", "CS-152: Data Structures or equivalent"] ;

csdisplay.innerHTML = csnames[csSliderVal];

csslider.oninput = function() {
	csdisplay.innerHTML = csnames[this.value];
	table.innerHTML = "" ;
	constructTable('#table')
}

const calcslider = document.getElementById("calcrange");
const calcdisplay = document.getElementById("calcdisplay");
var calcSliderVal = calcslider.value;

const calcnames = ["No Calculus", "Calculus I (Derivatives), such as MATH-150", "Calculus II (Integrals), such as MATH-152"] ;

calcdisplay.innerHTML = calcnames[calcSliderVal];

calcslider.oninput = function() {
	calcdisplay.innerHTML = calcnames[this.value];
	table.innerHTML = "" ;
	constructTable('#table') ;
}

const box138 = document.getElementById("138");
var math138Val = box138;

box138.oninput = function() {
	table.innerHTML = "" ;
	constructTable('#table') ;
}

const box151 = document.getElementById("151");
var data151Val = box151;

box151.oninput = function() {
	table.innerHTML = "" ;
	constructTable('#table') ;
}

const box251 = document.getElementById("251");
var math251Val = box251;

box251.oninput = function() {
	table.innerHTML = "" ;
	constructTable('#table') ;
}

const box280 = document.getElementById("280");
var math280Val = box280;

box280.oninput = function() {
	table.innerHTML = "" ;
	constructTable('#table') ;
}

const list = 
[
  {
    "Prefix": "CS",
    "Number": 151,
    "Name": "Intro Programming With Python",
    "Days": "MWF",
    "Start": 910,
    "End": 1010,
    "CSreq": 0,
    "MATHreq": 0,
    "Specialreq": "",
    "CSrank": 1,
    "DSrank": 2
  },
  {
    "Prefix": "CS",
    "Number": 151,
    "Name": "Intro Programming With Python",
    "Days": "MWF",
    "Start": 1020,
    "End": 1120,
    "CSreq": 0,
    "MATHreq": 0,
    "Specialreq": "",
    "CSrank": 1,
    "DSrank": 2
  },
  {
    "Prefix": "CS",
    "Number": 152,
    "Name": "Data Structures",
    "Days": "TR",
    "Start": 800,
    "End": 930,
    "CSreq": 1,
    "MATHreq": 0,
    "Specialreq": "",
    "CSrank": 1,
    "DSrank": 3
  },
  {
    "Prefix": "CS",
    "Number": 261,
    "Name": "Software Development",
    "Days": "MWF",
    "Start": 910,
    "End": 1010,
    "CSreq": 2,
    "MATHreq": 0,
    "Specialreq": "",
    "CSrank": 2,
    "DSrank": 4
  },
  {
    "Prefix": "CS",
    "Number": 299,
    "Name": "Top Human-Comp. Interaction",
    "Days": "MW",
    "Start": 1430,
    "End": 1600,
    "CSreq": 1,
    "MATHreq": 0,
    "Specialreq": "DATA151",
    "CSrank": 4,
    "DSrank": 4
  },
  {
    "Prefix": "CS",
    "Number": 370,
    "Name": "Fundamentals of Data Science",
    "Days": "TR",
    "Start": 1250,
    "End": 1420,
    "CSreq": 1,
    "MATHreq": 0,
    "Specialreq": "",
    "CSrank": 4,
    "DSrank": 3
  },
  {
    "Prefix": "CS",
    "Number": 399,
    "Name": "Top Computing 4 Social Good",
    "Days": "TR",
    "Start": 940,
    "End": 1110,
    "CSreq": 1,
    "MATHreq": 0,
    "Specialreq": "",
    "CSrank": 4,
    "DSrank": 3
  },
  {
    "Prefix": "DATA",
    "Number": 151,
    "Name": "Intro to Data Science with R",
    "Days": "TR",
    "Start": 1250,
    "End": 1420,
    "CSreq": 0,
    "MATHreq": 0,
    "Specialreq": "",
    "CSrank": 5,
    "DSrank": 2
  },
  {
    "Prefix": "DATA",
    "Number": 152,
    "Name": "Inferential Statistics With R",
    "Days": "TR",
    "Start": 940,
    "End": 1110,
    "CSreq": 0,
    "MATHreq": 0,
    "Specialreq": "",
    "CSrank": 5,
    "DSrank": 2
  },
  {
    "Prefix": "DATA",
    "Number": 152,
    "Name": "Inferential Statistics With R",
    "Days": "TR",
    "Start": 1250,
    "End": 1420,
    "CSreq": 0,
    "MATHreq": 0,
    "Specialreq": "",
    "CSrank": 5,
    "DSrank": 2
  },
  {
    "Prefix": "DATA",
    "Number": 252,
    "Name": "Models and Machine Learning",
    "Days": "TR",
    "Start": 1430,
    "End": 1600,
    "CSreq": 0,
    "MATHreq": 0,
    "Specialreq": "MATH280",
    "CSrank": 5,
    "DSrank": 1
  },
  {
    "Prefix": "DATA",
    "Number": 299,
    "Name": "Top Data in the Cosmos",
    "Days": "MW",
    "Start": 1430,
    "End": 1600,
    "CSreq": 1,
    "MATHreq": 0,
    "Specialreq": "DATA151",
    "CSrank": 5,
    "DSrank": 3
  },
  {
    "Prefix": "DATA",
    "Number": 352,
    "Name": "Ethics/Teamwork/Communication",
    "Days": "MW",
    "Start": 1250,
    "End": 1420,
    "CSreq": 1,
    "MATHreq": 0,
    "Specialreq": "DATA151",
    "CSrank": 2,
    "DSrank": 1
  },
  {
    "Prefix": "MATH",
    "Number": 138,
    "Name": "Statistics and Applications",
    "Days": "MWF",
    "Start": 910,
    "End": 1010,
    "CSreq": 0,
    "MATHreq": 0,
    "Specialreq": "",
    "CSrank": 5,
    "DSrank": 2
  },
  {
    "Prefix": "MATH",
    "Number": 138,
    "Name": "Statistics and Applications",
    "Days": "MWF",
    "Start": 1020,
    "End": 1120,
    "CSreq": 0,
    "MATHreq": 0,
    "Specialreq": "",
    "CSrank": 5,
    "DSrank": 2
  },
  {
    "Prefix": "MATH",
    "Number": 152,
    "Name": "Calculus II",
    "Days": "MWF",
    "Start": 1020,
    "End": 1120,
    "CSreq": 0,
    "MATHreq": 1,
    "Specialreq": "",
    "CSrank": 5,
    "DSrank": 4
  },
  {
    "Prefix": "MATH",
    "Number": 152,
    "Name": "Calculus II",
    "Days": "MWF",
    "Start": 1240,
    "End": 1340,
    "CSreq": 0,
    "MATHreq": 1,
    "Specialreq": "",
    "CSrank": 5,
    "DSrank": 4
  },
  {
    "Prefix": "MATH",
    "Number": 153,
    "Name": "Sequences and Series",
    "Days": "MWF",
    "Start": 1020,
    "End": 1120,
    "CSreq": 0,
    "MATHreq": 2,
    "Specialreq": "",
    "CSrank": 5,
    "DSrank": 4
  },
  {
    "Prefix": "MATH",
    "Number": 153,
    "Name": "Sequences and Series",
    "Days": "MWF",
    "Start": 1240,
    "End": 1340,
    "CSreq": 0,
    "MATHreq": 2,
    "Specialreq": "",
    "CSrank": 5,
    "DSrank": 4
  },
  {
    "Prefix": "MATH",
    "Number": 249,
    "Name": "Multivariable Calculus",
    "Days": "MWF",
    "Start": 1020,
    "End": 1120,
    "CSreq": 0,
    "MATHreq": 0,
    "Specialreq": "",
    "CSrank": 5,
    "DSrank": 4
  },
  {
    "Prefix": "MATH",
    "Number": 251,
    "Name": "Foundations of Advanced Math",
    "Days": "MWF",
    "Start": 910,
    "End": 1010,
    "CSreq": 0,
    "MATHreq": 1,
    "Specialreq": "",
    "CSrank": 1,
    "DSrank": 4
  },
  {
    "Prefix": "MATH",
    "Number": 251,
    "Name": "Foundations of Advanced Math",
    "Days": "TR",
    "Start": 1250,
    "End": 1420,
    "CSreq": 1,
    "MATHreq": 1,
    "Specialreq": "",
    "CSrank": 5,
    "DSrank": 4
  },
  {
    "Prefix": "MATH",
    "Number": 253,
    "Name": "Linear Algebra",
    "Days": "TR",
    "Start": 940,
    "End": 1110,
    "CSreq": 0,
    "MATHreq": 2,
    "Specialreq": "",
    "CSrank": 5,
    "DSrank": 3
  },
  {
    "Prefix": "MATH",
    "Number": 376,
    "Name": "Top Probability, Computing",
    "Days": "TR",
    "Start": 1250,
    "End": 1420,
    "CSreq": 0,
    "MATHreq": 0,
    "Specialreq": "MATH251",
    "CSrank": 4,
    "DSrank": 3
  },
  {
    "Prefix": "MATH",
    "Number": 376,
    "Name": "Top Adv. Linear Algebra",
    "Days": "MWF",
    "Start": 910,
    "End": 1010,
    "CSreq": 0,
    "MATHreq": 0,
    "Specialreq": "MATH251",
    "CSrank": 5,
    "DSrank": 3
  },
  {
    "Prefix": "ENVS",
    "Number": 250,
    "Name": "Geographic Information Systems",
    "Days": "TR",
    "Start": 1250,
    "End": 1600,
    "CSreq": 0,
    "MATHreq": 0,
    "Specialreq": "",
    "CSrank": 5,
    "DSrank": 4
  },
  {
    "Prefix": "PHYS",
    "Number": 346,
    "Name": "Nonlinear Dynamics and Chaos",
    "Days": "MWF",
    "Start": 1020,
    "End": 1120,
    "CSreq": 0,
    "MATHreq": 1,
    "Specialreq": "",
    "CSrank": 5,
    "DSrank": 4
  },
  {
    "Prefix": "PHIL",
    "Number": 140,
    "Name": "Symbolic Logic",
    "Days": "MWF",
    "Start": 1240,
    "End": 1340,
    "CSreq": 0,
    "MATHreq": 0,
    "Specialreq": "",
    "CSrank": 5,
    "DSrank": 5
  }
]

list.sort(function(a,b) { return (a.CSrank - b.CSrank) * 1000 + b.Number - a.Number  } )
	
function screen(list)
{
	// Redundancies
	if (box138.checked)
	{
		if (list["Name"] == "Statistics and Applications") { return 0 ; }
		if (list["Name"] == "Inferential Statistics With R") { return 0 ; }
	}	
	if (box151.checked && list["Name"] == "Intro to Data Science with R") { return 0 ; }
	if (box251.checked && list["Name"] == "Foundations of Advanced Math") { return 0 ; }
	if (box280.checked && list["Name"] == "Math for Data Science") { return 0 ; }
	
	// Specials
	if (list["Specialreq"] == "DATA151" && box151.checked) { return 1 ; } 
	if (list["Specialreq"] == "MATH251" ) { return (box251.checked ? 1 : 0 ) ; }
	if (list["Specialreq"] == "MATH280" ) { return (box280.checked ? 1 : 0 ) ; }
	
	// CS1 to get into MATH 251W
	if (list["Name"] == "Foundations of Advanced Math" && csslider.value > 0) { return 1 ; }
	
	// CS/Calc
	if (list["CSreq"] > csslider.value) { return 0 ; }
	if (list["MATHreq"] > calcslider.value) { return 0 ; }
	
	return 1 ; 
}	
	
function constructTable(selector) {
	
	// Getting the all column names
	var cols = Headers(list, selector);

	// Traversing the JSON data
	for (var i = 0; i < list.length; i++) {
		if (screen(list[i])) {
			var row = $('<tr style="font-family: monospace; text-align: left"/>');
			for (var colIndex = 0; colIndex < 6; colIndex++)
			{
				var val = list[i][cols[colIndex]];
				
				if (val == null) val = "";
					row.append($('<td/>').html(val));
			}
		}
		
		// Adding each row to the table
		$(selector).append(row);
	}
}

function Headers(list, selector) {
	var columns = [];
	var header = $('<tr/>');
	
	for (var i = 0; i < list.length; i++) {
		var row = list[i];
		
		var n = 0 ;
		
		for (var k in row) {
			if ($.inArray(k, columns) == -1 && n < 6) {
				columns.push(k);
				// Creating the header
				header.append($('<th/>').html(k));
			}
			n = n + 1 ;
		}
	}
	
	// Appending the header to the table
	$(selector).append(header);
		return columns;
}
