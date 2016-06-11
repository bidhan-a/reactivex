/*
    Applying a function to a value and creating
    a new value is called a projection. To project
    one array into another, we apply the projection
    function to each item in the array and collect
    the results in a new array.
 */

/*
    All array projections share two operations in common:
    a. Traverse the source array
    b. Add each item's projected value to a new array
*/

var  newReleases = [
        {
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [4.0],
            "bookmark": []
        },
        {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [5.0],
            "bookmark": [{ id:432534, time:65876586 }]
        },
        {
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [4.0],
            "bookmark": []
        },
        {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [5.0],
            "bookmark": [{ id:432534, time:65876586 }]
        }
    ],
    videoAndTitlePairs = [];

// ------------ INSERT CODE HERE! -----------------------------------
// Use forEach function to accumulate {id, title} pairs from each video.
// Put the results into the videoAndTitlePairs array using the Array's
// push() method. Example: videoAndTitlePairs.push(newItem);
// ------------ INSERT CODE HERE! -----------------------------------

newReleases.forEach(function(release) {
   videoAndTitlePairs.push({id: release.id, title: release.title});
});

console.log(videoAndTitlePairs);

