
    const divcontent = document.getElementById('content');
    const universities_url = "scripts/universities.json";

    async function getJsonData(){
        const response = await fetch(universities_url);
        const data = await response.json();

        data.universities.forEach( univ => {
            createUniversity(univ);
        });
    }

    function createUniversity(data){
        let divuniversity = document.createElement('div');
        divuniversity.classList.add('divuniversity');

        let pname = document.createElement('p');

        let lblname = document.createElement('label');
        lblname.innerHTML = data.name;
        lblname.classList.add('lblname');
        pname.appendChild(lblname);

        let pdescription = document.createElement('p');
        pdescription.innerText = data.description;

        let divbuttons = document.createElement('div');
        let buttonUrl = document.createElement('button');
        let buttonRegister = document.createElement('button');
        buttonUrl.classList.add('btn');
        buttonUrl.innerText ='Go To Website';

        buttonRegister.classList.add('btn');
        buttonRegister.innerText = 'Register Now!';
        divbuttons.classList.add('divbuttons');

        divbuttons.appendChild(buttonUrl);
        divbuttons.appendChild(buttonRegister);

        const img = new Image();
        img.onload = function(){
            img.classList.add('uniprofilepix');
        }
        img.src = data.imageUrl;
        let divimg = document.createElement('div');
        divimg.classList.add('divimg');
        divimg.appendChild(img);

        divuniversity.appendChild(pname);
        divuniversity.appendChild(pdescription);
        divuniversity.appendChild(divbuttons);

        divcontent.appendChild(divimg);
        divcontent.appendChild(divuniversity);
    }

    getJsonData();
