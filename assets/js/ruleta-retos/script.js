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
            html: '<button class="btn btn-dark" style="color:#ffffff;"> <a href="../ruleta-retos/index.html">¡Si cumplí!</a> </button>' + '<br> <br> <button type="button" class="btn btn-dark"><a href="../ruleta-castigos/index.html" target="_blank">No cumplí, ¡CASTIGO!</a></button> ',
            showConfirmButton: false
        }).then((result) => {
            if (result.value == true) {

                giros = 0;

                document.querySelector(".elije").innerHTML = "Reto: ";
                document.querySelector(".contador").innerHTML = "TURNOS:" + "0";

            }
        })

    }

    function premio(premios) {


        document.querySelector(".elije").innerHTML = "Reto: " + premios;


    }


    function calcular(rand, premios) {
        valor = rand / 360;
        valor = (valor - parseInt(valor.toString().split(".")[0])) * 360;
        ruleta.style.transform = "rotate(" + rand + "deg)";
        setTimeout(() => {
            switch (premios, true) {
                case valor >= 0 && valor <= 13:
                    premio("Quítate una prenda");
                    break;
                case valor > 13 && valor <= 26:
                    premio("Tomarse una foto impublicable y subirla a Facebook");
                    break;
                case valor > 26 && valor <= 39:
                    premio("Dale un beso al de tu derecha.");
                    break;
                case valor > 39 && valor <= 52:
                    premio("Llama a tu ex");
                    break;
                case valor > 52 && valor <= 65:
                    premio("Confiesa una verdad intima")
                    break;
                case valor > 65 && valor <= 78:
                    premio("Sube una foto vergonzosa a facebook con el  #RetoIMCumplido");
                    break;
                case valor > 78 && valor <= 91:
                    premio("Besa al que consideres más guap@ de la fiesta.");
                    break;
                case valor > 91 && valor <= 104:
                    premio("Métete un hielo a la playera por una ronda.");
                    break;
                case valor > 104 && valor <= 117:
                    premio("Acábate lo que te queda de tu I am");
                    break;
                case valor > 117 && valor <= 130:
                    premio("Quítate 2 prendas durante una ronda.");
                    break;
                case valor > 130 && valor <= 143:
                    premio("Quítate 3 prendas por 2 rondas");
                    break;
                case valor > 143 && valor <= 156:
                    premio("Que el de la derecha revise tu galería de fotos. ");
                    break;
                case valor > 156 && valor <= 169:
                    premio("Deja que te revisen tu Instagram. ");
                    break;
                case valor > 169 && valor <= 182:
                    premio("Lame la cara de la persona que está a tu derecha.");
                    break;
                case valor > 182 && valor <= 195:
                    premio("Toma 3 seg de IAM mientras porreas contra un tubo.");
                    break;
                case valor > 195 && valor <= 208:
                    premio("Invita el próximo 6 de I am. ");
                    break;
                case valor > 208 && valor <= 221:
                    premio("Haz 15 lagartijas.");
                    break;
                case valor > 221 && valor <= 234:
                    premio("Besa a alguien de los jugadores en el cuello.");
                    break;
                case valor > 234 && valor <= 247:
                    premio("Lámele el pie al de la izquierda.");
                    break;
                case valor > 247 && valor <= 260:
                    premio("Publica en tu estado de whats que la tienes pequeña. #RetoIMCumplido");
                    break;
                case valor > 260 && valor <= 273:
                    premio("Intercambia algunas prendas del de la derecha. ");
                    break;
                case valor > 273 && valor <= 286:
                    premio("Canta una canción acapella.");
                    break;
                case valor > 286 && valor <= 299:
                    premio("Besa al de la izquierda en la boca.");
                    break;
                case valor > 299 && valor <= 312:
                    premio("Beso de 3 seg.");
                    break;
                case valor > 312 && valor <= 325:
                    premio("Haz un REVERZASO DE I am");
                    break;
                case valor > 325 && valor <= 338:
                    premio("Perrea durante 5 seg.");
                    break;
                case valor > 338 && valor <= 351:
                    premio("Deja que te revisen el whatsapp.");
                    break;
            }
        }, 5000);

    }

}