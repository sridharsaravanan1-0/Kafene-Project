$(document).ready(function () {
    if(localStorage.getItem('loginStatus') !== 'true'){
        location.assign('./home.html')
    }
    const logoutButton = document.getElementById('logoutButton');
    logoutButton.onclick = function (e) {
        e.preventDefault();
        localStorage.setItem('loginStatus', false)
        location.assign('./home.html')
    }
    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users",
        function (data) {           
            data.map((item,pos) => {
                createRowsData(item)              
            })
            searchFunction();
            $('#resetBtn').click(function (e) { 
                e.preventDefault();
                $('#searchBox').val('');
                $('#tableBody tr').css('display','')
            });
        },
    );
    function createRowsData(data) {
        let tr = (`
        <tr class="tableRow">
            <td class="secondaryText">${data.id}</td>
            <td class="secondaryText"><img src=${data.profilePic}/></td>
            <td class="secondaryText">${data.fullName}</td>
            <td class="primaryText">${data.dob}</td>
            <td class="secondaryText">${data.gender}</td>
            <td class="secondaryText">${data.currentCity}, ${data.currentCountry}</td>
        </tr>`)
        $('#tableBody').append(tr);
    }


    const searchFunction = () => {
        $('#searchForm').submit((e) => {
            let search_Value = document.getElementById('searchBox').value.toUpperCase();
            e.preventDefault();
            if (search_Value.length < 2) {
                alert('Please enter atleast 2 characters');
                $('#tableBody tr').css('display','')
            } else {
                $.get(`https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName=${search_Value}`,
                    function (data, textStatus) {

                        let table_body = document.getElementById('tableBody');
                        let Tr = table_body.getElementsByTagName('tr');
                        for (let i = 0; i < Tr.length; i++) {
                            let Td = Tr[i].getElementsByTagName('td')[2];
                            if (Td) {
                                let text_Value = Td.textContent || Td.innerHTML;

                                if (text_Value.toUpperCase().indexOf(search_Value) > -1) {
                                    Tr[i].style.display = "";
                                } else {
                                    Tr[i].style.display = 'none';
                                }
                            }
                        }
                    },
                );
            }
        })
    }
});
