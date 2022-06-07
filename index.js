function highlightTableRowOnClick() {
    let table = document.querySelector('table');
    table.className = "EB_table";
    let cells = table.getElementsByTagName('td');

    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        cell.addEventListener('click',function () {
            
            let rowId = this.parentNode.rowIndex;
            let rowsNotSelected = table.getElementsByTagName('tr');
            for (let row = 0; row < rowsNotSelected.length; row++) {
                rowsNotSelected[row].style.backgroundColor = "";
                rowsNotSelected[row].classList.remove('selected');
            }
            let rowSelected = table.getElementsByTagName('tr')[rowId];
            rowSelected.style.backgroundColor = "green";
            rowSelected.className += " selected";
        });
    }

}

function highlightButtonOnHover(){
    let button = document.querySelector('button');
    button.addEventListener('mouseenter',function(){
        button.style.backgroundColor = "green";
    });
    button.addEventListener('mouseout', function(){
        button.style.backgroundColor = "White";
    });
}

function phoneNumberOnClick(){
    let button = document.getElementById('phoneNO');
    button.addEventListener('click', function(){
        alert('+254793870258');
    });
}

window.onload = highlightTableRowOnClick, highlightButtonOnHover, phoneNumberOnClick;