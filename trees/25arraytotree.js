/*
 When information is organized in a tree like a JSON expression,
 relationships point from parent to child. In relational systems
 like databases, relationships point from children to their parents.
 Both ways of organizing information are equivalent, and depending on
 the circumstances, we might get data organized in one way or another.
 It may surprise you to learn that you can use the 5 query functions
 you already know to easily convert between these representations.
 In other words, not only can you query arrays from trees, you can
 query trees from arrays.
*/

(function() {
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
        ];

    var result = lists.map(function(list) {
        return {
            name: list.name,
            videos: videos.filter(function(video) {
                return video.listId == list.id;
            }).map(function(video) {
                return {id: video.id, title: video.title}
            })
        };
    });

    console.log(result);
})();

