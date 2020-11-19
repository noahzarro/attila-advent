function door_of_day(day, doors) {
    doors.forEach(door => {
        if (door["day"] == day) {
            return day
        }
    });

    return { "name": "Anonym", "media": "text", "day": 25, "link": "Gitter Gatter Gotter" }
}


function create_doors() {
    for (let day = 1; day < 25; day++) {

        let back = $("<div></div>").addClass("back")

        let date_of_door = new Date('November ' + day + ', 2020 0:0:0');
        if (date_of_door < Date.now()) {
            /*
            cur_door = door_of_day(day)
            if (cur_door["media"] == "video") {
                back.append('<i class="fas fa-film"></i>').addClass("icon")

            } else if (cur_door["media"] == "audio") {
                back.append('<i class="fas fa-volume-up"></i>').addClass("icon")

            } else if (cur_door["media"] == "pic") {
                back.append('<i class="far fa-image"></i>').addClass("icon")

            } else if (cur_door["media"] == "text") {
                back.append('<i class="fas fa-file-alt"></i>').addClass("icon")

            }
            */
        } else {
            back.text("zfrüeh!")
        }

        let front = $("<div></div>").addClass("front").text(day)
        let card = $("<div></div>").addClass("card")
        card.append(front)
        card.append(back)
        let input_elem = $('<input type="checkbox"></input>')
        let label = $("<label></label>")
        label.append(input_elem)
        label.append(card)
        let door = $("<div></div>").addClass("door")
        door.append(label)
        $("#main-grid").append(door)
    }
}

window.onload = function() {
    create_doors();
    /*
    $.getJSON("https://n.ethz.ch/~zarron/attila/doors.json", function(doors) {
        create_doors(doors);
    })
    */
};