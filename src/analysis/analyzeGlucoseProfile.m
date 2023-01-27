function results = analyzeGlucoseProfile(data)
%analyzeGlucoseProfile function that computes the glycemic outcomes of a
%glucose profile.
%
%Input:
%    - data: a timetable with column `Time` and `glucose` containing the 
%   glucose data to analyze (in mg/dl). 
%Output:
%    - results: a structure with field containing the computed metrics of
%    the glucose profile, i.e.:
%        - `variabilityMetrics`: a structure with fields containing the values of the computed 
%           variability metrics (i.e., {`aucGlucose`, `CVGA`, `cogi`,`cvGlucose`, 
%           `efIndex`, `gmi`, `iqrGlucose`, `jIndex`, `mageIndex`, 
%           `magePlusIndex`, `mageMinusIndex`, `meanGlucose`, `medianGlucose`, 
%           `rangeGlucose`, `sddmIndex`, `sdwIndex`, `stdGlucose`,`conga`,`modd`, `stdGlucoseROC`}) of the 
%           glucose profile; 
%        - `riskMetrics`: a structure with fields containing the values of the computed 
%           risk metrics (i.e., {`adrr`, `bgri`, `hbgi`, `lbgi`, `gri`}) of the 
%           glucose profile;
%        - `dataQualityMetrics`: a structure with fields containing the values of the computed 
%           data quality metrics (i.e., {`missingGlucosePercentage`,`numberDaysOfObservation`}) of 
%           the glucose profile;
%        - `timeMetrics`: a structure with fields containing the values of the computed 
%           time related metrics (i.e., {`timeInHyperglycemia`, 
%           `timeInL1Hyperglycemia`, `timeInL2Hyperglycemia`, `timeInHypoglycemia`, 
%           `timeInL1Hypoglycemia`, `timeInL2Hypoglycemia`, `timeInTarget`, `timeInTightTarget`}) 
%           of the glucose profile;
%        - `glycemicTransformationMetrics`: a structure with fields containing the values of the computed 
%           glycemic transformed metrics (i.e., {`gradeScore`, `gradeEuScore`, 
%           `gradeHyperScore`, `gradeHypoScore`, `hypoIndex`, `hyperIndex`, 
%           `igc`, `mrIndex`}) of the glucose profile;
%        - `eventMetrics`: a structure with fields containing the values of the computed 
%           event related metrics (i.e., {`hypoglycemicEvents`, `hyperglycemicEvents`, 
%           `extendedHypoglycemicEvents`}) of the glucose profile.
%
%Preconditions:
%   - data must be a timetable having an homogeneous time grid;
%   - data must contain a column named `Time` and another named `glucose`.
%
% ---------------------------------------------------------------------
%
% REFERENCE:
%   - None.
%
% ---------------------------------------------------------------------
%
% Copyright (C) 2020 Giacomo Cappon
%
% This file is part of AGATA.
%
% ---------------------------------------------------------------------

    %Check preconditions 
    if(~istimetable(data))
        error('analyzeGlucoseProfile: data must be a timetable.');
    end
    if(var(seconds(diff(data.Time))) > 0 || isnan(var(seconds(diff(data.Time)))))
        error('analyzeGlucoseProfile: data must have a homogeneous time grid.')
    end
    if(~any(strcmp(fieldnames(data),'Time')))
        error('analyzeGlucoseProfile: data must have a column named `Time`.')
    end
    if(~any(strcmp(fieldnames(data),'glucose')))
        error('analyzeGlucoseProfile: data must have a column named `glucose`.')
    end
    
    
    %Variability metrics
    variabilityMetrics = {'aucGlucose','CVGA','cogi','cvGlucose','efIndex','gmi','iqrGlucose',...
        'jIndex','mageIndex','magePlusIndex','mageMinusIndex','meanGlucose','medianGlucose',...
        'rangeGlucose','sddmIndex','sdwIndex','stdGlucose','conga','modd', 'stdGlucoseROC'};
    
    for v = variabilityMetrics
        
        %Compute metric for glucose profile
        results.variability.(v{:}) = feval(v{:}, data);
        
    end
    
    %Risk metrics
    riskMetrics = {'adrr','bgri','hbgi','lbgi','gri'};
    
    for r = riskMetrics
        
        %Compute metric for glucose profile
        results.risk.(r{:}) = feval(r{:}, data);
        
    end
    
    
    %Time metrics
    timeMetrics = {'timeInHyperglycemia','timeInL1Hyperglycemia','timeInL2Hyperglycemia',...
        'timeInHypoglycemia','timeInL1Hypoglycemia','timeInL2Hypoglycemia',...
        'timeInTarget','timeInTightTarget'};
    
    for t = timeMetrics
        
        %Compute metric for glucose profile
        results.time.(t{:}) = feval(t{:}, data);
        
    end
    
     %Glycemic transformation metrics
     glycemicTransformationMetrics = {'gradeEuScore','gradeHyperScore','gradeHypoScore',...
         'gradeScore','hyperIndex','hypoIndex','igc','mrIndex'};
     
     for gt = glycemicTransformationMetrics
         
         %Compute metric for glucose profile
         results.glycemicTransformation.(gt{:}) = feval(gt{:}, data);
         
     end
    
    %Data quality metrics
    dataQualityMetrics = {'missingGlucosePercentage','numberDaysOfObservation'};
    
    for d = dataQualityMetrics
        
        %Compute metric for glucose profile
        results.dataQuality.(d{:}) = feval(d{:}, data);
        
    end
    
    
    %Event metrics
    eventMetrics = {'hyperglycemicEvents','hypoglycemicEvents','extendedHypoglycemicEvents'};
    eventFunc = {'findHyperglycemicEventsByLevel','findHypoglycemicEventsByLevel','findExtendedHypoglycemicEvents'};
    for e = 1:length(eventMetrics)
        
        %Compute metric for glucose profile
        results.event.(eventMetrics{e}) = feval(eventFunc{e}, data);
      
    end
    
end

