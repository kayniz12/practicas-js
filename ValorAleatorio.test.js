//Arange

rondamin=5*36;
rondaMax=10*37;

//Act

valorA= (Math.random()*rondamin)+rondamin;

//Assert
test('rondamin<=valorA>=rondaMax', () =>{
    expect (valorA).toBeGreaterThanOrEqual(rondamin);

    expect (valorA).toBeLessThanOrEqual(rondaMaxs)

});


