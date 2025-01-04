function draggingSlider(element) {
    let isDragging = false;
    const dragging = (event) => {
        if (!isDragging)
            return;
        element.scrollLeft -= event.movementX;
    };
    const dragStart = () => {
        isDragging = true;
        element.classList.add("dragging");
    };
    const dragStop = () => {
        isDragging = false;
        element.classList.remove("dragging");
    };
    element.addEventListener("mousemove", dragging);
    element.addEventListener("mouseup", dragStop);
    element.addEventListener("mousedown", dragStart);
}
export { draggingSlider };
