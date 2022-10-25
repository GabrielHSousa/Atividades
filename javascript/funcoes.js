function menu() {
    this.opcao = prompt("---- Menu ----\n" +
        "0. Sair\n" +
        "1. Exercício 01\n" +
        "2. Exercício 02\n" +
        "3. Exercício 03\n" +
        "4. Exercício 04\n" +
        "5. Exercício 05\n" +
        "6. Exercício 06\n" +
        "7. Exercício 07\n" +
        "8. Exercício 08\n" +
        "9. Exercício 09\n" +
        "10. Exercício 10\n" +
        "11. Exercício 11\n" +
        "12. Exercício 12\n" +
        "13. Exercício 13\n" +
        "14. Exercício 14\n" +
        "15. Exercício 15\n" +
        "16. Exercício 16\n" +
        "17. Exercício 17\n" +
        "18. Exercício 18\n" +
        "19. Exercício 19\n" +
        "20. Exercício 20\n" +

        "Escolha uma das opções"
    );
}//fim da função menu

function operacao() {
    menu();//Chamar o menu de opções

    switch (this.opcao) {
        case '0':
            console.log("Obrigado!");
            break;
        case '1':
            console.log("Exercício 01:\n " + Exercicio1());
            break;
        case '2':
            console.log("Exercício 02:\n " + Exercicio2());
            break;
        case '3':
            console.log("Exercício 03:\n " + Exercicio3());
            break;
        case '4':
            console.log("Exercício 04:\n " + Exercicio4());
            break;
        case '5':
            console.log("Exercício 05:\n " + Exercicio5());
            break;
        case '6':
            console.log("Exercício 06:\n " + Exercicio6());
            break;
        case '7':
            console.log("Exercício 07:\n " + Exercicio7());
            break;
        case '8':
            console.log("Exercício 08:\n " + Exercicio8());
            break;
        case '9':
            console.log("Exercício 09:\n " + Exercicio9());
            break;
        case '10':
            console.log("Exercício 10:\n " + Exercicio10());
            break;
        case '11':
            console.log("Exercício 11:\n " + Exercicio11());
            break;
        case '12':
            console.log("Exercício 12:\n " + Exercicio12());
            break;
        case '13':
            console.log("Exercício 13:\n " + Exercicio13());
            break;
        case '14':
            console.log("Exercício 14:\n " + Exercicio14());
            break;
        case '15':
            console.log("Exercício 15:\n " + Exercicio15());
            break;
        case '16':
            console.log("Exercício 16:\n " + Exercicio16());
            break;
        case '17':
            console.log("Exercício 17:\n " + Exercicio17());
            break;
        case '18':
            console.log("Exercício 18:\n " + Exercicio18());
            break;
        case '19':
            console.log("Exercício 19:\n " + Exercicio19());
            break;
        case '20':
            console.log("Exercício 20:\n " + Exercicio20());
            break;
        default:
            console.log("Escolha uma opção válida!");
            break;
    }//fim do switch 
}//fim da função operação
//Declaração de variaveis 
function Exercicio1() {

    var A = 10;
    var B = 20;
    var aux = 0;
    console.log(" valor de A é: " + A + " e Valor de B é: " + B + " \n")

    var aux = A;
    var A = B;
    var B = aux;
    console.log(" valor de A é: " + A + " e Valor de B é: " + B + " \n")
}
function Exercicio2() {
    num1 = prompt("Informe seu numero")
    num2 = num1 - 1;
    console.log(" valor é: " + num1 + " e seu antecessor é: " + num2 + " \n")
}
function Exercicio3() {
    A = prompt("Digite sua base")
    B = prompt("Digite uma altura")
    aux = A * B;
    console.log("A area do retanculo sera " + aux + "\n")
}

