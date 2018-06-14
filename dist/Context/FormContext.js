export class FormField {
}
export class FormContext {
    constructor() {
        this.formFields = {};
    }
    static getInstance() {
        if (FormContext.sharedInstance === undefined) {
            FormContext.sharedInstance = new FormContext();
        }
        return FormContext.sharedInstance;
    }
    updateField(id, value, validate) {
        console.log(`Update Field id:${id} value:${value} validate:${validate}`);
        if (id && value) {
            this.formFields[id] = {
                value: value,
                validate: validate
            };
        }
    }
    getField(id) {
        if (id) {
            return this.formFields[id];
        }
        return undefined;
    }
    getFieldValue(id) {
        let field = this.getField(id);
        if (field) {
            return field.value;
        }
        return undefined;
    }
    getFields(ids) {
        let result = [];
        if (ids) {
            ids.forEach((id) => {
                result.push(this.getField(id));
            });
        }
        return result;
    }
    getFormData(ids) {
        if (ids) {
            return ids.reduce((prev, id) => {
                let field = this.formFields[id];
                let result = {};
                if (field && field.value) {
                    result[id] = field.value;
                }
                else {
                    result[id] = '';
                }
                return Object.assign({}, prev, result);
            }, {});
        }
        return {};
    }
    validateField(id) {
        let field = this.getField(id);
        if (field) {
            console.log(`id: ${id}, validate: ${field.validate}`);
            return field.validate;
        }
        return true;
    }
    validateFields(ids) {
        if (ids) {
            console.log(`Field Ids: ${ids}`);
            return ids.reduce((prev, current) => {
                return prev && this.validateField(current);
            }, true);
        }
        return true;
    }
}
