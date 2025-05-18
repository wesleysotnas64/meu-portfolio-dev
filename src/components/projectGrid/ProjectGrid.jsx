import { GridContainer } from "./ProjectGrid.style"

function ProjectGrid({ columns, children }) {
    return (
        <GridContainer style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
            {children}
        </GridContainer>
    );
}

export default ProjectGrid