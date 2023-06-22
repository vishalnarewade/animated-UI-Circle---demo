const { innerWidth, innerHeight } = window;

const mainIcon = document.querySelectorAll('.container .icon');
const mainContent = document.querySelectorAll('.container .content');
const socials = ['fa-brands fa-wikipedia-w'];

const createEle = (tag, options = {}) => {
    let ele = document.createElement(tag);
    let keys = Object.keys(options);
    
    for (let i = 0; i < keys.length; i++) {
        ele.setAttribute(keys[i], options[keys[i]]);
    }

    return ele;
}

for (let i = 0; i < wonders.length; i++) {
    const contentId = "content" + (i+1);
    const divBxEle = createEle('div', {
        "class": (i === 0) ? "imageBig blink_01 active" : "imageBig blink_01",
        "style": "--i:" + (i+1),
        "data-id": contentId
    })

    if (i != 0) divBxEle.setAttribute("style", divBxEle.style.cssText +"; animation-delay: "+ (i)+ "s;");

    document.documentElement.style.setProperty('--icons', i + 1);
    divBxEle.addEventListener('mouseover', showOnHover);

    const imageBigEle = createEle('img', {
        "src": wonders[i].img,
        "alt": "photo"
    })

    divBxEle.appendChild(imageBigEle);
    mainIcon[0].appendChild(divBxEle);

    const contentInnerEle = createEle('div', {
        "class": (i === 0) ? "contentInner active" : "contentInner",
        "id": contentId
    })
    const contentCardEle = createEle('div', { "class": "card" });			
    const contentimageBigEle = createEle('div', { "class": "imageBig" });
    const contentimageBigImgEle = createEle('img', { "src": wonders[i].img, "alt": "photo" });
    contentimageBigEle.appendChild(contentimageBigImgEle);
    contentCardEle.appendChild(contentimageBigEle);

    const contenttextContentEle = createEle('div', { "class": "textContent" });
    let contentH2Ele = createEle('h2');
    let contentNameEle = createEle('p');
    contentNameEle.textContent = wonders[i].name;
    let contentRoleEle = createEle('span');
    contentRoleEle.textContent = wonders[i].location;

    contentH2Ele.appendChild(contentNameEle);
    contentH2Ele.appendChild(contentRoleEle);
    contenttextContentEle.appendChild(contentH2Ele);

    const contentUlEle = createEle('ul', { "class": "sci" });

    for (let j = 0; j < socials.length; j++) {
        const contentLiEle = createEle('li');
        const contentLiAEle = createEle('a', { "href": wonders[i].social[j] });
        const contentLiIEle = createEle('i', { "class": socials[j] });

        contentLiAEle.appendChild(contentLiIEle);
        contentLiEle.appendChild(contentLiAEle);
        contentUlEle.appendChild(contentLiEle);
    }

    contenttextContentEle.appendChild(contentUlEle);
    contentCardEle.appendChild(contenttextContentEle);
    
    contentInnerEle.appendChild(contentCardEle);
    mainContent[0].appendChild(contentInnerEle);
}

function showOnHover(e) {
    let imageBig = document.querySelectorAll('.imageBig');
    let contentInner = document.querySelectorAll('.contentInner');

    for (var i = 0; i < contentInner.length; i++) {
        contentInner[i].className = 'contentInner';
    }

    if (this.dataset.id) document.getElementById(this.dataset.id).className = 'contentInner active';

    for (var i = 0; i < imageBig.length; i++) {
        imageBig[i].className = 'imageBig blink_01';
    }

    this.className = 'imageBig blink_01 active';
}

window.addEventListener('resize', function () {
    window.location.reload();
})