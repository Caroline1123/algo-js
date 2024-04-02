(() => {
    // Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:
    // Name
    // Production year
    // Names of the cast members (there can be as much as the user want)
    // That function must gather all the data in a single object and return it. The data structure must be elegant.
    // Create a program that use that function to generate a TV serie object and display it to the user in JSON format.

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

    // Prompting user to create TV series object 
    let tvSerie = askTvSerie()
    console.log(JSON.stringify(tvSerie));
    
})();