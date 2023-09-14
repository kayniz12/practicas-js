rondamin= 5*37;
rondaMax=10*37;
    
valorA= (Math.random()*rondamin)+rondamin;

//Act
num=valorA%37;

//Assert

test('0<=num>=36', () =>{
    expect (num).toBeGreaterThanOrEqual(0);

    expect (num).toBeLessThanOrEqual(36);

});
