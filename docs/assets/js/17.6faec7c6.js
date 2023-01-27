(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{375:function(e,t,n){"use strict";n.r(t);var a=n(42),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"inspection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inspection"}},[e._v("#")]),e._v(" Inspection")]),e._v(" "),n("h2",{attrs:{id:"findnanislands"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#findnanislands"}},[e._v("#")]),e._v(" findNanIslands")]),e._v(" "),n("div",{staticClass:"language-MATLAB extra-class"},[n("pre",{pre:!0,attrs:{class:"language-matlab"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("shortNan"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" longNan"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" nanStart"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" nanEnd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("findNanIslands")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("TH"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),n("p",[e._v("Function that locates nan sequences in vector "),n("code",[e._v("data")]),e._v(", and classifies them based on their length (longer or not than the specified threshold "),n("code",[e._v("TH")]),e._v(").")]),e._v(" "),n("h3",{attrs:{id:"inputs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[e._v("#")]),e._v(" Inputs")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("data: vector of double (required)")]),e._v(" "),n("br"),e._v("\nA vector of double of equally spaced (in time) values;")]),e._v(" "),n("li",[n("strong",[e._v("TH: integer (required)")]),e._v("\nA integer defining the threshold, expressed in number of samples, to distinguish between long and short nan sequences.")])]),e._v(" "),n("h3",{attrs:{id:"outputs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[e._v("#")]),e._v(" Outputs")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("shortNan: vector of integer")]),e._v(" "),n("br"),e._v('\nVector of integer that contains the indices of "short nan" sequences (i.e., sequences shorter than '),n("code",[e._v("TH")]),e._v(" consecutive nan samples);")]),e._v(" "),n("li",[n("strong",[e._v("longNan: vector of integer")]),e._v(" "),n("br"),e._v('\nVector of integer that contains the indices of "long nan" sequences (i.e., sequences having '),n("code",[e._v("TH")]),e._v(" consecutive nan samples or more);")]),e._v(" "),n("li",[n("strong",[e._v("nanStart: vector of integer")]),e._v(" "),n("br"),e._v("\nVector of integer containing the start indices of the nan sequences;")]),e._v(" "),n("li",[n("strong",[e._v("nanEnd: vector of integer")]),e._v(" "),n("br"),e._v("\nVector of integer containing the last indices of the nan sequences.")])]),e._v(" "),n("h3",{attrs:{id:"preconditions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#preconditions"}},[e._v("#")]),e._v(" Preconditions")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("data")]),e._v(" must be a timetable having an homogeneous time grid;")]),e._v(" "),n("li",[n("code",[e._v("data")]),e._v(" must contain a column named "),n("code",[e._v("Time")]),e._v(" and another named "),n("code",[e._v("glucose")]),e._v(";")]),e._v(" "),n("li",[n("code",[e._v("TH")]),e._v(" must be an integer.")])]),e._v(" "),n("h3",{attrs:{id:"reference"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),n("ul",[n("li",[e._v("None")])]),e._v(" "),n("h2",{attrs:{id:"findhypoglycemicevents"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#findhypoglycemicevents"}},[e._v("#")]),e._v(" findHypoglycemicEvents")]),e._v(" "),n("div",{staticClass:"language-MATLAB extra-class"},[n("pre",{pre:!0,attrs:{class:"language-matlab"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" hypoglycemicEvents "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("findHypoglycemicEvents")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" varargin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),n("p",[e._v("Function that finds the hypoglycemic events in a given glucose trace. The definition of hypoglycemic event can be found in Battellino et al. (event begins: at least consecutive 15 minutes < threshold, event ends: at least 15 consecutive minutes > threshold).")]),e._v(" "),n("h3",{attrs:{id:"input"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input"}},[e._v("#")]),e._v(" Input")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("data: timetable (required)")]),e._v(" "),n("br"),e._v("\nA timetable with columns "),n("code",[e._v("Time")]),e._v(" and "),n("code",[e._v("glucose")]),e._v(" containing the glucose data to analyze (mg/dl);")]),e._v(" "),n("li",[n("strong",[e._v("th: integer (optional)")]),e._v(" "),n("br"),e._v("\nAn integer with the selected hypoglycemia threshold (in mg/dl) the default value is 70 mg/dl.")])]),e._v(" "),n("h3",{attrs:{id:"output"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[e._v("#")]),e._v(" Output")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("hypoglycemicEvents: structure")]),e._v(" "),n("br"),e._v("\nA structure containing the information on the hypoglycemic events found by the function with fields:\n"),n("ul",[n("li",[n("strong",[e._v("timeStart: vector of datetime")]),e._v(" "),n("br"),e._v("\nA vector of datetime containing the starting timestamps of each found hypoglycemic event;")]),e._v(" "),n("li",[n("strong",[e._v("timeEnd: vector of datetime")]),e._v(" "),n("br"),e._v("\nA vector of datetime containing the ending timestamps of each found hypoglycemic event;")]),e._v(" "),n("li",[n("strong",[e._v("duration: vector of integer")]),e._v(" "),n("br"),e._v("\nA vector of integer containing the duration (min) of each found hypoglycemic event;")]),e._v(" "),n("li",[n("strong",[e._v("meanDuration: double")]),e._v(" "),n("br"),e._v("\nMetric, the average duration of the events;")]),e._v(" "),n("li",[n("strong",[e._v("duration: double")]),e._v(" "),n("br"),e._v("\nMetric, the number of events per week.")])])])]),e._v(" "),n("h3",{attrs:{id:"preconditions-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#preconditions-2"}},[e._v("#")]),e._v(" Preconditions")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("data")]),e._v(" must be a timetable having an homogeneous time grid;")]),e._v(" "),n("li",[n("code",[e._v("data")]),e._v(" must contain a column named "),n("code",[e._v("Time")]),e._v(" and another named "),n("code",[e._v("glucose")]),e._v(".")])]),e._v(" "),n("h3",{attrs:{id:"reference-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reference-2"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),n("ul",[n("li",[e._v('Battelino et al., "Continuous glucose monitoring and merics for clinical trials: An international consensus statement", The Lancet Diabetes & Endocrinology, 2022, pp. 1-16. DOI: https://doi.org/10.1016/S2213-8587(22)00319-9.')])]),e._v(" "),n("h2",{attrs:{id:"findhypoglycemiceventsbylevel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#findhypoglycemiceventsbylevel"}},[e._v("#")]),e._v(" findHypoglycemicEventsByLevel")]),e._v(" "),n("div",{staticClass:"language-MATLAB extra-class"},[n("pre",{pre:!0,attrs:{class:"language-matlab"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" hypoglycemicEvents "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("findHypoglycemicEventsByLevel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),n("p",[e._v("Function that finds the hypoglycemic events in a given glucose trace classifying them by level, i.e., hypo, level 1 hypo or level 2 hypo. The definition of hypoglycemic event can be found in Battellino et al.")]),e._v(" "),n("h3",{attrs:{id:"input-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input-2"}},[e._v("#")]),e._v(" Input")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("data: timetable (required)")]),e._v(" "),n("br"),e._v("\nA timetable with columns "),n("code",[e._v("Time")]),e._v(" and "),n("code",[e._v("glucose")]),e._v(" containing the glucose data to analyze (mg/dl).")])]),e._v(" "),n("h3",{attrs:{id:"output-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#output-2"}},[e._v("#")]),e._v(" Output")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("hypoglycemicEvents: structure")]),e._v(" "),n("br"),e._v("\nA structure containing the information on the hypoglycemic events found by the function with fields:\n"),n("ul",[n("li",[n("strong",[e._v("hypo: structure")]),e._v(" "),n("br"),e._v("\nA structure containing the information on the hypo events with fields:\n"),n("ul",[n("li",[n("strong",[e._v("timeStart: vector of datetime")]),e._v(" "),n("br"),e._v("\nA vector of datetime containing the starting timestamps of each found hypoglycemic event;")]),e._v(" "),n("li",[n("strong",[e._v("timeEnd: vector of datetime")]),e._v(" "),n("br"),e._v("\nA vector of datetime containing the ending timestamps of each found hypoglycemic event;")]),e._v(" "),n("li",[n("strong",[e._v("duration: vector of integer")]),e._v(" "),n("br"),e._v("\nA vector of integer containing the duration (min) of each found hypoglycemic event;")]),e._v(" "),n("li",[n("strong",[e._v("meanDuration: double")]),e._v(" "),n("br"),e._v("\nMetric, the average duration of the events;")]),e._v(" "),n("li",[n("strong",[e._v("duration: double")]),e._v(" "),n("br"),e._v("\nMetric, the number of events per week.")])])]),e._v(" "),n("li",[n("strong",[e._v("l1: structure")]),e._v(" "),n("br"),e._v("\nA structure containing the information on the L1 hypo events with fields:\n"),n("ul",[n("li",[n("strong",[e._v("timeStart: vector of datetime")]),e._v(" "),n("br"),e._v("\nA vector of datetime containing the starting timestamps of each found L1 hypoglycemic event;")]),e._v(" "),n("li",[n("strong",[e._v("timeEnd: vector of datetime")]),e._v(" "),n("br"),e._v("\nA vector of datetime containing the ending timestamps of each found L1 hypoglycemic event;")]),e._v(" "),n("li",[n("strong",[e._v("duration: vector of integer")]),e._v(" "),n("br"),e._v("\nA vector of integer containing the duration (min) of each found L1 hypoglycemic event;")]),e._v(" "),n("li",[n("strong",[e._v("meanDuration: double")]),e._v(" "),n("br"),e._v("\nMetric, the average duration of the events;")]),e._v(" "),n("li",[n("strong",[e._v("duration: double")]),e._v(" "),n("br"),e._v("\nMetric, the number of events per week.")])])]),e._v(" "),n("li",[n("strong",[e._v("l2: structure")]),e._v(" "),n("br"),e._v("\nA structure containing the information on the L2 hypo events with fields:\n"),n("ul",[n("li",[n("strong",[e._v("timeStart: vector of datetime")]),e._v(" "),n("br"),e._v("\nA vector of datetime containing the starting timestamps of each found L2 hypoglycemic event;")]),e._v(" "),n("li",[n("strong",[e._v("timeEnd: vector of datetime")]),e._v(" "),n("br"),e._v("\nA vector of datetime containing the ending timestamps of each found L2 hypoglycemic event;")]),e._v(" "),n("li",[n("strong",[e._v("duration: vector of integer")]),e._v(" "),n("br"),e._v("\nA vector of integer containing the duration (min) of each found L2 hypoglycemic event;")]),e._v(" "),n("li",[n("strong",[e._v("meanDuration: double")]),e._v(" "),n("br"),e._v("\nMetric, the average duration of the events;")]),e._v(" "),n("li",[n("strong",[e._v("duration: double")]),e._v(" "),n("br"),e._v("\nMetric, the number of events per week.")])])])])])]),e._v(" "),n("h3",{attrs:{id:"preconditions-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#preconditions-3"}},[e._v("#")]),e._v(" Preconditions")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("data")]),e._v(" must be a timetable having an homogeneous time grid;")]),e._v(" "),n("li",[n("code",[e._v("data")]),e._v(" must contain a column named "),n("code",[e._v("Time")]),e._v(" and another named "),n("code",[e._v("glucose")]),e._v(".")])]),e._v(" "),n("h3",{attrs:{id:"reference-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reference-3"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),n("ul",[n("li",[e._v('Battelino et al., "Continuous glucose monitoring and merics for clinical trials: An international consensus statement", The Lancet Diabetes & Endocrinology, 2022, pp. 1-16. DOI: https://doi.org/10.1016/S2213-8587(22)00319-9.')])]),e._v(" "),n("h2",{attrs:{id:"findhyperglycemicevents"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#findhyperglycemicevents"}},[e._v("#")]),e._v(" findHyperglycemicEvents")]),e._v(" "),n("div",{staticClass:"language-MATLAB extra-class"},[n("pre",{pre:!0,attrs:{class:"language-matlab"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" hyperglycemicEvents "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("findHyperglycemicEvents")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" varargin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),n("p",[e._v("Function that finds the hyperglycemic events in a given glucose trace. The definition of hyperglycemic event can be found in Battellino et al. (event begins: at least consecutive 15 minutes > threshold, event ends: at least 15 consecutive minutes < threshold).")]),e._v(" "),n("h3",{attrs:{id:"input-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input-3"}},[e._v("#")]),e._v(" Input")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("data: timetable (required)")]),e._v(" "),n("br"),e._v("\nA timetable with columns "),n("code",[e._v("Time")]),e._v(" and "),n("code",[e._v("glucose")]),e._v(" containing the glucose data to analyze (mg/dl);")]),e._v(" "),n("li",[n("strong",[e._v("th: integer (optional)")]),e._v(" "),n("br"),e._v("\nAn integer with the selected hyperglycemia threshold (in mg/dl) the default value is 70 mg/dl.")])]),e._v(" "),n("h3",{attrs:{id:"output-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#output-3"}},[e._v("#")]),e._v(" Output")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("hyperglycemicEvents: structure")]),e._v(" "),n("br"),e._v("\nA structure containing the information on the hyperglycemic events found by the function with fields:\n"),n("ul",[n("li",[n("strong",[e._v("timeStart: vector of datetime")]),e._v(" "),n("br"),e._v("\nA vector of datetime containing the starting timestamps of each found hyperglycemic event;")]),e._v(" "),n("li",[n("strong",[e._v("timeEnd: vector of datetime")]),e._v(" "),n("br"),e._v("\nA vector of datetime containing the ending timestamps of each found hyperglycemic event;")]),e._v(" "),n("li",[n("strong",[e._v("duration: vector of integer")]),e._v(" "),n("br"),e._v("\nA vector of integer containing the duration (min) of each found hyperglycemic event;")]),e._v(" "),n("li",[n("strong",[e._v("meanDuration: double")]),e._v(" "),n("br"),e._v("\nMetric, the average duration of the events;")]),e._v(" "),n("li",[n("strong",[e._v("duration: double")]),e._v(" "),n("br"),e._v("\nMetric, the number of events per week.")])])])]),e._v(" "),n("h3",{attrs:{id:"preconditions-4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#preconditions-4"}},[e._v("#")]),e._v(" Preconditions")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("data")]),e._v(" must be a timetable having an homogeneous time grid;")]),e._v(" "),n("li",[n("code",[e._v("data")]),e._v(" must contain a column named "),n("code",[e._v("Time")]),e._v(" and another named "),n("code",[e._v("glucose")]),e._v(".")])]),e._v(" "),n("h3",{attrs:{id:"reference-4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reference-4"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),n("ul",[n("li",[e._v('Battelino et al., "Continuous glucose monitoring and merics for clinical trials: An international consensus statement", The Lancet Diabetes & Endocrinology, 2022, pp. 1-16. DOI: https://doi.org/10.1016/S2213-8587(22)00319-9.')])]),e._v(" "),n("h2",{attrs:{id:"findhyperglycemiceventsbylevel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#findhyperglycemiceventsbylevel"}},[e._v("#")]),e._v(" findHyperglycemicEventsByLevel")]),e._v(" "),n("div",{staticClass:"language-MATLAB extra-class"},[n("pre",{pre:!0,attrs:{class:"language-matlab"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" hyperglycemicEvents "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("findHyperglycemicEventsByLevel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),n("p",[e._v("Function that finds the hyperglycemic events in a given glucose trace classifying them by level, i.e., hyper, level 1 hyper or level 2 hyper. The definition of hyperglycemic event can be found in Battellino et al.")]),e._v(" "),n("h3",{attrs:{id:"input-4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input-4"}},[e._v("#")]),e._v(" Input")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("data: timetable (required)")]),e._v(" "),n("br"),e._v("\nA timetable with columns "),n("code",[e._v("Time")]),e._v(" and "),n("code",[e._v("glucose")]),e._v(" containing the glucose data to analyze (mg/dl).")])]),e._v(" "),n("h3",{attrs:{id:"output-4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#output-4"}},[e._v("#")]),e._v(" Output")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("hyperglycemicEvents: structure")]),e._v(" "),n("br"),e._v("\nA structure containing the information on the hyperglycemic events found by the function with fields:\n"),n("ul",[n("li",[n("strong",[e._v("hyper: structure")]),e._v(" "),n("br"),e._v("\nA structure containing the information on the hyper events with fields:\n"),n("ul",[n("li",[n("strong",[e._v("timeStart: vector of datetime")]),e._v(" "),n("br"),e._v("\nA vector of datetime containing the starting timestamps of each found hyperglycemic event;")]),e._v(" "),n("li",[n("strong",[e._v("timeEnd: vector of datetime")]),e._v(" "),n("br"),e._v("\nA vector of datetime containing the ending timestamps of each found hyperglycemic event;")]),e._v(" "),n("li",[n("strong",[e._v("duration: vector of integer")]),e._v(" "),n("br"),e._v("\nA vector of integer containing the duration (min) of each found hyperglycemic event;")]),e._v(" "),n("li",[n("strong",[e._v("meanDuration: double")]),e._v(" "),n("br"),e._v("\nMetric, the average duration of the events;")]),e._v(" "),n("li",[n("strong",[e._v("duration: double")]),e._v(" "),n("br"),e._v("\nMetric, the number of events per week.")])])]),e._v(" "),n("li",[n("strong",[e._v("l1: structure")]),e._v(" "),n("br"),e._v("\nA structure containing the information on the L1 hyper events with fields:\n"),n("ul",[n("li",[n("strong",[e._v("timeStart: vector of datetime")]),e._v(" "),n("br"),e._v("\nA vector of datetime containing the starting timestamps of each found L1 hyperglycemic event;")]),e._v(" "),n("li",[n("strong",[e._v("timeEnd: vector of datetime")]),e._v(" "),n("br"),e._v("\nA vector of datetime containing the ending timestamps of each found L1 hyperglycemic event;")]),e._v(" "),n("li",[n("strong",[e._v("duration: vector of integer")]),e._v(" "),n("br"),e._v("\nA vector of integer containing the duration (min) of each found L1 hyperglycemic event;")]),e._v(" "),n("li",[n("strong",[e._v("meanDuration: double")]),e._v(" "),n("br"),e._v("\nMetric, the average duration of the events;")]),e._v(" "),n("li",[n("strong",[e._v("duration: double")]),e._v(" "),n("br"),e._v("\nMetric, the number of events per week.")])])]),e._v(" "),n("li",[n("strong",[e._v("l2: structure")]),e._v(" "),n("br"),e._v("\nA structure containing the information on the L2 hypo events with fields:\n"),n("ul",[n("li",[n("strong",[e._v("timeStart: vector of datetime")]),e._v(" "),n("br"),e._v("\nA vector of datetime containing the starting timestamps of each found L2 hyperglycemic event;")]),e._v(" "),n("li",[n("strong",[e._v("timeEnd: vector of datetime")]),e._v(" "),n("br"),e._v("\nA vector of datetime containing the ending timestamps of each found L2 hyperglycemic event;")]),e._v(" "),n("li",[n("strong",[e._v("duration: vector of integer")]),e._v(" "),n("br"),e._v("\nA vector of integer containing the duration (min) of each found L2 hyperglycemic event;")]),e._v(" "),n("li",[n("strong",[e._v("meanDuration: double")]),e._v(" "),n("br"),e._v("\nMetric, the average duration of the events;")]),e._v(" "),n("li",[n("strong",[e._v("duration: double")]),e._v(" "),n("br"),e._v("\nMetric, the number of events per week.")])])])])])]),e._v(" "),n("h3",{attrs:{id:"preconditions-5"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#preconditions-5"}},[e._v("#")]),e._v(" Preconditions")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("data")]),e._v(" must be a timetable having an homogeneous time grid;")]),e._v(" "),n("li",[n("code",[e._v("data")]),e._v(" must contain a column named "),n("code",[e._v("Time")]),e._v(" and another named "),n("code",[e._v("glucose")]),e._v(".")])]),e._v(" "),n("h3",{attrs:{id:"reference-5"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reference-5"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),n("ul",[n("li",[e._v('Battelino et al., "Continuous glucose monitoring and merics for clinical trials: An international consensus statement", The Lancet Diabetes & Endocrinology, 2022, pp. 1-16. DOI: https://doi.org/10.1016/S2213-8587(22)00319-9.')])]),e._v(" "),n("h2",{attrs:{id:"findextendedhypoglycemicevents"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#findextendedhypoglycemicevents"}},[e._v("#")]),e._v(" findExtendedHypoglycemicEvents")]),e._v(" "),n("div",{staticClass:"language-MATLAB extra-class"},[n("pre",{pre:!0,attrs:{class:"language-matlab"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" extendedHypoglycemicEvents "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("findExtendedHypoglycemicEvents")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),n("p",[e._v("Function that finds the prolonged hypoglycemic events in a given glucose trace. The definition of extended hypoglycemic event can be found in Battellino et al. (event begins: at least consecutive 120 minutes < threshold mg/dl, event ends: at least 15 consecutive minutes > threshold mg/dl)")]),e._v(" "),n("h3",{attrs:{id:"input-5"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input-5"}},[e._v("#")]),e._v(" Input")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("data: timetable (required)")]),e._v(" "),n("br"),e._v("\nA timetable with columns "),n("code",[e._v("Time")]),e._v(" and "),n("code",[e._v("glucose")]),e._v(" containing the glucose data to analyze (mg/dl);")]),e._v(" "),n("li",[n("strong",[e._v("th: integer (optional)")]),e._v(" "),n("br"),e._v("\nAn integer with the selected extended hypoglycemia threshold (in mg/dl) the default value is 70 mg/dl.")])]),e._v(" "),n("h3",{attrs:{id:"output-5"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#output-5"}},[e._v("#")]),e._v(" Output")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("extendedHypoglycemicEvents: structure")]),e._v(" "),n("br"),e._v("\nA structure containing the information on the extended hypoglycemic events found by the function with fields:\n"),n("ul",[n("li",[n("strong",[e._v("timeStart: vector of datetime")]),e._v(" "),n("br"),e._v("\nA vector of datetime containing the starting timestamps of each found extended hypoglycemic event;")]),e._v(" "),n("li",[n("strong",[e._v("timeEnd: vector of datetime")]),e._v(" "),n("br"),e._v("\nA vector of datetime containing the ending timestamps of each found extended hypoglycemic event;")]),e._v(" "),n("li",[n("strong",[e._v("duration: vector of integer")]),e._v(" "),n("br"),e._v("\nA vector of integer containing the duration (min) of each found extended hypoglycemic event;")]),e._v(" "),n("li",[n("strong",[e._v("meanDuration: double")]),e._v(" "),n("br"),e._v("\nMetric, the average duration of the events;")]),e._v(" "),n("li",[n("strong",[e._v("duration: double")]),e._v(" "),n("br"),e._v("\nMetric, the number of events per week.")])])])]),e._v(" "),n("h3",{attrs:{id:"preconditions-6"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#preconditions-6"}},[e._v("#")]),e._v(" Preconditions")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("data")]),e._v(" must be a timetable having an homogeneous time grid;")]),e._v(" "),n("li",[n("code",[e._v("data")]),e._v(" must contain a column named "),n("code",[e._v("Time")]),e._v(" and another named "),n("code",[e._v("glucose")]),e._v(".")])]),e._v(" "),n("h3",{attrs:{id:"reference-6"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reference-6"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),n("ul",[n("li",[e._v('Battelino et al., "Continuous glucose monitoring and merics for clinical trials: An international consensus statement", The Lancet Diabetes & Endocrinology, 2022, pp. 1-16. DOI: https://doi.org/10.1016/S2213-8587(22)00319-9.')])]),e._v(" "),n("h2",{attrs:{id:"missingglucosepercentage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#missingglucosepercentage"}},[e._v("#")]),e._v(" missingGlucosePercentage")]),e._v(" "),n("div",{staticClass:"language-MATLAB extra-class"},[n("pre",{pre:!0,attrs:{class:"language-matlab"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" missingGlucosePercentage "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("missingGlucosePercentage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),n("p",[e._v("Function that computes the percentage of missing values in the given glucose trace.")]),e._v(" "),n("h3",{attrs:{id:"input-6"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input-6"}},[e._v("#")]),e._v(" Input")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("data: timetable (required)")]),e._v(" "),n("br"),e._v("\nA timetable with columns "),n("code",[e._v("Time")]),e._v(" and "),n("code",[e._v("glucose")]),e._v(" containing the glucose data to analyze (mg/dl).")])]),e._v(" "),n("h3",{attrs:{id:"output-6"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#output-6"}},[e._v("#")]),e._v(" Output")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("missingGlucosePercentage: double")]),e._v(" "),n("br"),e._v("\nPercentage of missing glucose values.")])]),e._v(" "),n("h3",{attrs:{id:"preconditions-7"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#preconditions-7"}},[e._v("#")]),e._v(" Preconditions")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("data")]),e._v(" must be a timetable having an homogeneous time grid;")]),e._v(" "),n("li",[n("code",[e._v("data")]),e._v(" must contain a column named "),n("code",[e._v("Time")]),e._v(" and another named "),n("code",[e._v("glucose")]),e._v(".")])]),e._v(" "),n("h3",{attrs:{id:"reference-7"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reference-7"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),n("ul",[n("li",[e._v("None")])]),e._v(" "),n("h2",{attrs:{id:"numberdaysofobservation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#numberdaysofobservation"}},[e._v("#")]),e._v(" numberDaysOfObservation")]),e._v(" "),n("div",{staticClass:"language-MATLAB extra-class"},[n("pre",{pre:!0,attrs:{class:"language-matlab"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" numberDaysOfObservation "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("numberDaysOfObservation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),n("p",[e._v("Function that computes the number of days of observation of the given glucose trace.")]),e._v(" "),n("h3",{attrs:{id:"input-7"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input-7"}},[e._v("#")]),e._v(" Input")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("data: timetable (required)")]),e._v(" "),n("br"),e._v("\nA timetable with columns "),n("code",[e._v("Time")]),e._v(" and "),n("code",[e._v("glucose")]),e._v(" containing the glucose data to analyze (mg/dl).")])]),e._v(" "),n("h3",{attrs:{id:"output-7"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#output-7"}},[e._v("#")]),e._v(" Output")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("numberDaysOfObservation: double")]),e._v(" "),n("br"),e._v("\nNumber of days of observation.")])]),e._v(" "),n("h3",{attrs:{id:"preconditions-8"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#preconditions-8"}},[e._v("#")]),e._v(" Preconditions")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("data")]),e._v(" must be a timetable having an homogeneous time grid;")]),e._v(" "),n("li",[n("code",[e._v("data")]),e._v(" must contain a column named "),n("code",[e._v("Time")]),e._v(" and another named "),n("code",[e._v("glucose")]),e._v(".")])]),e._v(" "),n("h3",{attrs:{id:"reference-8"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reference-8"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),n("ul",[n("li",[e._v("None")])])])}),[],!1,null,null,null);t.default=o.exports}}]);