(function () {

    angular.module('nmdbFilters', [])
        .filter('selectedGenresFilter', function () {

            return function (movies, selectedGenres) {

                // Filters
                // The first parameter is the item repeated in the ng-repeater (movie in control.movies).
                // It is passed automatically when the filter function is called in the template.
                // The second parameter needs to be passed.
                // Call this filter: | selectedGenresFilter : selectedGenres : compare result to this

                // todo: MIKSI MOVIEGENRESISSÄ ON ARVO VAIKKEN PASSAA SITÄ? 
                // arvo on sitäpaitsi väärä, se sisältää kaikki genret, ei elokuvan 
                // miksi tuo objekticollection muuttuu selectedGenresiin kun poistan 
                // moviegenresit pois
                // miks tää herjaa siitä että movie ei oo defined, mutta ei selectedGenresistä

                var filteredMovies = [];

                for (var movie in movies)
                {
                    for (var genre in movies[movie].genres)
                    {
                        for (var selected in selectedGenres)
                        {
                            if (movies[movie].genres[genre] === selectedGenres[selected]) {
                                filteredMovies.push(movies[movie]);
                            }
                        }
                    }
                }
                
                return filteredMovies;
            };

        });

})();