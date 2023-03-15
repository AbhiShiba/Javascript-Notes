const bodyHtml = document.querySelector('body');

async function getRandomData () {
    const req = await fetch("https://randomuser.me/api/");
    const res = await req.json();
    console.log(res.results);
    createDetails(res.results[0])
}

getRandomData()


function createDetails (obj) {
    if(document.querySelector('#person') !== null){
        document.querySelector('#person').remove();
    }
    const divElm = document.createElement('div');
    divElm.setAttribute('id',"person");
    const personal = `<h1>${obj.name.first} ${obj.name.last}</h1>
    <img src=${obj.picture.large} alt=${obj.name.first} >
    `
   divElm.innerHTML = personal;
   const ageBtn = document.createElement('button')
   const emailBtn = document.createElement('button')
   const phoneBtn = document.createElement('button')
   ageBtn.innerText = "Age";
   emailBtn.innerText = "email";
   phoneBtn.innerText = "Phone";

   ageBtn.setAttribute("data-attr","age");
   emailBtn.setAttribute("data-attr","email");
   phoneBtn.setAttribute("data-attr","phone");

   const section = document.createElement('section');
   const info = document.createElement('h1');
   info.innerText = "Additional info"
   const para = document.createElement('p');

   ageBtn.addEventListener('click',() => {showInfo(para,obj.dob.age,"age")});
   emailBtn.addEventListener('click',() => {showInfo(para,obj.email,"email")});
   phoneBtn.addEventListener('click',() => {showInfo(para,obj.phone,"phone")});

   section.append(info,para);
   const fetchBtn = document.createElement('button');
   fetchBtn.setAttribute('id',"getUser");
   fetchBtn.innerText = "Get User"
   fetchBtn.addEventListener('click',() => {getRandomData()})
   divElm.append(ageBtn,emailBtn,phoneBtn,section,fetchBtn)
   bodyHtml.append(divElm);
}

function showInfo (tag,arg,title) {
    tag.innerText = `${title}: ${arg}`;
}

