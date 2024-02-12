'use strict';

function set(objName={}, path, value){
    let currentPos=objName;
    let currentPath=[];
    let attributes = path.slice(1).split('.');
    for (let i=0; i < attributes.length; i++){
        if (Object.keys(currentPos).length===0){
            currentPos[attributes[i]]={};
        }
        currentPath[i]=currentPos;
        currentPos=currentPos[attributes[i]];
    }
    currentPos=value;
    for (let i=currentPath.length-1; i>=0; i--){
        currentPath[i][attributes[i]]=currentPos;
        currentPos=currentPath[i];
    }
    return currentPos;
}