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

        if (assignedValue <= 1) {
            alert('Completed Every Task')
            if (assignedValue === 0) {
                return
            }

        }
        assignedValue -= 1
        CompletedValue += 1

        assignedTask.innerText = assignedValue
        completedTask.innerText = CompletedValue
        alert('Task Completed')
        button.disabled = true;

        p.innerText = `You Have completed ${heading.innerText} task at ${new Date().toLocaleTimeString()}`;
        history.appendChild(p)


    });

});

document.getElementById('clear-history').addEventListener('click', function () {
    const historyDiv = document.getElementById('history');
    historyDiv.innerHTML = '';
})