var stringCombos = function(string){
  var results = [];
  var helper = function(str, chosen, length) {
    if (length === 0) {
      results.push(chosen);
    } else {
      for (var i = 0; i < str.length; i++) {
        var ch = str.slice(i, i + 1);
        if (chosen.indexOf(ch) === -1) {
          var rest = str.substring(0, i) + str.substring(i + 1);
          helper(rest, chosen + ch, length - 1);
        }
      }
    }
  };
  helper(string, "", string.length);
  return results;
};
