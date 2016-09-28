var obj = {
    foo : function() {
      alert('Ecma');
    },
    bar : function() {
        document.addEventListener("click", (e) => {
          alert('test');
          this.foo();
        });
    }
};

obj.bar();
