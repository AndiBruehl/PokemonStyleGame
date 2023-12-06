const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d");

console.log(collisions);

canvas.width = 1024;
canvas.height = 576;

context.fillStyle = "darkgrey";
context.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = './img/PokemonStyleGameMap1_0.png';

const playerImage = new Image();
playerImage.src = './img/playerDown.png';

class Sprite {
    constructor({
        position,
        velocity,
        image
    }) {
        this.position = position
        this.image = image
    }

    draw() {
        context.drawImage(this.image, this.position.x, this.position.y)
    }

};

const background = new Sprite({
    position: {
        x: -495,
        y: -650,
    },
    image: image
})

const keys = {
    w: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    s: {
        pressed: false,
    },
    d: {
        pressed: false,
    }
}

function animate() {
    window.requestAnimationFrame(animate)

    background.draw()
    context.drawImage(
        playerImage,
        // Cropping der Spielerfigur
        0,
        0,
        playerImage.width / 4,
        playerImage.height,
        // Positioning der Spielefigur
        canvas.width / 2 - (playerImage.width / 4) / 2,
        canvas.height / 2 - playerImage.height / 2,
        playerImage.width / 4,
        playerImage.height,
    )

    if (keys.s.pressed) {
        background.position.y -= 3
    }
    if (keys.w.pressed) {
        background.position.y += 3
    }
    if (keys.a.pressed) {
        background.position.x += 3
    }
    if (keys.d.pressed) {
        background.position.x -= 3
    }

}
animate()

let lastKey = ''

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = true
            lastKey = 'w'
            break
        case 'a':
            keys.a.pressed = true
            lastKey = 'a'
            break
        case 's':
            keys.s.pressed = true
            lastKey = 's'
            break
        case 'd':
            keys.d.pressed = true
            lastKey = 'd'
            break
    }
    console.log(keys)
}
)
window.addEventListener("keyup", (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        case 's':
            keys.s.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
    }
    console.log(keys)
}
)