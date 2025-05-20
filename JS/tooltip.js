const tooltips = document.querySelectorAll(".tooltip");

function onTooltipClick (evt){
    evt.currentTarget.classList.toggle('tooltip-animated');
}
function onTooltipClick2 (evt){
    evt.currentTarget.classList.toggle('tooltip-animated2');
}

tooltips.forEach((tooltip)=>{
    tooltip.addEventListener('mouseleave',onTooltipClick);
});

tooltips.forEach((tooltip)=>{
    tooltip.addEventListener('mouseover',onTooltipClick2);
});

