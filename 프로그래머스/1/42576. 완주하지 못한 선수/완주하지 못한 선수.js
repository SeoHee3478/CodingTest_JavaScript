function solution(participant, completion) {
    var answer = '';
    
    const table = new Map();
    
    participant.forEach(name=> table.set(name, table.get(name)?table.get(name)+1:1 ))
    completion.forEach(name=>table.set(name,table.get(name)-1))
    
    for(let [key, value] of table){
        if(value>0) answer=key;
    }
    return answer;
}