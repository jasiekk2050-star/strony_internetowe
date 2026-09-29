const choosenPicture = document.querySelector('#select-picture');
const canvas = document.querySelector('#meme');
const textTop = document.querySelector('#text-pop');
const textBottom = document.querySelector('text-bottom');

let picture;

choosenPicture.addEventListener("change", function (e) {
    const pictureURL = URL.createObjectURL(e.target.files[0]);
    picture = new Image();
    picture.src = pictureURL;
    picture.addEventListener("load" , function(){
        console.log('wczytuje obrazek ...');
        updateMeme(canvas, picture);
    });



        

    
});
function updateMeme(canvas, picture){
    const ctx = canvas.getContext("2d");
    const canvasWidth = picture.width;
    const canvasHeight = picture.height;
    const fontSize = Math.floor(canvasHeight / 20);
    const offsetY = canvasHeight / 25;
    canvas.Width = canvasWidth;
    canvas.Height = canvasHeight;
    ctx.drawImage(picture,0,0);
}