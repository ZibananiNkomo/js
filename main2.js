const newParagraph = document.createElement('p');
newParagraph.innerText = 'Added with JavaScript';
document.body.appendChild(newParagraph)

// const newImage = document.createElement('img');
// newImage.setAttribute('src', images/Zeeba.jpeg);
// newImage.setAttribute('alt', 'Angry man ');
// document.body.appendChild(newImage);

const newDiv = document.createElement('div');
newDiv.innerHTML = '<ul><li>One</li><li>Two</li><li>Three</li></ul>'
document.body.appendChild(newDiv);

const newSection = document.createElement('section');
newSection.innerHTML = '<section> Main Section </section>';
document.body.appendChild(newSection);

const newH2 = document.createElement('h2');
newH2.innerHTML = 'CSE 121b';
document.body.appendChild(newH2);

const Paragraph2 = document.createElement('p');
Paragraph2.innerHTML = 'Welcome to JavaScript Language';
document.body.appendChild(Paragraph2);
