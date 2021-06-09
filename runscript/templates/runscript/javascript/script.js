if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    console.log("hey im ready new change new herea")
    FilterLog()
    MakeTab()
    AjaxTest()
}

function AjaxTest(){
    let ajaxtest = document.getElementById("ajaxtest")

    $.ajax({
        type: 'GET',
        url: '/runscript/haha/',
        data: {
            "forreal": "this is just a test",
            "nextnext": "this is a second test",
        },
        success: function(response){
            console.log('success', response.user)

            const data = response.user
            console.log(data)
            data.forEach( user =>{
                ajaxtest.innerHTML += `
                    ${user.user} - ${user.id}
                `
            })
        },
        error: function (error) {
            console.log('error',error)
        }
    })
}

function FilterLog() {
    $("#myInput").on("keyup", function () {
        const value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
}

function MakeTab(){
    $("#textbox").on("keydown", function (e) {
        if (e.keyCode === 9) {
        e.preventDefault();
        let start = this.selectionStart;
        let end = this.selectionEnd;

        // set textarea value to: text before caret + tab + text after caret
        this.value = this.value.substring(0, start) + "\t" + this.value.substring(end);

        // put caret at right position again
        // if these two dont match it will highlight stuff within the index
        this.selectionStart = this.selectionEnd = start + 1;
        }
    })
}

// function myFunction() {
//     var input, filter, table, tr, td, cell, i, j;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("myTable");
//     tr = table.getElementsByTagName("tr");
//     for (i = 1; i < tr.length; i++) {
//         // Hide the row initially.
//         tr[i].style.display = "none";
//
//         td = tr[i].getElementsByTagName("td");
//         for (var j = 0; j < td.length; j++) {
//             cell = tr[i].getElementsByTagName("td")[j];
//             if (cell) {
//                 if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
//                     tr[i].style.display = "";
//                     break;
//                 }
//             }
//         }
//     }
// }