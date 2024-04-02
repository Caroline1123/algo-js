(() => {
    // Create function taking the price and the total received as parameters. This returns an array containing the minimum amount of bank notes/coins to be handed.
    function computeChange(price, moneyHanded){
        // calculate amount to be returned 
        let difference = price - moneyHanded;
        let toBeHanded = []
        if (difference >= 500) {
            let count_notes_500 = Math.floor(difference/500)
            for (count of count_notes_500) {
                toBeHanded.push(500)
                difference = 
            }
        }

      }

})();