document.querySelector('#github').onclick = () => chrome.tabs.create({active: true, url: 'https://github.com/broad-well/massscout-extension'});