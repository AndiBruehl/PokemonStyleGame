

class Sprite {
    constructor({
        position,
        velocity,
        image,
        frames = { max: 1 }
    }) {
        this.position = position
        this.image = image
        this.frames = frames
        this.image.onload = () => {
            this.width = this.image.width / this.frames.max
            this.height = this.image.height
        }
    }

    draw() {
        context.drawImage(
            this.image,
            // Cropping der Spielerfigur
            0,
            0,
            this.image.width / this.frames.max,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max,
            this.image.height,
        )
    }

};

class Boundary {
    static width = 48 //48 -> 4*12 4-> Map wurde mit 400% gespeichert, 12 -> Größe der Assets (12x12)
    static height = 48
    constructor({ position }) {
        this.position = position
        this.width = 48
        this.height = 48
    }

    drawBoundary() {
        context.fillStyle = 'transparent'
        context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}