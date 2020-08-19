exports.getPalindrome = function (_data, _func) {
    try {
        _func({success: true,error: "", data: palindrome(_data) });
    } catch (err) {
        _func({success: false,error: err.message, data: null});
    }
};

let palindrome = (val) =>
{
	// convertimos el texto en minusculas
	let text = val.toLowerCase();
	// eliminamos los espacios en blanco
	text = text.replace(/ /g, "");
	for (let i = 0; i<text.length; i++){
		// comparamos el ultimo caracter de la izquierda con el ultimo caracter de la derecha
		if(text[i]!= text[text.length-i-1]){
			return false;
		}
	}
	return true;
}