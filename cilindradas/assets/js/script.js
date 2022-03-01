//calcula a cilindrada do motor;
function cilindrada(){
    //declara as variavéis e captura os campos;
    let curso = document.getElementById("vCurso");
    let diametro = document.getElementById("pDiametro");
    let result = document.getElementById("result");

    let cc;

    //obtém o valor dos campos do formulario;
    curso = curso.value;
    diametro = diametro.value;

    //pi é uma constante usada para calcular volume³;
    const pi = 3.14159265;

    //executa o calculo cc = r² × pi × curso ÷ 1000;
    cc = Math.pow(diametro / 2, 2) * pi * curso / 1000;

    //verifica os campos e retorna o resultado do calculo;
    if(curso <= 0 || diametro <= 0){
        alert("Preencha:\nCilindrada e Curso do Virabrequim.\n\nPara saber a cilindrada em cm³.");
    }else{
        result.textContent = cc.toFixed(2)+"cm³";
    }
}
    //executa a função;
    let calc = document.getElementById("ccSubmit");
        calc.addEventListener("click",cilindrada);

//calcula a capacidade em mL do cilindro;
function mL(){
    //declara as variavéis e carrega os campos;
    let ccmL = document.getElementById("ccmL");
    let TxmL = document.getElementById("TxmL");
    let result2 = document.getElementById("result2");

    let mL = 0;
    let resultado
    let contador = 0;

    //captura o valor dos campos;
    ccmL = ccmL.value;
    TxmL = TxmL.value;

   //executa a formula; 
    do{
        mL = mL + contador;
        resultado = ((ccmL * mL) / ((TxmL * mL) - mL));
        contador++

    }while(mL % 2 == 0){
        if(ccmL <= 0 || TxmL <= 0){
            alert("Preencha: \nCilindrada e Taxa.\n\nPara descobrir a capacidade em ml do cilindro.");
        }else{

            result2.textContent = resultado.toFixed(2)+"ml";
        }
    }
}
    //Executa a função;
    let mLCalc = document.getElementById("mLSubmit");
        mLCalc.addEventListener("click",mL);

//calcula a taxa do cilindro;
function taxa(){
    //declara as variavéis e carrega os campos;
    let ccTaxa = parseFloat(document.getElementById("ccTaxa").value);
    let TmL = parseFloat(document.getElementById("TmL").value);
    let result3 = document.getElementById("result3");

    let Tx;
    Tx = (ccTaxa + TmL) / TmL;

    if( Tx > 0){
            //executa a formula;
            result3.textContent = Tx.toFixed(2)+":1 Taxa";
    }else{
        alert("Preencha:\nCilindrada e Capacidade mL.\n\nPara saber qual a proporção da taxa de compressão.");
    }
}
    //Executa a função;
    let TxCalc = document.getElementById("TxSubmit");
        TxCalc.addEventListener("click",taxa);