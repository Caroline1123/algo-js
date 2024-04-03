(() => {
    // Create function taking the price and the total received as parameters. This returns an array containing the minimum amount of bank notes/coins to be handed.

    // Create a function that checks how many times an amount is still in the remaining amount , and update toBeHanded array.
    function checkHowMany(remaining, amount, toBeHanded) {
        if (remaining >= amount) {
            let nb_quotes = Math.floor(remaining/amount);
            for (nb_quotes ; nb_quotes > 0; nb_quotes--) {
                toBeHanded.push(amount);
                remaining -= amount;
                remaining = remaining.toFixed(2)
            }
        }
        return remaining
    }

    function computeChange(price, moneyHanded){
        // calculate amount to be returned 
        let remaining = moneyHanded - price;
        let toBeHanded = []

        // Checks if parameters are valid, if not, return empty array
        if (!price || !moneyHanded || typeof(price)!= "number" || typeof(moneyHanded) != "number" || price > moneyHanded) {
            return toBeHanded;
        }
        if (remaining == 0) {
            return toBeHanded;
        }

        currency = [500.00, 200.00, 100.00, 50.00, 20.00, 10.00, 5.00, 2.00, 1.00, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01]

        for (let i = 0; i < currency.length ; i ++ ) {
            remaining = checkHowMany(remaining, currency[i], toBeHanded)
            if(remaining == 0 ) {
                break;
            }
        }

        return toBeHanded
    }

    console.log(computeChange(12.3, 50));

})();