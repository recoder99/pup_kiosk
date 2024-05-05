var map = document.querySelector('#map-path').getElementsByTagName("area");
var imgMap = document.querySelector('#img-map');

var infoPic = document.getElementById('info-img');
var infoTitle = document.getElementById('info-title');
var infoText = document.getElementById('info-text');

mapData = {
    "pup-oval": {
        "title": "PUP Oval",
        "description": "A football field that can serve as softball, soccer, and football fields for students.",
        "img-src": "oval2.jpg"
    },
    "gazebo": {
        "title": "PUP Gazebo",
        "description": "Used by students to conduct study session or to just hang out and relax",
        "img-src": "gazebo.jpg"
    },
    "grandstand": {
        "title": "PUP Grand Stand",
        "description": "A well known Grand Stand by students of PUP used in special ocassions",
        "img-src": "grandstand.jpg"
    },
    "interim-chapel": {
        "title": "Interfaith Chapel",
        "description": "a sacred space designed to provide a welcoming environment for people of all faiths and beliefs to come together for prayer, reflection, and meditation, fostering spiritual growth, understanding, and respect for diversity. ",
        "img-src": "chapel.jpg"
    },
    "comm-bldg": {
        "title": "PUP Community Building",
        "description": "A building use for other events in the campus",
        "img-src": "comm.jpg"
    },
    "mabini-shrine": {
        "title": "Apolinario Mabini Shrine",
        "description": "a historic site in Santa Mesa, Manila, Philippines. It is noted for being the residence of Filipino military leader Apolinario Mabini who figured in the Philippine Revolution.",
        "img-src": "mabini.jpg"
    },
    "nutri-bldg": {
        "title": "Nutrition and Food Science Building",
        "description": "It houses the students of PUP related to studies involving food nutrition and sciences",
        "img-src": "nutri.png"
    },
    "tennis-court":{
        "title": "PUP Tennis Court",
        "description": "A well integrated tennis court for the students of PUP playing tennis",
        "img-src": "tennis.jpg"
    },
    "basketball-court":{
        "title": "PUP Basketball Court",
        "description": "A well integrated tennis court for the students of PUP playing basketball",
        "img-src": "bball.jpg"
    },
    "visit-info-center":{
        "title": "Visitor Information Center",
        "description": "Part of PUP services that guides visitors in entering PUP",
        "img-src":  "No Image Found"
    },
    "gymnasium":{
        "title": "PUP Gymnasium",
        "description": "A well integrated gymansium used for sports, events, and special occassions",
        "img-src": "gym1.jpg"
    },
    "swimming-pool":{
        "title":"Swimming Pool",
        "description": "An olympic-sized swimming pool that is capable of handling several swimming classes and student athlete activities simultaneously.",
        "img-src": "pool1.jpg"
    },
    "obelisk":{
        "title": "PUP Obelisk",
        "description": "It is one of the murals of PUP which symbolizes as an emblem of strength and greatness that only time can change.",
        "img-src": "obelisk.jpg"
    },
    "pylon": {
        "title": "PUP Pylon",
        "description": "It is the main symbol mural of PUP which symbolizes truth, excellence, and wisdom.",
        "img-src": "pylon2022.jpg"
    },
    "freedom-park": {
        "title": "Freedom Park",
        "description": "It is one of the famous spots in PUP used to hold flag ceremonies.",
        "img-src": "freedom.jpg"
    },
    "maintainance-bldg": {
        "title": "Campus Development and Maintainance Building",
        "description": "Located near East and South wing of main building.",
        "img-src": "No Image found"
    },
    "alumni": {
        "title": "Tahanan ng Alumni",
        "description": "It is created with the goal of serving graduate students of Sintang Paaralan",
        "img-src": "alumni.jpg"
    },
    "pe-bldg":{
        "title": "PUP Physical Education Building",
        "description": "A building that houses the PUP College of Human Kinestetics department",
        "img-src": "pe.jpg"
    },
    "library": {
        "title": "Ninoy Aquino Library and Learning Resources Center",
        "description": "It is one of the largest library in Southeast Asia situated at PUP",
        "img-src": "lib.jpg"
    },
    "ferry": {
        "title": "PUP ferry station",
        "description": "One of the ferry stations in Metro Manila Pasig River which gives direct station to the campus",
        "img-src": "ferry.jpg"
    },
    "lagoon": {
        "title": "PUP Lagoon",
        "description": " It is a favorite place of the students to hang out during break time and students with no classes. It al also houses the PUP Ampitheater",
        "img-src": "lagoon.jpg"
    },
    "charlie-del-rosario": {
        "title": "Charlie Del Rosario Building",
        "description": "One of the facilities in PUP Sta. Mesa which is named after Charlie Del Rosario who fought the Marcos Regime",
        "img-src": "cdr.jpg"
    }

    
}

for (const i in map){
    if (map[i].name == "item"){
        break;
    }
    map[i].addEventListener('click', function(){
        getInfo(map[i]);
    })
}

imgMap.onload = function() {
        resizeMap();
}


function getInfo(map){
    console.log(mapData[map.title]);
    var x = mapData[map.title];
    infoTitle.innerHTML = x["title"];
    infoPic.src = "img/" + x["img-src"];
    infoText.innerHTML  = x["description"];
}


function resizeMap() {
    var imgWidth = imgMap.width;
    var imgHeight = imgMap.height;

    var imgWidthRatio = imgWidth / 2434;
    var imgHeightRatio = imgHeight / 1459;

    console.log(imgWidth);
    console.log(imgHeight);


    for(const i in map){
        if (map[i].name == "item"){
            break;
        }
        var temp_coords = map[i].coords.split(",");
        var isHeight = true;
        var coordString = "";
    
        //divide the coordinates by its ratio
        for (const i in temp_coords){
            isHeight = !isHeight;
            temp_coords[i] = Number(temp_coords[i])
            if(isHeight){
                temp_coords[i] *= imgHeightRatio;
            } else {
                temp_coords[i] *= imgWidthRatio;
            }
            temp_coords[i] = Math.floor(temp_coords[i]);
        }
    
        //convert coordinates back to string
        for (const i in temp_coords){
            coordString += temp_coords[i]
            if (i < temp_coords.length-1){
                coordString += ","
            }
        }

        map[i].coords = coordString;
        
    }

}
