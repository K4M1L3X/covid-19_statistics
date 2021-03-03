$.getJSON("https://api.covid19api.com/world/total", 
function(data) {
    console.log(data);

    var confirmed = data.TotalConfirmed;
    var deaths = data.TotalDeaths;
    var recovered = data.TotalRecovered;

    if (confirmed == null) $(".confirmed").append("DATA NOT UPDATED");
    else {
        $(".confirmed").append("Ilość potwierdzonych zakażeń<br/>");
        $(".confirmed").append(confirmed);
    } 

    if (deaths == null) $(".deaths").append("DATA NOT UPDATED");
    else {
        $(".deaths").append("Ilość śmierci<br/>");
        $(".deaths").append(deaths);
    }

    if (recovered == null) $(".recovered").append("DATA NOT UPDATED");
    else {
        $(".recovered").append("Ilość wyleczonych<br/>");
        $(".recovered").append(recovered);
    }
    
    
    
}
);