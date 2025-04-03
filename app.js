// CUSTOM ALERT

const ShowAlert = document.getElementById('ShowAlert-btn')
const Alert = document.getElementById('Alert-Container')
const Confirmation = document.getElementById('Confirmation-btn')

// SHOW ALERT BTN

ShowAlert.addEventListener( 'click' , function(){
    Alert.style.display = 'flex' ;
});

// CONFIRMATION BTN

Confirmation.addEventListener( 'click' , function(){
    Alert.style.display = 'none' ;
});