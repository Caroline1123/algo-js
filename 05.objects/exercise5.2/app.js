(() => {
    // Create a function named randomizeCast(tvSerie) that will take as argument the data structure you defined in the previous exercise and return a list of the same cast but in a random order.

    // Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a TV serie then display a randomized list of the previous cast that will form the new cast of your next serie.

    
    let askTvSerie = () => {
        // Asking user for TV series details
        let name = prompt("What's your favourite TV series' name?");
        let productionYear = Number(prompt("In what year was it launched?"));
        let castMembers = []
        let input = ''
        do {
            input = prompt("Add a cast member. When you wish to stop, input a 0:")
            if (input != '0') {
                castMembers.push(input);
            }
        }
        while (input != '0')
        
        // Initializing the tvSeries object
        let tvSeries = {
            name : name,
            productionYear : productionYear,
            castMembers: castMembers,
        }
        return tvSeries
    }

    let randomizeCast = (tvSerie) => {
        for (let i = tvSerie.castMembers.length - 1; i >= 0; i --) {
            const j = Math.ceil(Math.random()*i);
                [tvSerie.castMembers[i], tvSerie.castMembers[j]] = [tvSerie.castMembers[j], tvSerie.castMembers[i]]
            }
            return tvSerie;
        }
        
    console.log(randomizeCast(askTvSerie()))
})();