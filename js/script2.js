const assignedTask = document.getElementById('assigned-task');
const completedTask = document.getElementById('completed-task');

let assignedValue = parseInt(assignedTask.innerText)
let CompletedValue = parseInt(completedTask.innerText)

const history = document.getElementById('history')


// button functionality
function completeTask(event){
    
    const title = event.parentNode.parentNode.children[1].innerText;
    const button = event;

    const p = document.createElement('p');
    p.classList = 'my-2 font-bold'
    
    assignedValue--;
    CompletedValue++;

    assignedTask.innerText = assignedValue;
    completedTask.innerText = CompletedValue;

    alert('Board Updated Successfully')
        button.disabled = true;
        button.innerText = 'Completed'

        p.innerText = `You Have completed ${title} task at ${new Date().toLocaleTimeString()}`;
        history.appendChild(p)
        if (assignedValue == 0) {
            alert('You Have Completed Every Task')
            
        }


};



// // clearing history
document.getElementById('clear-history').addEventListener('click', function () {
    const historyDiv = document.getElementById('history');

    historyDiv.innerHTML = '';
});


// dynamic date
const headingDate = document.getElementById('heading-date')
headingDate.innerText = new Date().toLocaleDateString('en-us',{
    weekday: 'short', 
    day: 'numeric', 
    month: 'short', 
    year: 'numeric'
});

// changing theme dynamically
const bgColors = ['#edede9', '#d6ccc2', '#f5ebe0', '#e3d5ca', '#d5bdaf', '#e9edc9', '#cce3de'];
let i = 0;
document.getElementById('color-change-btn').addEventListener('click', function () {
    document.body.style.backgroundColor = bgColors[i];
    // index++
    i = (i + 1) % bgColors.length
});
