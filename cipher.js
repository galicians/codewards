var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";

function SubstitutionCipher(abc1, abc2) {
  this.encode = function (str) {
    var strEncoded = '';
    var index;
    for(var i = 0; i < str.length; i++) {
        if( abc1.indexOf(str[i]) != -1 ) {
          index = abc1.indexOf(str[i])
          strEncoded += abc2[index]
        }
        else{
          strEncoded += str[i]
        }
     }
     return strEncoded
  }
  this.decode = function (str) {
    var strDecoded = '';
    var index;
    for(var i = 0; i < str.length; i++) {
      if( abc2.indexOf(str[i]) != -1 ) {
        index = abc2.indexOf(str[i])
        strDecoded += abc1[index]
      }
      else{
          strDecoded += str[i]
       }
      }
     return strDecoded
  }
}
var sub = new SubstitutionCipher(abc1, abc2);
sub.encode("abc") // => "eta"
sub.encode("xyz") // => "qxz"
sub.encode("aeiou") // => "eirfg"

sub.decode("eta") // => "abc"
sub.decode("qxz") // => "xyz"
sub.decode("eirfg") // => "aeiou"