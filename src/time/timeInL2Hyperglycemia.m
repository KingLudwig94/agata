function timeInL2Hyperglycemia = timeInL2Hyperglycemia(data)
%timeInSevereHyperglycemia function that computes the time spent in
%hyperglycemia (Level 2) (ignoring nan values).
%
%Input:
%   - data: a timetable with column `Time` and `glucose` containing the 
%   glucose data to analyze (in mg/dl). 
%Output:
%   - timeInSevereHyperglycemia: percentage of time in level 2 hyperglycemia (i.e., 
%   > 250 mg/dl).
%
%Preconditions:
%   - data must be a timetable having an homogeneous time grid;
%   - data must contain a column named `Time` and another named `glucose`.
% 
% ------------------------------------------------------------------------
% 
% Reference:
%   - Battelino et al., "Continuous glucose monitoring and merics for 
%   clinical trials: An international consensus statement", The Lancet
%   Diabetes & Endocrinology, 2022, pp. 1-16.
%   DOI: https://doi.org/10.1016/S2213-8587(22)00319-9.
% 
% ------------------------------------------------------------------------
%
% Copyright (C) 2020 Giacomo Cappon
%
% This file is part of AGATA.
%
% ---------------------------------------------------------------------
    
    %Check preconditions 
    if(~istimetable(data))
        error('timeInL2Hyperglycemia: data must be a timetable.');
    end
    if(var(seconds(diff(data.Time))) > 0 || isnan(var(seconds(diff(data.Time)))))
        error('timeInL2Hyperglycemia: data must have a homogeneous time grid.')
    end
    if(~any(strcmp(fieldnames(data),'Time')))
        error('timeInL2Hyperglycemia: data must have a column named `Time`.')
    end
    if(~any(strcmp(fieldnames(data),'glucose')))
        error('timeInL2Hyperglycemia: data must have a column named `glucose`.')
    end
    
    %Remove nans
    nonNanGlucose = data.glucose(~isnan(data.glucose));
    
    %Compute metric
    timeInL2Hyperglycemia = 100*sum(nonNanGlucose > 250)/length(nonNanGlucose);
    
end
