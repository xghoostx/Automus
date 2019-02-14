module.exports = app => {
   
    function existOrError(value, msg) {
        function existsOrError(value, msg) {
            if (!value) throw msg; // value null throw msg
            if (Array.isArray(value) && value.length === 0) throw msg;// if array and if array null throw exception
            if (typeof value === 'string' && !value.trim()) throw msg;
        }
    }
    return {existOrError};
}