var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");
 
var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
		price:"9.00",
        description: "From the ridge, you’ll get amazing 360 views of the entire valley, and most importantly, the picturesque view from Clouds Rest.As with all backcountry trails in Yosemite, you can camp anywhere, so long as you’re 100 feet off the trail. Camping is not allowed on Clouds Rest itself, which makes sense since there’s almost no open ground space to pitch a tent anyway. Campsites in the immediately surrounding area are pretty scarce; there is very little even, level ground to pitch a tent. We were able to snag a spot just before the trail climbs onto the narrow ridge.",
        author:{
            id : "588c2e092403d111454fff76",
            username: "Jack"
        }
    },
    {
        name: "Desert Mesa", 
        image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
		price:"10.50",
        description: "Sleep under the Milky Way while camping on our property at our 2 acre private residence in the desert. Night skies are fantastic. Clear views to the East and West make for the best desert sunrises and sunsets. We are 10 min from the town of Joshua Tree. You may select your camping area if tent camping. We have a German Shepherd and chickens so NO dogs allowed please.",
        author:{
            id : "588c2e092403d111454fff71",
            username: "Jill"
        }
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
		price:"8.80",
        description: "To camp in the park in a location other than a developed campground on the rim you must obtain a permit from the Backcountry Information Center, this includes Bright Angel Campground at Phantom Ranch. All campsites in the Inner Canyon require a backcountry permit. Applying well in advance is recommended although a small number of permits are sometimes available for the same day. Camping in the Grand Canyon requires planning ahead for Backcountry Permits.",
        author:{
            id : "588c2e092403d111454fff77",
            username: "Jane"
        }
    }
]
 
function seedDB(){
   Campground.deleteMany({}, function(err){
        if (err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        Comment.deleteMany({}, function(err) {
            if (err){
                console.log(err);
            }
            console.log("removed comments!");
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a campground");
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was internet",
                                author:{
                                    id : "588c2e092403d111454fff76",
                                    username: "Jack"
                                }
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                }
                            });
                    }
                });
            });
        })
    }); 
}
 
module.exports = seedDB;