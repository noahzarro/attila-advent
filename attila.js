let eth_domain = "https://www.eth-lerngruppe.ch/advent/";
let doors = []
let month = "December"

function door_of_day(day) {

    let to_return = { "name": "Anonym", "media": "text", "day": 25, "link": "Gitter Gatter Gotter" }

    doors.forEach(door => {
        if (door["day"] == day) {
            to_return = door;
        }
    });

    return to_return
}

function on_checked(checkboxElem, day) {
    if (!checkboxElem.checked) {
        if (new Date(month + " " + day + ', 2020 0:0:0') < Date.now()) {
            show_modal(door_of_day(day));
        }
    }
}

function create_doors() {
    for (let day = 1; day < 25; day++) {

        let back = $("<div></div>").addClass("back")

        let date_of_door = new Date(month + " " + day + ', 2020 0:0:0');
        if (date_of_door < Date.now()) {

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

        } else {
            back.text("zfrüeh!")
        }

        let front = $("<div></div>").addClass("front").text(day)
        let card = $("<div></div>").addClass("card")
        card.append(front)
        card.append(back)
        let input_elem = $('<input type="checkbox" onchange="on_checked(this, ' + day + ')"></input>')
        let label = $("<label></label>")
        label.append(input_elem)
        label.append(card)
        let door = $("<div></div>").addClass("door")
        door.append(label)
        $("#main-grid").append(door)
    }
}



function show_modal(door) {
    $("#modal").css("display", "block")

    if (door["media"] == "pic") {
        $("#img").css("display", "block")
        $("#img").attr("src", eth_domain + door["link"]);
    } else if (door["media"] == "video") {
        $("#video").html('<source src="' + eth_domain + door["link"] + '" type="video/mp4"></source>');
        $("#video").css("display", "block")
        $("#video")[0].load();
        //$("#video")[0].play();
    }

    $("#name").text(door["from"]);
}

function hide_modal() {

    $("#img").css("display", "none")
    $("#video").css("display", "none")
    $("#video")[0].pause();

    $("#modal").css("display", "none")
}

window.onload = function() {

    $.getJSON(eth_domain + "doors.json", function(req_doors) {
        doors = req_doors
        create_doors();
    })


    $("#close-btn").click(() => {
        hide_modal()
    })
};


window.addEventListener('click', function(e) {
    if (!document.getElementById('modal-content').contains(e.target)) {
        hide_modal()
    }
});