function main() {
    function nativeThis() {
        console.log("native:", this);
    }

    const arrowThis = () => {
        console.log("arrow:", this);
    }

    const harry = {
        name: "Harry",
        logThis() {
            console.log("native:", this);
        },
        returnArrowLog() {
            return () => {
                console.log("arrow:", this);
            }
        }
    };

    harry.arrowLog = harry.returnArrowLog();

    const hermione = {
        name: "Hermione"
    }

    hermione.logThis = harry.logThis
    hermione.arrowLog = harry.returnArrowLog();

    harry.arrowLog(); // harry
    hermione.logThis(); // hermione
    hermione.arrowLog(); // harry
}

main()