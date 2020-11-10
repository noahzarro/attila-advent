function create_doors() {
    for (let day = 1; day < 25; day++) {

        let front = $("<div></div>").addClass("front").text(day)
        let back = $("<div></div>").addClass("back").text("fagotto")
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