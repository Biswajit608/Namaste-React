const heading1 = React.createElement('h1', {}, 'Namaste React')
const heading2 = React.createElement('h2', {}, '2nd child')

const container = ReactDOM.createRoot(document.getElementById('container'))

container.render(heading2)
