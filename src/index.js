function Component() {
    const rootElement = document.createElement('div');

    rootElement.innerHTML = "Welcome to Vanilla JS Starter with webpack"

    return rootElement;
}

document.body.appendChild(Component());