app.controller('pullTabController',
    ["$rootScope", "$scope",
        function ($rootScope, $scope ) {

            $scope.courseInfo={
                "cor_id": 382,
                "cla_session_type": "M",
                "cla_duration": 180,
                "cla_cost": 450,
                "cla_address": "4803 Haviland Street",
                "cla_location_name": "Michael Abraham Studio",
                "cla_latitude": 49.0905,
                "cla_longitude": -123.084,
                "clt_date": "2016-07-02T00:00:00.000Z",
                "clt_start_time": "11:30:00",
                "cor_name": "Art Classes - Oil Painting and more!",
                "cor_description": "For those of you who want to 'really' learn how to paint! 6 week sessions in the Heart of Ladner Village, 25 minutes from Vancouver BC.",
                "cor_accreditation_description": "As a fifth year graduate of the Ontario College of Art and Design, and a successful full time artist since 1991, I offer an experts experience in the materials and techniques of painting and drawing. I have skills, as they say in the business, so am happy to share!",
                "cor_learn": "Learn how to layer, blend, and glaze and paint brightly coloured (non muddy) paintings I will show you how to add detail, and how to paint in a clean way. Mixing the right colour, no sweat!\n\n\nWhether you want to increase your drawing and painting skills, learn to see, develop your portfolio (ideal for school entry), or experiment with a variety of art materials, I can give you what you want! \n\nIf you need drawing and design help, or if you need artistic direction, assessment or a little boost with your work or mindset, or if youre someone new to art and ready to rock, Im here for you!\n\nYou can paint what you like, be it realism, abstraction, stylized, or explore a new medium for the first time.  If you are not sure, I can assign you a few things to get you started on your way.  I pretty much have oil painting and image making covered, so come have fun, challenge yourself, or escape into the world of creativity.",
                "cor_bring": "The suggested supply list for oil painting can be found here:\nhttp://michaelabraham.com/supply-list/\nIf you'd like to work in other mediums, I am happy to work with you.",
                "cor_aware_before": "Be warned: painting is addictive!",
                "cor_about_me": "I have taught oil painting and drawing at independent studios, artist guild workshops and at private schools, including at St. Georges School, West Point Grey Academy, South Delta Artists guild, and in my studio for a good number of years. I studies at the Ontario College of art and In Florence Italy.",
                "cor_structure": "Painting",
                "cor_image": "michaelpainting16420165485.jpg",
                "cor_who_isfor": "From beginner to advanced (ages 11 and up):  \n\nI have a maximum of 5 students per class, so the course is tailored to individuals.\nFor the art lover /enthusiast that has never painted, to the advanced artist that want to go the extra mile.",
                "cor_expertise": "I have been painting and selling my artwork for 25 years. If you look at www.michaelabraham.com, you'll be able to see testimonials and images of some of my beginner students' artwork, as well as a variety of my own work.",
                "cor_why_love": "Interacting with my students gives me joy. I get to see them get excited when they realize they can really paint, and and i get to see their enthusiasm when they grasp basics that no one ever explained to them. I love turning the lightbulbs of creativity on! It is rewarding to pass on knowledge and experience.",
                "cor_style": "I share everything i know: technique, drawing skills, colour mixing, historical references, approaches to building a painting from scratch - all made simple... Simplicity is the key, even to complex images...",
                "cor_why_take": "Learn how to paint from a real professional! You'll get results... Others have! Hands-on in-studio demonstrations and discussions are tailored to meet your needs. Youll experience plenty of individual instruction and studio time.",
                "use_name": "Michael Abraham",
                "usi_about": "I have taught oil painting and drawing at independent studios, artist guild workshops and at private schools, including at St. Georges School, West Point Grey Academy, South Delta Artists guild, and in my studio for a good number of years. I studies at the Ontario College of art and In Florence Italy.",
                "use_image": "michaelthumb174201635617.jpg",
                "age_description": "All Ages",
                "col_description": "All Levels",
                "timeShow": "11:30 AM",
                "dayName": "Saturday",
                "dateShow": "Jul 02",
                "dateShowC": "Jul 02, 2016",
                "cla_deadline2": 6,
                "cla_deadline": "Jul 01, 2016",
                "number_reviews": 0,
                "star_general": 0,
                "students": 0,
                "number_session": "6 Sessions",
                "spot_left": 5
            }

            $scope.init = function(){
                $scope.courseInfo
            }

            $scope.courseImg= $scope.courseInfo.cor_image
            $scope.instructorImg= $scope.courseInfo.use_image

            $scope.youCanLearn= $scope.courseInfo.cor_learn.split(".")
            $scope.courseLink= "http://bit.ly/accel0"+$scope.courseInfo.cor_id

        }]);



