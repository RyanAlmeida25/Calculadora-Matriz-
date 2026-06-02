console.log("Script carregado!");

function gerarMatriz(containerId, linhas, colunas, prefixo){

    const container = document.getElementById(containerId);

    container.innerHTML = "";

    for(let i = 0; i < linhas; i++){

        const linha = document.createElement("div");
        linha.classList.add("linha");

        for(let j = 0; j < colunas; j++){

            const input = document.createElement("input");

            input.type = "number";
            input.id = `${prefixo}_${i}_${j}`;

            linha.appendChild(input);
        }

        container.appendChild(linha);
    }
}

function gerarMatrizes(){

    const linhas = Number(document.getElementById("linhas").value);
    const colunas = Number(document.getElementById("colunas").value);

    gerarMatriz("matrizA", linhas, colunas, "a");
    gerarMatriz("matrizB", linhas, colunas, "b");
}

function lerMatriz(prefixo, linhas, colunas){

    let matriz = [];

    for(let i = 0; i < linhas; i++){

        let linha = [];

        for(let j = 0; j < colunas; j++){

            linha.push(
                Number(
                    document.getElementById(`${prefixo}_${i}_${j}`).value
                )
            );
        }

        matriz.push(linha);
    }

    return matriz;
}

function calcular(){

    const linhas = Number(document.getElementById("linhas").value);
    const colunas = Number(document.getElementById("colunas").value);

    const A = lerMatriz("a", linhas, colunas);
    const B = lerMatriz("b", linhas, colunas);

    const operacao =
        document.getElementById("operacao").value;

    let resultado = [];

    for(let i = 0; i < linhas; i++){

        resultado[i] = [];

        for(let j = 0; j < colunas; j++){

            if(operacao === "soma"){
                resultado[i][j] =
                    A[i][j] + B[i][j];
            }
            else{
                resultado[i][j] =
                    A[i][j] - B[i][j];
            }
        }
    }

    mostrarResultado(resultado);
}

function mostrarResultado(matriz){

    const resultadoDiv =
        document.getElementById("resultado");

    resultadoDiv.innerHTML = "";

    matriz.forEach(linha => {

        const divLinha =
            document.createElement("div");

        divLinha.textContent =
            linha.join("   ");

        resultadoDiv.appendChild(divLinha);
    });
}

gerarMatrizes();