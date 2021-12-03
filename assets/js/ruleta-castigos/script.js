const ruleta = document.querySelector("#ruleta");

ruleta.addEventListener("click", girar);
giros = 0;

function girar() {

    if (giros < 1) {
        let rand = Math.random() * 7200;
        calcular(rand);
        giros++;

        document.querySelector(".contador").innerHTML = "TURNOS:" + giros;
    } else {
        Swal.fire({
            icon: 'success',
            html: 'Volver a, ' +
                '<a href="../ruleta-retos/index.html" target="_blank">jugar</a> ',
        }).then((result) => {
            if (result.value == true) {

                giros = 0;

                document.querySelector(".elije").innerHTML = "Tu castigo es: ";
                document.querySelector(".contador").innerHTML = "TURNOS:" + "0";

            }
        })

    }

    function premio(premios) {


        document.querySelector(".elije").innerHTML = "Tu castigo es: " + premios;


    }


    function calcular(rand, premios) {
        valor = rand / 360;
        valor = (valor - parseInt(valor.toString().split(".")[0])) * 360;
        ruleta.style.transform = "rotate(" + rand + "deg)";
        setTimeout(() => {
            switch (premios, true) {
                case valor > 0 && valor < 72:
                    premio("Tienes que tomarte un shot durante 2 segundos.");
                    break;
                case valor > 72 && valor < 144:
                    premio("Tienes que tomarte un shot durante 6 segundos.");
                    break;
                case valor > 144 && valor < 216:
                    premio("Tienes que tomarte un shot durante 5 segundos.");
                    break;
                case valor > 216 && valor < 288:
                    premio("Tienes que tomarte un shot durante 4 segundos.");
                    break;
                case valor > 288 && valor <= 360:
                    premio("Tienes que tomarte un shot durante 3 segundos.");
                    break;
            }
        }, 5000);

    }

}
