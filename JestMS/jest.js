const testTitle = prompt("Insira o título da suíte de testes");

const tests = [];

function generateTests(){
    let test = "";

    for(let i = 0; i < tests.length; i++){
        test += "\ttest('" + tests[i] + "', () => {});\n";
    }

    return test;
}
console.log("describe('" + testTitle + "', () => { \n" + generateTests() + "});");

class Jest {
	generateTests(){}

	addNewTest(){}

	setTestingSuite(){}
}
