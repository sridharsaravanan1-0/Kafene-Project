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
   
    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products",
        function (data) {
            data.map((item,pos) => {    
                createRowsData(item)
                $('#count').html(data.length)
            })
        },
    );

    
    function createRowsData(data) {
        let tr = (`
        <tr class="tableRow">
            <td class="secondaryText">${data.id}</td>
            <td class="primaryText">${data.medicineName}</td>
            <td class="secondaryText">${data.medicineBrand}</td>
            <td class="primaryText">${data.expiryDate}</td>
            <td class="secondaryText">$${data.unitPrice}</td>
            <td class="secondaryText">${data.stock}</td>
        </tr>`)
        $('#tableBody').append(tr);
    }


    
    var expiredCheckBox = document.getElementById('expired-CheckBox');
    expiredCheckBox.addEventListener('change', function (e) {
        e.preventDefault();
        let table_body = document.getElementById('tableBody');
        let Tr = table_body.getElementsByTagName('tr');
        for (let i = 0; i < Tr.length; i++) {
            let Td = Tr[i].getElementsByTagName('td')[3];
            if (Td) {
                let text_Value = myParser(Td.textContent || Td.innerHTML);
                if (new Date(text_Value).getTime() < new Date().getTime()){
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


    var lowStockCheckBox = document.getElementById('low-Stock-CheckBox');
    lowStockCheckBox.addEventListener('change', function (e) {
        e.preventDefault();
        let table_body = document.getElementById('tableBody');
        let Tr = table_body.getElementsByTagName('tr');
        for (let i = 0; i < Tr.length; i++) {
            let Td = Tr[i].getElementsByTagName('td')[5];
            if (Td) {
                let text_Value = Td.textContent || Td.innerHTML;
                if (text_Value < 100){
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


    function myParser (date) {
        var arr = date.split('-');
        return arr.join(' ')
    }
});
