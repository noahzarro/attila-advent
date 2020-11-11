function create_doors() {
    for (let day = 1; day < 25; day++) {

        let text_to_append

        let date_of_door = new Date('November ' + day + ', 2020 0:0:0');
        if (date_of_door < Date.now()) {
            text_to_append = "secret"
        } else {
            text_to_append = "zfrüeh!"
        }

        let front = $("<div></div>").addClass("front").text(day)
        let back = $("<div></div>").addClass("back").text(text_to_append)
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
};