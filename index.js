// code your solution here


function superbowlWin(record) {
    
    
    const w = record.find(({ result }) => result === 'W');
    console.log(w)
    if (w === undefined) {
        return w
    }
    else {
        return w.year
    }
    
}