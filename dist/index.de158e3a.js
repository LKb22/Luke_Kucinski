let figureElement = document.querySelectorAll(".service figure");
let textElement = document.querySelectorAll(".service .text");
// Function to check if layout is column or row based on screen width
const isColumnLayout = ()=>window.innerWidth < 768; // Tablet breakpoint
const handleMouseMove = (event)=>{
    figureElement.forEach(function(figure) {
        textElement.forEach(function(text) {
            if (isColumnLayout()) {
                // Column layout: adjust height based on mouse Y position
                const maxHeight = 0.6; // Max proportion for figure
                const minHeight = 0.4; // Min proportion for figure
                const viewportHeight = window.innerHeight;
                const mouseYRatio = event.clientY / viewportHeight; // Normalize Y position
                const clampedHeight = Math.min(maxHeight, Math.max(minHeight, mouseYRatio));
                figure.style.flex = clampedHeight;
                text.style.flex = 1 - clampedHeight; // Ensure complementary flex values
            } else {
                // Row layout: adjust width based on mouse X position
                const maxWidth = 0.6; // Max proportion for figure
                const minWidth = 0.4; // Min proportion for figure
                const viewportWidth = window.innerWidth;
                const mouseXRatio = event.clientX / viewportWidth; // Normalize X position
                const clampedWidth = Math.min(maxWidth, Math.max(minWidth, mouseXRatio));
                figure.style.flex = clampedWidth;
                text.style.flex = 1 - clampedWidth; // Ensure complementary flex values
            }
        });
    });
};
window.addEventListener("mousemove", handleMouseMove);

//# sourceMappingURL=index.de158e3a.js.map
