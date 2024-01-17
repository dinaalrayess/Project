document.addEventListener("DOMContentLoaded", function () {
    // Function to show the planet page
    window.showPlanetPage = function (planet) {
        // Get the planet information
        var planetInfo = getPlanetInfo(planet);

        // Update the content in the modal
        document.querySelector(".planet-info-text").innerHTML = planetInfo;

        // Display the modal
        document.getElementById("planet-info").style.display = "block";
    };

    // Function to close the planet page
    window.closePlanetPage = function () {
        // Hide the modal
        document.getElementById("planet-info").style.display = "none";
    };

    // Function to get planet information
    function getPlanetInfo(planet) {
        var planetContent = "";
        var planetImageURL = "";

        // Set information and image URL based on the planet
        switch (planet) {
            case 'Mercury':
                planetContent = "Mercury is the first planet from the Sun and the smallest in the Solar System. It is a terrestrial planet with a heavily cratered surface due to overlapping impact events. These features are well preserved since the planet has no geological activity and an extremely tenuous atmosphere called an exosphere.";
                planetImageURL = 'https://e7.pngegg.com/pngimages/957/238/png-clipart-mercury-planet-planet-miscellaneous-sphere-thumbnail.png';
                break;
            case 'Venus':
                planetContent = "Venus is the second planet from the Sun. It is a rocky planet with the densest atmosphere of all the rocky bodies in the Solar System, and the only one with a mass and size that is close to that of its orbital neighbour Earth.";
                planetImageURL = 'https://e7.pngegg.com/pngimages/216/536/png-clipart-venus-earth-planet-solar-system-venus-sphere-astronomical-object-thumbnail.png';
                break;
            case'Earth':
                planetContent = "Earth is the third planet from the Sun and the only astronomical object known to harbor life. This is enabled by Earth being a water world, the only one in the Solar System sustaining liquid surface water. Almost all of Earth's water is contained in its global ocean, covering 70.8% of Earth's crust.";
                planetImageURL = 'https://e7.pngegg.com/pngimages/116/158/png-clipart-earth-t-shirt-planet-earth-planet-earth-globe-world-thumbnail.png';
                break;
            case 'Mars':
                planetContent = "Mars is the fourth planet and the furthest terrestrial planet from the Sun. The reddish color of its surface is due to finely grained iron(III) oxide dust in the soil, giving it the nickname the Red Planet. Mars's radius is second smallest among the planets in the Solar System at 3,389.5 km";
                planetImageURL = 'https://e7.pngegg.com/pngimages/337/664/png-clipart-mars-mars-thumbnail.png';
                break;
            case 'Jupiter':
                    planetContent ="Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, and slightly less than one one-thousandth the mass of the Sun.";
                    planetImageURL = 'https://e7.pngegg.com/pngimages/901/693/png-clipart-jupiter-planet-jupiter-planet-solar-system-juno-saturn-jupiter-file-atmosphere-sphere-thumbnail.png';
                    break;
            case 'Saturn':
                planetContent = "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine-and-a-half times that of Earth. It has only one-eighth the average density of Earth, but is over 95 times more massive";
                planetImageURL = 'https://e7.pngegg.com/pngimages/225/960/png-clipart-saturn-illustration-earth-saturn-planet-solar-system-ring-system-jupiter-space-universe-thumbnail.png';
                break;
            case 'Uranus':
                    planetContent = "Uranus is the seventh planet from the Sun. It is a gaseous cyan-coloured ice giant. Most of the planet is made of water, ammonia, and methane in a supercritical phase of matter, which in astronomy is called 'ice' or volatiles.";
                    planetImageURL = 'https://e7.pngegg.com/pngimages/920/407/png-clipart-neptune-planet-solar-system-uranus-venus-planet-miscellaneous-blue-thumbnail.png';
                    break;
            case 'Neptune':
                    planetContent = "Neptune is the eighth and farthest planet from the Sun. It is the fourth-largest planet in the Solar System by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, and slightly more massive than its near-twin Uranus";
                    planetImageURL = 'https://e7.pngegg.com/pngimages/339/481/png-clipart-the-nine-planets-earth-planets-beyond-neptune-uranus-planet-miscellaneous-blue-thumbnail.png';
                    break;
            case 'Pluto':
                    planetContent = "Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It is the ninth-largest and tenth-most-massive known object to directly orbit the Sun. It is the largest known trans-Neptunian object by volume, by a small margin, but is slightly less massive than Eris.";
                    planetImageURL = 'https://e7.pngegg.com/pngimages/743/958/png-clipart-new-horizons-pluto-s-heart-moons-of-pluto-pluto-planet-new-horizons-pluto-s-heart-thumbnail.png';
                    break;
            case 'Sun':
                    planetContent = "The Sun is the star at the center of the Solar System. It is a massive, hot ball of plasma, inflated and heated by energy produced by nuclear fusion reactions at its core.";
                    planetImageURL = 'https://e7.pngegg.com/pngimages/16/608/png-clipart-sun-the-sun-sunscreen-light-sphere-sun-image-file-formats-orange-thumbnail.png';
                    break;
        }

        
        var planetInfo = '<img src="' + planetImageURL + '" alt="' + planet + '">' +
                         '<div class="planet-info">' + planetContent + '</div>';

        return planetInfo;
    }
});