function Exercicio4() {
    A = parseFloat(prompt("Digite sua idade"))
    B = parseFloat(prompt("Digite quantos meses completos você tem"));
    var dias = parseFloat(prompt("Digite quantos dias completos você tem"));
    idade = (A * 365) + (B * 30) + dias;

    console.log(" Sua idade em dias é :" + idade);
}
function Exercicio5() {
    A = parseFloat(prompt("Digite o total de eleitores do municipio:"))
    B = parseFloat(prompt("Quantidade de votos branco:"))
    C = parseFloat(prompt("Quantidade de votos nulos:"))

    porcbranco = B * 100 / A
    porcnulo = (C * 100 / A)
    porcvalido = A - (B + C)
    console.log("\nVotos Branco:" + porcbranco + "%")
    console.log("\nVotos Nulos:" + porcnulo + "%")
    console.log("\nVotos validos:" + porcvalido * 100 / A + "%")
}
function Exercicio6() {
    A = parseFloat(prompt("Digite o sálario atual:"))
    B = parseFloat(prompt("Digite o Reajuste:"))

    Salario = (A * B / 100)
    console.log("O novo salario é: " + Salario * A + "%")

}
function Exercicio7() {
    A = parseFloat(prompt("O custo de fábrica é:"))
    valor = A * 0.28 + A;
    imposto = A * 0.45 + A;
    custo = valor + imposto + A;
    console.log("O Valor do automóvel é: " + custo)
}
function Exercicio8() {
    A = parseFloat(prompt("Me fale sua primeira nota!:"))
    B = parseFloat(prompt("Me fale sua segunda nota!:"))
    C = parseFloat(prompt("Me fale sua terceira nota!:"))
    media = (A + B + C) / 3;
    console.log("A sua nota final sera: " + media)
}
function Exercicio9() {
    numMacas = prompt("Digite a Quantidade de macas");
    preco = 1
    if (numMacas < 12) {
        preco = 1.30;
    }
    console.log(preco)
    custoTotal = numMacas * preco
    console.log("custo total:" + custoTotal)
}
function Exercicio10() {

    var sal = parseFloat(prompt("Digite o salário do colaborador(a): R$"));
    var vendas = parseFloat(prompt("Digite o valor total de vendas do colaborador(a): R$"));

    if (vendas > 1500.00) {

        var salFinal = (vendas * 0.5) + sal;

        console.log("Devido o colaborador(a) ter vendido " + vendas + ". O salário terá um acrescimo de 5% em relação ao total de vendas, sendo assim o valor a receber esse mês é: R$" + salFinal + ".");

    } else {

        var salFinal = (vendas * 0.3) + sal;

        console.log("Devido o colaborador(a) ter vendido " + vendas + ". O salário terá um acrescimo de 3% em relação ao total de vendas, sendo assim o valor a receber esse mês é: R$" + salFinal + ".");

    }
}
function Exercicio11() {

        conta = parseInt(prompt("Digite o número da conta: "));
        saldo = parseFloat(prompt("Digite o saldo da conta: R$"));
        debito = parseFloat(prompt("Digite o valor gasto em débito: R$"));
        credito = parseFloat(prompt("Digite o valor de crédito: R$"));

        var saldoAtual = saldo - debito + credito

        if (saldoAtual >= 0) {

            console.log("PARABÊNS! Seu saldo é POSITIVO!!!");

        } else {

            console.log("PERIGO! seu saldo é NEGATIVO!!!");

        }

    }

function exercicio12() {

        var n1 = parseInt(prompt("Digite um número inteiro (entre 1 e 10): "));

        if (n1 <= 10) {
            console.log("Tabuada do " + n1 + ": \n")
            for (i = 0; i <= 10; i++) {
                msg += n1 + "x" + i + "=" + (n1) * (i) + "\n";
            }

            console.log(msg + "\n");

        } else {

            console.log("Digite um número válido (entre 1 até 10).")

        }

    }

function Exercicio13() {

     contador = parseFloat(prompt("Digite seu valor fatorial:  "));

    while(contador >=1){
       
        contador = contador -1
        console.log("valor fatorial é " + contador);
    }
}


