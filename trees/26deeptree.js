Array.prototype.concatAll = function() {
    var results = [];
    this.forEach(function(subArray) {
        // ------------ INSERT CODE HERE! ----------------------------
        // Add all the items in each subArray to the results array.
        // ------------ INSERT CODE HERE! ----------------------------
        results.push.apply(results, subArray);
    });
    return results;
};

Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
    return this.
    map(function(item) {
        return projectionFunctionThatReturnsArray(item);
    }).
    // apply the concatAll function to flatten the two-dimensional array
    concatAll();
};

Array.zip = function(left, right, combinerFunction) {
    var counter;
    var results = [];

    for(counter = 0; counter < Math.min(left.length, right.length); counter++) {
        results.push(combinerFunction(left[counter], right[counter]));
    }

    return results;
};

Array.prototype.reduce = function(combiner, initialValue) {
    var counter,
        accumulatedValue;

    // If the array is empty, do nothing
    if (this.length === 0) {
        return this;
    }
    else {
        // If the user didn't pass an initial value, use the first item.
        if (arguments.length === 1) {
            counter = 1;
            accumulatedValue = this[0];
        }
        else if (arguments.length >= 2) {
            counter = 0;
            accumulatedValue = initialValue;
        }
        else {
            throw "Invalid arguments.";
        }

        // Loop through the array, feeding the current value and the result of
        // the previous computation back into the combiner function until
        // we've exhausted the entire array and are left with only one value.
        while(counter < this.length) {
            accumulatedValue = combiner(accumulatedValue, this[counter])
            counter++;
        }

        return [accumulatedValue];
    }
};

var lists = [
        {
            "id": 5434364,
            "name": "New Releases"
        },
        {
            "id": 65456475,
            name: "Thrillers"
        }
    ],
    videos = [
        {
            "listId": 5434364,
            "id": 65432445,
            "title": "The Chamber"
        },
        {
            "listId": 5434364,
            "id": 675465,
            "title": "Fracture"
        },
        {
            "listId": 65456475,
            "id": 70111470,
            "title": "Die Hard"
        },
        {
            "listId": 65456475,
            "id": 654356453,
            "title": "Bad Boys"
        }
    ],
    boxarts = [
        { videoId: 65432445, width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
        { videoId: 65432445, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" },
        { videoId: 675465, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
        { videoId: 675465, width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
        { videoId: 675465, width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
        { videoId: 70111470, width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
        { videoId: 70111470, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" },
        { videoId: 654356453, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
        { videoId: 654356453, width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }
    ],
    bookmarks = [
        { videoId: 65432445, time: 32432 },
        { videoId: 675465, time: 3534543 },
        { videoId: 70111470, time: 645243 },
        { videoId: 654356453, time: 984934 }
    ];

// End Result
var expected = [
    {
        "name": "New Releases",
        "videos": [
            {
                "id": 65432445,
                "title": "The Chamber",
                "time": 32432,
                "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg"
            },
            {
                "id": 675465,
                "title": "Fracture",
                "time": 3534543,
                "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg"
            }
        ]
    },
    {
        "name": "Thrillers",
        "videos": [
            {
                "id": 70111470,
                "title": "Die Hard",
                "time": 645243,
                "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "time": 984934,
                "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg"
            }
        ]
    }
];

var result = lists.map(function(list) {
    return {
        name: list.name,
        videos: videos.filter(function(video) {
            return video.listId === list.id;
        }).concatMap(function(video) {
            return Array.zip(
                bookmarks.filter(function(bookmark) {
                    return bookmark.videoId === video.id;
                }),
                boxarts.filter(function(boxart) {
                    return boxart.videoId === video.id;
                }).reduce(function(acc, curr) {
                    return acc.width * acc.height < curr.width * curr.height ? acc : curr;
                }),
                function(bookmark, boxart) {
                    return {
                        id: video.id,
                        title: video.title,
                        time: bookmark.time,
                        boxart: boxart.url
                    };
                }
            );
        })
    };
});

console.log(JSON.stringify(result, null, 2));
console.log(JSON.stringify(expected, null, 2));