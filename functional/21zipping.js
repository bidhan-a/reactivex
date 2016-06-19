// We are adding `zip` as a `Static` function instead of adding it
// to the Array prototype because `zip` works on 2 arrays while 
// prototype functions(like map, filter, reduce etc.) work on a 
// single array 

Array.zip = function(left, right, combinerFunction) {
    var counter;
    var results = [];
    
    for(counter = 0; counter < Math.min(left.length, right.length); counter++) {
        results.push(combinerFunction(left[counter], right[counter]));
    }
    
    return results;
}

var videos = [
        {
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
        },
        {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
        },
        {
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
        },
        {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
        }
    ],
    bookmarks = [
        {id: 470, time: 23432},
        {id: 453, time: 234324},
        {id: 445, time: 987834}
    ],
counter,
videoIdAndBookmarkIdPairs = [],
videoIdAndBookmarkIdPairsUsingZip;

for(counter = 0; counter < Math.min(videos.length, bookmarks.length); counter++) {
    videoIdAndBookmarkIdPairs.push({videoId: videos[counter].id, bookmarkId: bookmarks[counter].id});
}

videoIdAndBookmarkIdPairsUsingZip =  Array.zip(videos, bookmarks, function(video, bookmark) {
   return {videoId: video.id, bookmarkId: bookmark.id}; 
});

console.log(videoIdAndBookmarkIdPairs);
console.log(videoIdAndBookmarkIdPairsUsingZip);

		