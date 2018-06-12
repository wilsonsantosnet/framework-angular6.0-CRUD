
export class GlobalValidator {

    static mailFormat(control: any): ValidationResult {

        var valor = control.value || "";

        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (valor != "" && (valor.length <= 5 || !EMAIL_REGEXP.test(valor))) {

            return { "incorrectMailFormat": true };
        }

        return null;
    }

}

interface ValidationResult {
    [key: string]: boolean;
}