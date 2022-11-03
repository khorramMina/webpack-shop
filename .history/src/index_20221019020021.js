import './styles/index.scss';
const rootElement = document.getElementById('root');
const button = document.createElement('button');
button.innerHTML="submit";
button.className = "rounded-md border border-transparent bg-indigo-600 px-8 py-3 font-bold text-white hover:bg-indigo-900 md:px-10 md:text-lg"
rootElement.appendChild(button);