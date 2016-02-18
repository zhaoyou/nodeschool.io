module.exports = function generate(isEven) {
      var num;

      if (isEven) {
        num = 0;
      } else {
        num = -1;
      }

      var myIterator = {
        next: function(swap) {

          num += (swap ? 1 : 2);

          return {
            value: num
          }

        }
      }

      return myIterator;
    }
