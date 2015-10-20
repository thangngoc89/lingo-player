var encodings = {
    'af': 	 ['windows-1252','iso-8859-1'],
    'sq': 	 ['windows-1252','iso-8859-1'],
    'ar': 	 ['iso-8859-6'],
    'eu': 	 ['windows-1252','iso-8859-1'],
    'bg': 	 ['iso-8859-5'],
    'be': 	 ['iso-8859-5'],
    'ca': 	 ['windows-1252','iso-8859-1'],
    'hr': 	 ['windows-1250','iso-8859-2'],
    'cs': 	 ['iso-8859-2'],
    'da': 	 ['windows-1252','iso-8859-1'],
    'nl': 	 ['windows-1252','iso-8859-1'],
    'en': 	 ['windows-1252','iso-8859-1'],
    'eo': 	 ['iso-8859-3'],
    'et': 	 ['iso-8859-15'],
    'fo': 	 ['windows-1252','iso-8859-1'],
    'fi': 	 ['windows-1252','iso-8859-1'],
    'fr': 	 ['windows-1252','iso-8859-1'],
    'gl': 	 ['windows-1252','iso-8859-1'],
    'de': 	 ['windows-1252','iso-8859-1'],
    'el': 	 ['iso-8859-7'],
    'iw': 	 ['iso-8859-8'],
    'hu': 	 ['iso-8859-2'],
    'is': 	 ['windows-1252','iso-8859-1'],
    'ga': 	 ['windows-1252','iso-8859-1'],
    'it': 	 ['windows-1252','iso-8859-1'],
    'ja': 	 ['euc-jp','iso-2022-jp','shift_jis'],
    'ko':	 ['euc-kr'],
    'lv': 	 ['windows-1257','iso-8859-13'],
    'lt': 	 ['windows-1257','iso-8859-13'],
    'mk': 	 ['windows-1251','iso-8859-5'],
    'mt': 	 ['iso-8859-3'],
    'no': 	 ['windows-1252','iso-8859-1'],
    'pl': 	 ['iso-8859-2'],
    'pt': 	 ['windows-1252','iso-8859-1'],
    'ro': 	 ['iso-8859-2'],
    'ru': 	 ['iso-8859-5','koi8-r'],
    'gd': 	 ['windows-1252','iso-8859-1'],
    'sr':	 ['windows-1250','windows-1251','iso-8859-2','iso-8859-5'],
    'sk': 	 ['iso-8859-2'],
    'sl': 	 ['windows-1250','iso-8859-2'],
    'es': 	 ['windows-1252','iso-8859-1'],
    'sv': 	 ['windows-1252','iso-8859-1'],
    'tr': 	 ['windows-1254','iso-8859-9'],
    'uk': 	 ['iso-8859-5']
};

exports.getEncoding = function(langCode){
   if (encodings[langCode]){
       return encodings[langCode][0];
   } else {
       return 'utf-8';
   }
};