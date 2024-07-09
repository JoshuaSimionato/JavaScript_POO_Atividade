import * as readlinesync from "readline-sync"
import { colors } from './src/util/Colors';
import { Medicamento } from "./src/model/Medicamento";
import { Cosmetico } from "./src/model/Cosmetico";

export function main() {

    let menu: number;

    // const produto: Produto = new Produto(1, 'Dor Flex', 2, 30); não se pode estanciar essa classe, pois a classe mão e abstrata
    // produto.visualizar()

    const med: Medicamento = new Medicamento(1, 'Rivotril', 1, 45, "Mega Volto");
    med.visualizar()
    

    const cos: Cosmetico = new Cosmetico(3, 'Dor Flex', 1, 70, 'Baumilha')
    cos.visualizar()



    while (true) {
        console.log(colors.bg.black, colors.fg.blue, "*".repeat(35))
        console.log("|                                    |");
        console.log("|           Farmácia JS              |");
        console.log("|                                    |");
        console.log(`|************************************|`);
        console.log("|  [1] -> Criar Produto              |");
        console.log("|                                    |");
        console.log("|  [2] -> Listar Todos os Produtos   |");
        console.log("|                                    |");
        console.log("|  [3] -> Consultar Produto por Id   |");
        console.log("|                                    |");
        console.log("|  [4] -> Atualizar Produto          |");
        console.log("|                                    |");
        console.log("|  [5] -> Deletar Produto            |");
        console.log("|                                    |");
        console.log("|  [0] -> Sair do Menu               |");
        console.log(` ************************************ `);
        console.log(colors.reset);

        menu = readlinesync.questionInt("\nEntre com a opcao desejada: ");

        switch (menu) {
            case 1:
                console.log(colors.fg.bluestrong,
                    "\nCriar Produtos\n", colors.reset);
                keyPress()
                break;

            case 2:
                console.log(colors.fg.bluestrong,
                    "\n\Listar Todos os Produtos\n", colors.reset);
                keyPress()
                break;

            case 3:
                console.log(colors.fg.bluestrong,
                    "\n\Consultar Produto por Id\n", colors.reset);
                keyPress()
                break;

            case 4:
                console.log(colors.fg.bluestrong,
                    "\n\Atualizar Produto\n", colors.reset);
                keyPress()
                break;

            case 5:
                console.log(colors.fg.bluestrong,
                    "\n\Deletar Produto\n", colors.reset);
                keyPress()
                break;

            case 0:
                console.log("-=".repeat(30));
                console.log(colors.fg.bluestrong,
                    "\nA Farmácia JS te deseja um excelente dia ! \n\n", colors.reset);
                sobre();
                process.exit(0); // Saída do programa

            default:
                console.log(colors.fg.bluestrong,
                    "\nOpção Inválida!\n", colors.reset);
                break;
        }
    }
}


function sobre(): void {
    console.log("-=".repeat(30));
    console.log("\nProjeto desenvolvido por: Joshua Aguilar Simionato\n")
    console.log("\nEmail: joshua.simionato@gmail.com\n")
    console.log("\nGitHub: https://github.com/JoshuaSimionato\n\n")
    console.log("-=".repeat(30));
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main(); //Função Principal