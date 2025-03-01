const assignedTask = document.getElementById('assigned-task');
const completedTask = document.getElementById('completed-task');

let assignedValue = parseInt(assignedTask.innerText)
let CompletedValue = parseInt(completedTask.innerText)

const headingDate = document.getElementById('heading-date')
headingDate.innerText = new Date().toLocaleDateString('en-us')

const cards = document.querySelectorAll('.card')


cards.forEach(card => {
    const heading = card.querySelector('.title');
    const history = document.getElementById('history')
    const p = document.createElement('p');
    p.classList = 'my-2 font-bold'

    const button = card.querySelector('.btn')

    button.addEventListener('click', function () {


        assignedValue--;
        CompletedValue++;

        assignedTask.innerText = assignedValue
        completedTask.innerText = CompletedValue
        alert('Task Completed')
        button.disabled = true;
        button.innerText = 'Completed'

        p.innerText = `You Have completed ${heading.innerText} task at ${new Date().toLocaleTimeString()}`;
        history.appendChild(p)
        if (assignedValue == 0) {
            alert('Completed Every Task')
            
        }

    });

});

document.getElementById('clear-history').addEventListener('click', function () {
    const historyDiv = document.getElementById('history');

    historyDiv.innerHTML = '';
});


const bgColors = ['#edede9', '#d6ccc2', '#f5ebe0', '#e3d5ca', '#d5bdaf', '#e9edc9', '#cce3de'];
let index = 0;
document.getElementById('color-change-btn').addEventListener('click', function () {
    document.body.style.backgroundColor = bgColors[index];
    // index++
    index = (index + 1) % bgColors.length
});


