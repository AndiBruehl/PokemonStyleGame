class Sprite {
    constructor({
        position,
        velocity,
        image,
        frames = { max: 1 },
        sprites = []
    }) {
        this.position = position
        this.image = image
        this.frames = { ...frames, val: 0, elapsed: 0 }
        this.image.onload = () => {
            this.width = this.image.width / this.frames.max
            this.height = this.image.height
        }
        this.moving = false
        this.sprites = sprites
    }

    draw() {
        context.drawImage(
            this.image,
            // Cropping der Spielerfigur
            this.frames.val * this.width,
            0,
            this.image.width / this.frames.max,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max,
            this.image.height,
        )
        if (this.frames.max > 1) {
            this.frames.elapsed++
        }
        if (!this.moving) return 
            if (this.frames.elapsed % 10 === 0) {

                if (this.frames.val < this.frames.max - 1)
                    this.frames.val++
                else this.frames.val = 0;
            }
        
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
        context.fillStyle = 'rgba(255, 0, 0, 0.5'
        context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    drawbattleZones() {
        context.fillStyle = 'rgba(0, 0, 255, 0.5'
        context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