function Exercicio14() {

        var n1 = parseFloat(prompt("Digite o 1° valor:  "));
        var n2 = parseFloat(prompt("Digite o 2° valor:  "));
        var n3 = parseFloat(prompt("Digite o 3° valor:  "));
        var n4 = parseFloat(prompt("Digite o 4° valor:  "));
        var n5 = parseFloat(prompt("Digite o 5° valor:  "));
        var n6 = parseFloat(prompt("Digite o 6° valor:  "));
        var n7 = parseFloat(prompt("Digite o 7° valor:  "));
        var n8 = parseFloat(prompt("Digite o 8° valor:  "));
        var n9 = parseFloat(prompt("Digite o 9° valor:  "));
        var n10 = parseFloat(prompt("Digite o 10° valor: "));

        var total = 0;

        if (n1 < 0) {

            var total = total + 1

        } if (n2 < 0) {

            var total = total + 1

        } if (n3 < 0) {

            var total = total + 1

        } if (n4 < 0) {

            var total = total + 1

        } if (n5 < 0) {

            var total = total + 1

        } if (n6 < 0) {

            var total = total + 1

        } if (n7 < 0) {

            var total = total + 1

        } if (n8 < 0) {

            var total = total + 1

        } if (n9 < 0) {

            var total = total + 1

        } if (n10 < 0) {

            var total = total + 1

        } else {

            var total = total + 0

        }
        console.log("Os números digitados são: \n" + n1 + "\n " + n2 +
            "\n" + n3 + "\n" + n4 + "\n" + n5 + "\n" + n6 + "\n" + n7 + "\n" +
            n8 + "\n" + n9 + "\n" + n10 + "e desse total de números " + total + ", são negativos.");

    }

function Exercicio15() {

        var n1 = parseFloat(prompt("Digite o 1° valor:  "));
        var n2 = parseFloat(prompt("Digite o 2° valor:  "));
        var n3 = parseFloat(prompt("Digite o 3° valor:  "));
        var n4 = parseFloat(prompt("Digite o 4° valor:  "));
        var n5 = parseFloat(prompt("Digite o 5° valor:  "));
        var n6 = parseFloat(prompt("Digite o 6° valor:  "));
        var n7 = parseFloat(prompt("Digite o 7° valor:  "));
        var n8 = parseFloat(prompt("Digite o 8° valor:  "));
        var n9 = parseFloat(prompt("Digite o 9° valor:  "));
        var n10 = parseFloat(prompt("Digite o 10° valor: "));

        var total = 0;

        if (n1 < 40) {

            var total = total + n1

        } if (n2 < 40) {

            var total = total + n2

        } if (n3 < 40) {

            var total = total + n3

        } if (n4 < 40) {

            var total = total + n4

        } if (n5 < 40) {

            var total = total + n5

        } if (n6 < 40) {

            var total = total + n6

        } if (n7 < 40) {

            var total = total + n7

        } if (n8 < 40) {

            var total = total + n8

        } if (n9 < 40) {

            var total = total + n9

        } if (n10 < 40) {

            var total = total + n10

        } else {

            var total = total + 0

        }
        console.log("Os valores digitados foram: \n\n" +
            n1 + "\n" + n2 + "\n" + n3 + "\n" + n4 + "\n" + n5 + "\n" + n6 + "\n"
            + n7 + "\n" + n8 + "\n" + n9 + "\n" + n10 + "\ne a soma dos números inferiores a 40 é: " + total);

    }

function Exercicio16() {
        console.log("Não consegui realizar o exercício")

    }

function Exercicio17() {

        console.log("Não existe o exercício")

    }

