const taskList = document.querySelector('#myTaskList');

/* EXERCISE 5: 
        Add a new task to the list.
        Suggestion:
        - Use document.getElementById to get the UL item and the input text
        - Use the document.createElement to create the new List Item
        - Append the child to the UL
    */
const addNewTask = function () {
    // checking if the user is trying to add an empty string and alerting 
    if (document.querySelector('#newTask').value === '') {
        alert('please enter a task!')
    } else {
        console.log(event); //returns undefined. why?  !!!!!!!!!!!!
        // getting the input text
        const inputText = document.querySelector('#newTask').value;
        // console.log(inputText);

        // creating a new li to later fill with the previous text
        const newListItem = document.createElement('li');
        // console.log(newListItem);

        // setting the inner text of the li to newTask
        newListItem.innerText = inputText;
        // console.log(newListItem);

        // getting reference to the father //moved outside the function so i can reference it anywhere
        // const taskList = document.querySelector('#myTaskList');
        // console.log(taskList);

        // appending child to the father
        taskList.appendChild(newListItem)

        /* REVIEWME: resetting input area to blank
        inputText.innerText = ''
        */
        // deleting the task added
        document.querySelector('#newTask').value = ''

    }

}

/* EXERCISE 6: 
          Create a method "removeLast" which removes the last item from the task list
      */
const removeLast = function () {
    // console.log(taskList);
    // console.log(taskList.childElementCount);

    // removing last child element if there are tasks to remove
    taskList.childElementCount === 0 ? alert('There are no tasks to remove') : taskList.removeChild(taskList
        .lastChild)
    console.log(taskList.childNodes);
    console.log(taskList.childElementCount);

}

/* EXERCISE 7: 
          Create a method "removeFirst" which removes the first item from the task list
      */
const removeFirst = function () {
    // taskList.childElementCount === 1 ? alert('There are no tasks to remove') : taskList.removeChild(taskList
    //     .FistElementChild) //doesn'work like first
    // console.log(taskList.childNodes);

    // checking id the task node list has lenght === 0 to alert that there are no more tasks to remove
    if (taskList.childNodes.length === 0) {
        alert('There are no tasks to remove')
    } else {
        // remove the task
        taskList.removeChild(taskList.firstChild)
        console.log(taskList.firstChild);
        console.log(taskList.firstElementChild);

    }

}

/* EXERCISE 8: 
         Create a method "getTasksAsArray" which returns (and print to the console) an array containing the tasks as string
      */
const getTasksAsArray = function () {
    // creating the array 
    const arrayOfListItems = document.querySelectorAll('li');
    // console.log(arrayOfListItems[0]);

    // need another array to store the values as strings
    const arrayOfStringTasks = [];

    // looping through each list item and pushing the innertext into the previous array
    for (let listItem of arrayOfListItems) {
        arrayOfStringTasks.push(listItem.innerText)
    }
    // console.log(arrayOfStringTasks);
    return arrayOfStringTasks
}

/* EXERCISE 9:
         Create a method "changeTaskBackgroundColor" which takes the color from the color picker with an 
         onchange event listener ad applies it as background to every list item
      */
const changeTaskBackgroundColor = function () {
    // getting reference to colopicker value which is the color selected
    const colorPicker = document.querySelector('#colorPicker').value;
    // console.log(colorPicker);
    taskList.style.backgroundColor = colorPicker

    // adding event change
    // colorPicker.addEventListener('change', )
}



/* EXTRA */

/* EXERCISE 10: 
         Create a method "bubbleSort()" which sort the task list alphabetically using the bubble sort algorithm

         Use your spare time to beautify your task list with CSS.
         Suggestion:
         - Break the code into many function for semplicity 
         - Reuse the functions previously created
      */
const bubbleSort = function () {
    // this is the array the ex8 returned
    console.log('return from the previous function', getTasksAsArray());

    // cathing that function in variable
    let arrayToSort = getTasksAsArray();
    console.log('now is a variable', arrayToSort);
    // i can compare the strings like this
    // returns true if string1 comes alphabetically first than string2. else false
    console.log('ardz' > 'ardi');

    // console.log(arrayToSort.sort());

    for (i = 0; i < arrayToSort.length; i++) {
        if (arrayToSort[i] > arrayToSort[i + 1]) {
            arrayToSort[i + 1] = arrayToSort[i]
            arrayToSort[i] = arrayToSort[i + 1]
            console.log(arrayToSort[i], arrayToSort[i + 1]);
            break
        }
    }




}