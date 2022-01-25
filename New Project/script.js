document.body.innerHTML = `<div class="heading-container">
<h1>Ice and Fire</h1>
</div>
<div id="mainContainer" class="main-container" ></div>
`
const getApiData = async() => {
    try {
        const data = await fetch("https://www.anapioficeandfire.com/api/books")
        const books = await data.json();
        console.log(books.length);
        var length = 0;
        books.forEach((books) => {

            displayData(books, length);
            length++;
        });
        console.log();

    } catch (error) {
        console.log(error);
    }
}

getApiData();


const displayData = (obj, length) => {

    const chars = {
        0: obj.characters[8],
        1: obj.characters[15],
        2: obj.characters[11],
        3: obj.characters[14],
        4: obj.characters[16],
    }


    mainContainer.innerHTML += `
    <div class="container">
    <h3 class="red">Book name: ${obj.name}</h3><br>
    <p class="thick red">ISBN: ${obj.isbn}</p><br>
    <p class="thick red">Pages: ${obj.numberOfPages}</p><br>
    <p class="thick red">Authors: ${obj.authors}</p><br>
    <p class="thick red">Publisher: ${obj.publisher}</p><br>
    <p id="1" class="1">Character 1: ${chars[0]}</p><br>
    <p id="2" class="2">Character 2: ${chars[1]}</p><br>
    <p id="3" class="3">Character 3: ${chars[2]}</p><br>
    <p id="4" class="4">Character 4: ${chars[3]}</p><br>
    <p id="5" class="5">Character 5: ${chars[4]}</p><br>
    </div>
    
    

    `
    async function getCharName(str, length, num) {
        try {
            const datas = await fetch(str);
            const dat = await datas.json();
            var element = document.getElementsByClassName("1");
            if (num == 5) {
                element = document.getElementsByClassName("5");
                element[length].innerHTML = "Character 5: " + dat.name;
            }
            if (num == 1) {
                element = document.getElementsByClassName("1");
                element[length].innerHTML = "Character 1: " + dat.name;
            } else if (num == 2) {
                element = document.getElementsByClassName("2");
                element[length].innerHTML = "Character 2: " + dat.name;
            } else if (num == 3) {
                element = document.getElementsByClassName("3");
                element[length].innerHTML = "Character 3: " + dat.name;
            } else if (num = 4) {
                element = document.getElementsByClassName("4");
                element[length].innerHTML = "Character 4: " + dat.name;
            } else if (num == 5) {
                element = document.getElementsByClassName("5");
                element[length].innerHTML = "Character 5: " + dat.name;
                console.log("Reached");
            } else {
                console.log(error);
            }




        } catch (error) {
            console.log(error);
        }


    }
    getCharName(chars[4], length, 5);
    getCharName(chars[0], length, 1);
    getCharName(chars[1], length, 2);
    getCharName(chars[2], length, 3);
    getCharName(chars[3], length, 4);



}
const displayChar = (characters) => {
    mainContainer.innerHTML += `
    <p>Character: ${characters.name}</p>

    `
}