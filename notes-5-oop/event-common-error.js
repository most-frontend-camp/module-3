function main() {
    class EventHandler {
        constructor() {
            this.name = "EventHandler"
        }

        onClick = () => {
            console.log("click", this.name)
        }
    }

    const eventHandler = new EventHandler()

    function callEvent(clickEvent) {
        clickEvent()
    }

    callEvent(eventHandler.onClick)
}

main()