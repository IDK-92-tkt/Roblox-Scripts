document.addEventListener('DOMContentLoaded', function () {
    const scripts = [
        `loadstring(game:HttpGet("https://raw.githubusercontent.com/josheeb0/casahood/main/maingui-obfuscated.lua"))()
--[[
    WARNING: Heads up! This script has not been verified by ScriptBlox. Use at your own risk!
]]`,
        `_G.Toggles = "V" -- You can put any keybind
loadstring(game:HttpGet("https://raw.githubusercontent.com/NighterEpic/Faded/main/YesEpic", true))()`,
        `loadstring(game:HttpGet("https://raw.githubusercontent.com/Actyrn/Scripts/main/AzureModded"))()`,
        `loadstring(game:HttpGet('https://raw.githubusercontent.com/lerkermer/lua-projects/master/SwagModeV002'))()`
    ];

    const container = document.getElementById('scripts-container');

    scripts.forEach(script => {
        const card = document.createElement('div');
        card.className = 'script-card';

        const content = document.createElement('pre');
        content.className = 'script-content';
        content.textContent = script;

        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = 'Copier';

        button.addEventListener('click', () => {
            navigator.clipboard.writeText(script)
                .then(() => {
                    alert('Script copié!');
                })
                .catch(err => {
                    console.error('Erreur lors de la copie:', err);
                });
        });

        card.appendChild(content);
        card.appendChild(button);

        container.appendChild(card);
    });
});