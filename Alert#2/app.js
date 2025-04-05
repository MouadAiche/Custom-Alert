// custom alert #2
const showalert = document.getElementById('showalert')
const alertcontainer = document.getElementsByClassName('alertcontainer')[0];
const confirmation = document.getElementById('confirmation')

// show alert

showalert.addEventListener('click', function(){
    alertcontainer.style.display = 'flex' ;
});

// hide alert

confirmation.addEventListener('click', function(){
    alertcontainer.style.display = 'none';
});