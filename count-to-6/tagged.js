function html(temp, ...args) {
  var user = escape(args[0]);
  var content = escape(args[1]);
  return `<b>${user} says</b>: "${content}"`;
}

function escape(str) {
  return str.replace(/&/g, '&amp;')
            .replace(/'/g, '&apos;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
}

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
