const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    {
      title: "Customer Service - Cloud Video Production",
      location: "NZ, Auckland",
    },
    {
      title: "Commissioning Machinery Assistant (CMA)",
      location: "US, IA, Wever",
    },
    {
      title: "Account Executive - Washington DC",
      location: "US, DC, Washington",
    },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
      title: "Lead Guest Service Specialist",
      location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
      title: "Customer Service Associate - Part Time",
      location: "US, AZ, Phoenix",
    },
    {
      title: "ASP.net Developer Job opportunity at United States,New Jersey",
      location: "US, NJ, Jersey City",
    },
    {
      title: "Talent Sourcer (6 months fixed-term contract)",
      location: "GB, LND, London",
    },
    {
      title: "Applications Developer, Digital",
      location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
      title: "VP of Sales - Vault Dragon",
      location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
      title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
      location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
      title: "Process Controls Engineer - DCS PLC MS Office - PA",
      location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
      title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
      location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
      title: "HAAD/DHA Licensed Doctors Opening in UAE",
      location: "AE, AZ, Abudhabi",
    },
    {
      title: "Talent Management Process Manager",
      location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
      title: "Customer Service Technical Specialist",
      location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
      title: "English Teacher Abroad",
      location: "US, NY, Saint Bonaventure",
    },
  ];

  // Funzione per eseguire la ricerca
        function searchJobs(title, location) {
            // Ottenere i valori inseriti negli input
            title = document.getElementById("titleInput").value.trim();
            location = document.getElementById("locationInput").value.trim();
            // Inizializzare un array per i risultati
            const result = [];
            // Inizializzare un contatore per il numero di risultati
            let count = 0;

            console.log("valore inserito nel campo titolo:", title);
            console.log("valore inserito nel campo località:", location);

            // Ciclare attraverso gli elementi dell'array di lavori
            for (const job of jobs) {
                console.log(job.title);
                console.log(job.location);
                // Verificare se il titolo e la località corrispondono ai criteri di ricerca
                if (job.title.toLowerCase().includes(title.toLowerCase()) && job.location.toLowerCase().includes(location.toLowerCase())) {
                    // Aggiungere il lavoro ai risultati
                    result.push(job);
                    // Incrementare il contatore
                    count++;
                } 
            }
            console.log("risultati della ricerca:", result);
            console.log("numero totale di risultati:", count);

            // Ottenere il div in cui vengono visualizzati i risultati
            const resultsDiv = document.getElementById("results");
            // Pulire il contenuto del div
            resultsDiv.innerHTML = "";
            // Aggiungere i risultati alla pagina
            resultsDiv.innerHTML += "<p>Result:</p>"; 
            if (result.length > 0) {
                for (const job of result)
                {
                    resultsDiv.innerHTML += "<p>"+job.title+"</p>";
                }
            } else {
                    resultsDiv.innerHTML += "<p>nessun risultato trovato.</p>";
             }
                resultsDiv.innerHTML += "<p>Count:" + count + "</p>";
            }
    

        // Funzione per resettare i campi di input e i risultati
        function resetSearch() {
            // Resetta i valori degli input
            document.getElementById("titleInput").value = "";
            document.getElementById("locationInput").value = "";
            // Resetta i risultati visualizzati
            document.getElementById("results").innerHTML = "";
        }