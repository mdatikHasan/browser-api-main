/* console.log('i am here');

// alert('Ma is coming!!');

const maComing = () => {
    alert('Ammu is coming. Open the book');
}

const askPicnic = () => {
    const response = confirm('Are you going to picnic?');
    console.log(response);
    if (response === true) {
        alert('amake fee ta bKash kore de');
    }
    else {
        console.log('DGM !!! Door e giya mor!!!');
    }
}

const askName = () => {
    const name = prompt('What is your name?');
    if (name) {
        console.log(name)
    }
} */


// practice 

//  alert('ma is comming');

const maComing = () => {
    alert('Ammu is coming . Open the book')
}

const askPicnic = () => {
    const response = confirm('Are you going to picnic ?');
    if (response === true) {
        alert('fee ta bkash e pathiye de ...')
    } else {
        alert('dure gia mor sala')
    }
    //    console.log(response)
}

const askName = () => {
    const name = prompt('What is your name?');
    if (name) {
        console.log(name);
    } else if (name === '') {
        prompt(name)
    }else if(name === null){
        alert('You cancle your name')
    }else{
        alert('ok miah')
    }

}