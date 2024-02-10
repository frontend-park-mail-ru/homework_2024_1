'use strict';
const plain_inner = (result, array)=>{
	array.forEach(item=>{
		if (Array.isArray(item))
			plain_inner(result,item);
		
		else 
			result.push(item);
			
	   		
	}
	)
}
const plain =  (array)=> {
	let result = []
	plain_inner(result, array)
	return result;
 } 