


module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let half = 50;
    let quarter=25;
    let dime=10;
    let nickel=5;
    let penny=1;
    
    console.log(`Before to go to half ${currency}`);
    
    if (currency > 10000)

   return {'error': "You are rich, my friend! We don't have so much coins for exchange"};
    
    if (currency == 0)
    return object;

        
    if (currency < 0)
    return Error;



    if (currency>=half)
    {
    half = Math.floor(currency / half);
    var object = {};
    object["H"]= half;
    
    //console.log(`Now,half is ${half}`);
    
    currency = currency % 50;
    console.log(`Before to go to quarter ${currency}`);
     
    }


    
    
  if(currency>=quarter)
    {
    quarter = Math.floor(currency / quarter);
    object["Q"] = quarter;
    console.log(`Now,quarter is ${quarter} `);
    
    currency=currency%25;
    console.log(`Before to go to dime ${currency}`);
    }
    
    
    if(currency>=dime)
    {
    dime = Math.floor(currency / dime);
    object["D"] = dime;
    console.log(`Now,dime is ${dime} `);
    
    currency=currency%10;
    console.log(`Before to go to nickel ${currency}`);
    }
    
    if(currency>=nickel)
    {
    nickel = Math.floor(currency / nickel);
    object["N"] = nickel;
    console.log(`Now,dime is ${nickel} `);
    
    currency=currency%5;
    console.log(`Before to go to nickel ${currency}`);
    }
    
    if(currency>=penny)
    {
    penny = Math.floor(currency / penny);
    object["P"] = penny;
    console.log(`Now,penny is ${penny} `);
    
    }
  
    return object;
}
