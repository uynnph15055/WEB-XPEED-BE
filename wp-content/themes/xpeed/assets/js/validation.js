// validation.js
class Validator {
    static validate(fields, rules) {
        let errors = {};
        for (let field in rules) {
            const value = fields[field] || '';
            const [min, max] = rules[field].match(/\d+/g) || [];
            if (rules[field].includes('required') && !value.trim()) errors[field] = `${field} is required`;
            if (rules[field].includes('min') && value.length < min) errors[field] = `${field} must be at least ${min} characters`;
            if (rules[field].includes('max') && value.length > max) errors[field] = `${field} must not exceed ${max} characters`;
            if (rules[field].includes('email') && !Validator.isValidEmail(value)) errors[field] = `${field} is not a valid email`;
            if (rules[field].includes('date') && isNaN(Date.parse(value))) errors[field] = `${field} is not a valid date`;            
        }
        return errors;
    }

    static isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
}

export default Validator;
