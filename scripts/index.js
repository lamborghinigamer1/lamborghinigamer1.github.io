Greeting();

function Greeting() {
    const TimeElement = document.getElementById('time');
    const FullDate = new Date;
    const time = FullDate.getHours();
    // const time = 1; //timetest
    const Part = ['You should not be awake right now. Sleep well :)', 'Good morning :)', 'Good Evening :)', 'Good Afternoon :)'];
    let count = 0;
    switch (true) {
        case time > 17:
            count = 2;
            break;
        case time > 11:
            count = 3;
            break;
        case time > 5:
            count = 1;
            break;
        default:
            count = 0;
            break;
    }
    console.log(Part[count], time);
    TimeElement.innerHTML = Part[count];
}