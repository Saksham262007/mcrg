class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2')
        title.html("car racing game")
        title.position(200,200)
        var input = createInput("name")
        var button = createButton("play")
        input.position(300,300)
        button.position(400,400)
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name = input.value()
            playerCount += 1
            player.update(name)
            player.updateCount(playerCount)
            var greeting = createElement('h3')
            greeting.html("hello"+name)
            greeting.position(100,100)

        })
    }
}
