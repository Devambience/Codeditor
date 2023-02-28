import { createGlobalState, useDark } from '@vueuse/core'

export const generateHTML = (
  payload: Record<string, any>,
  isDark?: boolean,
) => {
  return `<html class="${isDark ? 'dark' : ''}">
        <head>
            <style id="_style">${payload.css}</style>
            <script type="module" id="_script">
                ${payload.javascript}

                window.addEventListener('message', function(event) {
                    console.log(event)
                    if (event.data === 'theme-dark') {
                        document.documentElement.classList.add('dark')
                    } else if (event.data === 'theme-light') {
                        document.documentElement.classList.remove('dark')
                    }
                })
            </\script>
        </head>
        <body>
            ${payload.html}
        </body>
    </html`
}

export const useDarkGlobal = createGlobalState(() => useDark())

export const initialEditorValue = {
  html: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8" />\n  <title>Dev Ambience</title>\n  <meta name="viewport" content="width=device-width,initial-scale=1" />\n  <meta name="description" content="" />\n  <link rel="icon" href="favicon.png">\n</head>\n<body>\n  <h1>Welcome to Dev Ambience Editor!</h1>\n</body>\n</html>',
  javascript: '',
  css: '*{\n    margin: 0;\n    padding: 0;\n}\n',
}
