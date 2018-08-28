import { retry } from "rxjs/operators";

export class GlobalValidator {

  static mailFormat(control: any): ValidationResult {

    var valor = control.value || "";

    var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (valor != "" && (valor.length <= 5 || !EMAIL_REGEXP.test(valor))) {

      return { "incorrectMailFormat": true };
    }

    return null;
  }

  static cpfIsValid(control: any): ValidationResult {
    
    var soma : number = 0;
    var resto: number;

    var cpf = control.value || "";
    var cpfTratado = cpf.replace(".", "").replace(".", "").replace("-", "");
    var error = { "incorrectCPF": true };
    if (cpfTratado == "")
      return error;

    if (cpfTratado == "00000000000") return error;
    for (let i = 1; i <= 9; i++) soma = soma + parseInt(cpfTratado.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != cpfTratado.substring(9, 10)) return error;
    soma = 0;
    for (let i = 1; i <= 10; i++) soma = soma + parseInt(cpfTratado.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpfTratado.substring(10, 11))) return error;

    return null;
  
  }

  static cnpjIsValid(control: any): ValidationResult {

    var cnpj = control.value || "";
    var error = { "incorrectCNPJ": true };

    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj == '') return error;

    if (cnpj.length != 14)
      return error;


    console.log(cnpj);

    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" ||
      cnpj == "11111111111111" ||
      cnpj == "22222222222222" ||
      cnpj == "33333333333333" ||
      cnpj == "44444444444444" ||
      cnpj == "55555555555555" ||
      cnpj == "66666666666666" ||
      cnpj == "77777777777777" ||
      cnpj == "88888888888888" ||
      cnpj == "99999999999999")
      return error;

    // Valida DVs
    let tamanho : number = cnpj.length - 2;
    let numeros: string = cnpj.substring(0, tamanho);
    let digitos: string = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2)
        pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != parseInt(digitos.charAt(0)))
      return error;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2)
        pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != parseInt(digitos.charAt(1)))
      return error;

    return null;

  }

}

interface ValidationResult {
  [key: string]: boolean;
}
