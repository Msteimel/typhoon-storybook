// Output a component with a code block
export function componentOutput(output, wrapper) {
  let markup = output
    .replace(/[\u00A0-\u9999<>\&]/gim, i => '&#' + i.charCodeAt(0) + ';')
    .trim();

  return `
		<div class="${wrapper} lib-mb-2xl">
			${output}
		</div>
		<hr>
		<pre class="lib-mt-lg lib-p-lg lib-bg-warm-grey-50"><code>${markup}</code></pre>
	`;
}
