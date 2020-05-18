console.log('%c HI', 'color: firebrick')
window.addEventListener('load', (event) => {

    /*///// challenge 1//////*/

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then((response) => {
            return response.json();
        })
        .then((json) => {

            console.log(json);

            let img = [];
            img = json.message;

            let imgcontainer = document.getElementById('dog-image-container');

            for (let i = 0; i < img.length; i++) {
                let imgUrl = img[i];
                let imagTag = document.createElement('img');
                imagTag.src = imgUrl;
                imagTag.width = 400;
                imgcontainer.appendChild(imagTag);
            }
        });

    /*/////// challenge 2//////*/

    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    fetch(breedUrl)
        .then((response) => {
            return response.json();

        })
        .then((breeds) => {
            console.log(breeds);
            let ul = document.getElementById('dog-breeds');

            for (const breed in breeds.message) {

                let li = document.createElement('li');
                li.innerText = `${breed}: ${breeds.message[breed]}`
                ul.appendChild(li);
                li.addEventListener('click', function () {
                    li.style.color = 'blue';
                });
            }


        });

    let dropDown = document.getElementById('breed-dropdown');
    dropDown.addEventListener('change', function choose(e) {
        let liArr = document.querySelectorAll('li');
        for (let i = 0; i < liArr.length; i++) {
            let ele = liArr[i];
            if (ele.innerText.charAt(0) === dropDown.value) {
                ele.style.display = "block"
            } else {
                ele.style.display = "none"
            }
        }
    });


});

