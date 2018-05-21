$(document).ready(onReady);

function onReady(){
    
    console.log('JQ');
    $('#generateButton').on('click', appendToDom);
    $('.swapButton').on('click', swapButton);
    $('.deleteButton').on('click', deleteButton);
    swapButton();
    deleteButton();

}

let count = 0;

function appendToDom(){
    
    count+=1;
    $('#divElement').append(`<div class = "newElement" id="divElement">
                    div Element<p>
                    ${count}
                    <button class = "swapButton">Swap</button>
                    <button class = "deleteButton">Delete</button>
                    </p>
                    </div>`)
}

function swapButton(){
    console.log('in swap button');

    $(this).toggleClass( 'yellow' );
}

function deleteButton(){
    console.log('in delete button');

    $(this).remove();
}

