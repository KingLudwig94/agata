(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{371:function(t,e,a){"use strict";a.r(e);var s=a(42),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"utilities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utilities"}},[t._v("#")]),t._v(" Utilities")]),t._v(" "),a("h2",{attrs:{id:"glucosevectortotimetable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glucosevectortotimetable"}},[t._v("#")]),t._v(" glucoseVectorToTimetable")]),t._v(" "),a("div",{staticClass:"language-MATLAB extra-class"},[a("pre",{pre:!0,attrs:{class:"language-matlab"}},[a("code",[t._v("dataTimetable "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("glucoseVectorToTimetable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sampleTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" startTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Function that converts a vector containing glucose samples sampled on an homogeneous timegrid with, timestep "),a("code",[t._v("sampleTime")]),t._v(", in a timetable. The resulting timetable timestamps will start from "),a("code",[t._v("startTime")]),t._v(". If startTime is not specified, 2000-01-01 00:00 is used as default.")]),t._v(" "),a("h2",{attrs:{id:"inputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("data: vector of double (required)")]),t._v(" "),a("br"),t._v("\nA vector of doubled containing the glucose data (in mg/dl) supposed to be sampled in a homogeneous timegrid with timestep "),a("code",[t._v("sampleTime")]),t._v(";")]),t._v(" "),a("li",[a("strong",[t._v("sampleTime: integer (required)")]),t._v(" "),a("br"),t._v("\nAn integer defining the sample time of data (in min);")]),t._v(" "),a("li",[a("strong",[t._v("startTime: datetime (required)")]),t._v(" "),a("br"),t._v("\nA dateTime defining the first timestamp of the resulting timetable. If startTime is not provided, 2000-01-01 00:00, is used as default.")])]),t._v(" "),a("h3",{attrs:{id:"output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[t._v("#")]),t._v(" Output")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("dataTimetable: timetable")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("data")]),t._v(" transformed in timetable having two columns: "),a("code",[t._v("Time")]),t._v(", which contains the timestamps, and "),a("code",[t._v("glucose")]),t._v(" containing the corresponding glucose data (in mg/dl).")])]),t._v(" "),a("h3",{attrs:{id:"preconditions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preconditions"}},[t._v("#")]),t._v(" Preconditions")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("data")]),t._v(" must be a vector of double supposed to be sampled in a homogeneous timegrid with timestep "),a("code",[t._v("sampleTime")]),t._v(";")]),t._v(" "),a("li",[a("code",[t._v("sampleTime")]),t._v(" must be an integer;")]),t._v(" "),a("li",[a("code",[t._v("startTime")]),t._v(" must be a datetime.")])]),t._v(" "),a("h3",{attrs:{id:"reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),a("ul",[a("li",[t._v("None")])]),t._v(" "),a("h2",{attrs:{id:"timetabletoglucosevector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timetabletoglucosevector"}},[t._v("#")]),t._v(" timetableToGlucoseVector")]),t._v(" "),a("div",{staticClass:"language-MATLAB extra-class"},[a("pre",{pre:!0,attrs:{class:"language-matlab"}},[a("code",[t._v("dataVector "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("timetableToGlucoseVector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Function that converts a timetable with column "),a("code",[t._v("Time")]),t._v(" and "),a("code",[t._v("glucose")]),t._v(" containing the glucose data, in a double vector containing the glucose data in the "),a("code",[t._v("glucose")]),t._v(" column.")]),t._v(" "),a("h2",{attrs:{id:"inputs-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputs-2"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("data: vector of double (required)")]),t._v(" "),a("br"),t._v("\nA timetable with column "),a("code",[t._v("Time")]),t._v(" and "),a("code",[t._v("glucose")]),t._v(" containing the glucose data (in mg/dl).")])]),t._v(" "),a("h3",{attrs:{id:"output-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-2"}},[t._v("#")]),t._v(" Output")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("dataVector: vector of double")]),t._v(" "),a("br"),t._v("\nA vector of double containing the glucose data in the "),a("code",[t._v("glucose")]),t._v(" column.")])]),t._v(" "),a("h3",{attrs:{id:"preconditions-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preconditions-2"}},[t._v("#")]),t._v(" Preconditions")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("data")]),t._v(" must be a timetable having an homogeneous time grid.")])]),t._v(" "),a("h3",{attrs:{id:"reference-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference-2"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),a("ul",[a("li",[t._v("None")])]),t._v(" "),a("h2",{attrs:{id:"glucosetimevectorstotimetable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glucosetimevectorstotimetable"}},[t._v("#")]),t._v(" glucoseTimeVectorsToTimetable")]),t._v(" "),a("div",{staticClass:"language-MATLAB extra-class"},[a("pre",{pre:!0,attrs:{class:"language-matlab"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" dataTimetable "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("glucoseTimeVectorsToTimetable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("glucose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Function that converts the two given vectors containing the glucose samples and the corresponding timestamps, respectively, in a timetable.")]),t._v(" "),a("h3",{attrs:{id:"inputs-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputs-3"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("glucose: vector of double (required)")]),t._v(" "),a("br"),t._v("\nA vector of double containing the glucose data (in mg/dl);")]),t._v(" "),a("li",[a("strong",[t._v("time: vector of datetime (required)")]),t._v(" "),a("br"),t._v("\nA vector of datetime containing the timestamps of each "),a("code",[t._v("glucose")]),t._v(" datapoint.")])]),t._v(" "),a("h3",{attrs:{id:"output-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-3"}},[t._v("#")]),t._v(" Output")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("dataTimetable: timetable")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("data")]),t._v(" and "),a("code",[t._v("time")]),t._v(" vectors transformed in timetable having two columns: "),a("code",[t._v("Time")]),t._v(", which contains the timestamps, and "),a("code",[t._v("glucose")]),t._v(" containing the corresponding glucose data (in mg/dl).")])]),t._v(" "),a("h3",{attrs:{id:"preconditions-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preconditions-3"}},[t._v("#")]),t._v(" Preconditions")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("data")]),t._v(" and "),a("code",[t._v("time")]),t._v(" must be of the same length;")]),t._v(" "),a("li",[a("code",[t._v("glucose")]),t._v(" must be a vector of double;")]),t._v(" "),a("li",[a("code",[t._v("time")]),t._v(" must be a a vector of datetime.")])]),t._v(" "),a("h3",{attrs:{id:"reference-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference-3"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),a("ul",[a("li",[t._v("None")])]),t._v(" "),a("h2",{attrs:{id:"timetabletoglucosetimevectors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timetabletoglucosetimevectors"}},[t._v("#")]),t._v(" timetableToGlucoseTimeVectors")]),t._v(" "),a("div",{staticClass:"language-MATLAB extra-class"},[a("pre",{pre:!0,attrs:{class:"language-matlab"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dataVector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timeVector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("timetableToGlucoseTimeVectors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Function that converts a timetable with column "),a("code",[t._v("Time")]),t._v(" and "),a("code",[t._v("glucose")]),t._v(" containing the timestamps and the respective glucose data, in two vectors: one containing the timestamp data in the "),a("code",[t._v("Time")]),t._v(" column and the other containing the glucose data in the "),a("code",[t._v("glucose")]),t._v(" column.")]),t._v(" "),a("h3",{attrs:{id:"input"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input"}},[t._v("#")]),t._v(" Input")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("data: vector of double (required)")]),t._v(" "),a("br"),t._v("\nA timetable with column "),a("code",[t._v("Time")]),t._v(" and "),a("code",[t._v("glucose")]),t._v(" containing the glucose data (in mg/dl).")])]),t._v(" "),a("h3",{attrs:{id:"outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("dataVector: vector of double")]),t._v(" "),a("br"),t._v("\nA vector of double containing the glucose data\nin the "),a("code",[t._v("glucose")]),t._v(" column;")]),t._v(" "),a("li",[a("strong",[t._v("timeVector: vector of datetime")]),t._v(" "),a("br"),t._v("\nA vector of datetime containing the timestamp data in the "),a("code",[t._v("Time")]),t._v(" column.")])]),t._v(" "),a("h3",{attrs:{id:"preconditions-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preconditions-4"}},[t._v("#")]),t._v(" Preconditions")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("data")]),t._v(" must be a timetable having an homogeneous time grid.")])]),t._v(" "),a("h3",{attrs:{id:"reference-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference-4"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),a("ul",[a("li",[t._v("None")])])])}),[],!1,null,null,null);e.default=o.exports}}]);