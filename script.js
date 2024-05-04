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
