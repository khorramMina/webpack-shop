import './styles/index.css';
const rootElement = document.getElementById('root');
const button = document.createElement('button');
button.innerHTML="submit";
button.className = "rounded-md border border-transparent bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700 md:px-10 md:text-lg"
rootElement.appendChild(button);