function Exercicio18() {

        var a = parseInt(prompt("Digite o 1° número: "));
        var b = parseInt(prompt("Digite o 2° número: "));
        var c = parseInt(prompt("Digite o 3° número: "));

        var maior = 0;
        media = (a + b + c) / 3

        if (a > b) {
            maior = a;
        } if (b > a) {
            maior = b;
        } if (c > b) {
            maior = c;
        } else {
            (c > a)
            maior = c
        }

        console.log("Os números digitados foram: \n" + a + "\n" + b + "\n" + c + "\nE a média é: " + media +
            "\nE o maior valor entre os números é: " + maior);

    }

    function Exercicio19() {

        var n1 = parseFloat(prompt("Digite a nota do 1° aluno(a): "));
        var n2 = parseFloat(prompt("Digite a nota do 2° aluno(a): "));
        var n3 = parseFloat(prompt("Digite a nota do 3° aluno(a): "));
        var n4 = parseFloat(prompt("Digite a nota do 4° aluno(a): "));
        var n5 = parseFloat(prompt("Digite a nota do 5° aluno(a): "));
        var n6 = parseFloat(prompt("Digite a nota do 6° aluno(a): "));
        var n7 = parseFloat(prompt("Digite a nota do 7° aluno(a): "));
        var n8 = parseFloat(prompt("Digite a nota do 8° aluno(a): "));
        var n9 = parseFloat(prompt("Digite a nota do 9° aluno(a): "));
        var n10 = parseFloat(prompt("Digite a nota do 10° aluno(a): "));
        var n11 = parseFloat(prompt("Digite a nota do 11° aluno(a): "));
        var n12 = parseFloat(prompt("Digite a nota do 12° aluno(a): "));
        var n13 = parseFloat(prompt("Digite a nota do 13° aluno(a): "));
        var n14 = parseFloat(prompt("Digite a nota do 14° aluno(a): "));
        var n15 = parseFloat(prompt("Digite a nota do 15° aluno(a): "));
        var n16 = parseFloat(prompt("Digite a nota do 16° aluno(a): "));
        var n17 = parseFloat(prompt("Digite a nota do 17° aluno(a): "));
        var n18 = parseFloat(prompt("Digite a nota do 18° aluno(a): "));
        var n19 = parseFloat(prompt("Digite a nota do 19° aluno(a): "));
        var n20 = parseFloat(prompt("Digite a nota do 20° aluno(a): "));

        var media = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10 + n11 + n12 + n13 + n14 + n15 + n16 + n17 + n18 + n19 + n20) / 20;

        console.log("A média foi: " + media);

    }

    function Exercicio20() {

        var person1 = parseInt(prompt("Quantos filhos(a) você tem? "));
        var person2 = parseFloat(prompt("Qual valor do seu salário? "));

        var person3 = parseInt(prompt("Quantos filhos(a) você tem? "));
        var person4 = parseFloat(prompt("Qual valor do seu salário? "));

        var person5 = parseInt(prompt("Quantos filhos(a) você tem? "));
        var person6 = parseFloat(prompt("Qual valor do seu salário? "));

        var person7 = parseInt(prompt("Quantos filhos(a) você tem? "));
        var person8 = parseFloat(prompt("Qual valor do seu salário? "));

        var person9 = parseInt(prompt("Quantos filhos(a) você tem? "));
        var person10 = parseFloat(prompt("Qual valor do seu salário? "));

        mediaSal = (person2 + person4 + person6 + person8 + person10) / 5;
        mediaFilhos = (person1 + person3 + person5 + person7 + person9) / 5;
        menorSal = 0;


        if (person2 < 150) {

            menorSal = menorSal + 1;

        } if (person4 < 150) {

            menorSal = menorSal + 1;

        } if (person6 < 150) {

            menorSal = menorSal + 1;

        } if (person8 < 150) {

            menorSal = menorSal + 1;

        } if (person10 < 150) {

            menorSal = menorSal + 1;

        }

        var percen = (menorSal / 5) * 100;

        console.log("A média salárial da população da cidade é: R$" + mediaSal + ". A média de filhos é: " + mediaFilhos + ". E o percentual de pessoas com salário menor que R$150 é: " + percen);

    }

operacao();