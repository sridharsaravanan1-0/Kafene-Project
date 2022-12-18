$(document).ready(function () {
    if (localStorage.getItem('loginStatus') !== 'true') {
        location.assign('./home.html')
    }
    const logoutButton = document.getElementById('logoutButton');
    logoutButton.onclick = function (e) {
        e.preventDefault();
        localStorage.setItem('loginStatus', false)
        location.assign('./home.html')
    }
    var responseArr;
    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders",
        function (data) {
            responseArr = data;
            data.map((item, pos) => {
                createRowsData(item)
                $('#count').html(data.length);
            })
        },
    );
    function createRowsData(data) {
        let tr = (`
        <tr class="table-row">
            <td class="secondaryText">${data.id}</td>
            <td class="primaryText">${data.customerName}</td>
            <td class="primaryText">${data.orderDate}<br><span class="secondaryText">${data.orderTime}</span></td>
            <td class="secondaryText">$${data.amount}</td>
            <td class="primaryText">${data.orderStatus}</td>
        </tr>`)
        $('#tableBody').append(tr);
    }


    var newCheckBox = document.getElementById('newcheck-Box');
    newCheckBox.addEventListener('change', function (e) {
        e.preventDefault();
        let table_body = document.getElementById('tableBody');
        let Tr = table_body.getElementsByTagName('tr');
        for (let i = 0; i < Tr.length; i++) {
            let Td = Tr[i].getElementsByTagName('td')[4];
            if (Td) {
                let text_Value = Td.textContent || Td.innerHTML;
                if (text_Value === 'New'){
                    if(this.checked === true){
                        Tr[i].style.display = "";
                        $('#count').html(parseInt($('#count').html()) + 1 );
                    }else{
                        Tr[i].style.display = "none";
                        $('#count').html(parseInt($('#count').html()) - 1 );
                    }     
                }
            }
        }
        console.log(table_body.getElementsByTagName('tr').length)
    })



    var DeliveredCheckBox = document.getElementById('Deliveredcheck-Box');
    DeliveredCheckBox.addEventListener('change', function (e) {
        e.preventDefault();
        let table_body = document.getElementById('tableBody');
        let Tr = table_body.getElementsByTagName('tr');
        for (let i = 0; i < Tr.length; i++) {
            let Td = Tr[i].getElementsByTagName('td')[4];
            if (Td) {
                let text_Value = Td.textContent || Td.innerHTML;
                if (text_Value === 'Delivered'){
                    if(this.checked === true){
                        Tr[i].style.display = "";
                        $('#count').html(parseInt($('#count').html()) + 1 );
                    }else{
                        Tr[i].style.display = "none";
                        $('#count').html(parseInt($('#count').html()) - 1 );
                    }     
                }
            }
        }
    })




    var IntransitcheckBox = document.getElementById('Intransitcheck-Box');
    IntransitcheckBox.addEventListener('change', function (e) {
        e.preventDefault();
        let table_body = document.getElementById('tableBody');
        let Tr = table_body.getElementsByTagName('tr');
        for (let i = 0; i < Tr.length; i++) {
            let Td = Tr[i].getElementsByTagName('td')[4];
            if (Td) {
                let text_Value = Td.textContent || Td.innerHTML;
                if (text_Value === 'InTransit'){
                    if(this.checked === true){
                        Tr[i].style.display = "";
                        $('#count').html(parseInt($('#count').html()) + 1 );
                    }else{
                        Tr[i].style.display = "none";
                        $('#count').html(parseInt($('#count').html()) - 1 );
                    }     
                }
            }
        }
    })




    var PackedCheckBox = document.getElementById('Packedcheck-Box');
    PackedCheckBox.addEventListener('change', function (e) {
        e.preventDefault();
        let table_body = document.getElementById('tableBody');
        let Tr = table_body.getElementsByTagName('tr');
        for (let i = 0; i < Tr.length; i++) {
            let Td = Tr[i].getElementsByTagName('td')[4];
            if (Td) {
                let text_Value = Td.textContent || Td.innerHTML;
                if (text_Value === 'Packed'){
                    if(this.checked === true){
                        Tr[i].style.display = "";
                        $('#count').html(parseInt($('#count').html()) + 1 );
                    }else{
                        Tr[i].style.display = "none";
                        $('#count').html(parseInt($('#count').html()) - 1 );
                    }     
                }
            }
        }
    })
});