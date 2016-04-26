/*
    To filter an array, we apply a test to each
    item in the array and collect the items that
    pass into a new array.
*/

/*
    All filtering share two operations in common:
    a. Traverse the array
    b. Add objects that pass the test to a new array
*/

var newReleases = [
        {
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
        },
        {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id:432534, time:65876586 }]
        },
        {
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
        },
        {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id:432534, time:65876586 }]
        }
    ],
    videos = [];

// ------------ INSERT CODE HERE! -----------------------------------
// Use forEach function to accumulate every video with a rating of 5.0
// ------------ INSERT CODE HERE! -----------------------------------
newReleases.forEach(function(release) {
    if(release.rating == 5.0) {
        videos.push(release);
    }
});

console.log(videos);