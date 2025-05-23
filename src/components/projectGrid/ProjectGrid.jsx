import { GridContainer } from "./ProjectGrid.style";

function ProjectGrid({ children }) {
    return (
        <GridContainer>
            {children}
        </GridContainer>
    );
}

export default ProjectGrid;
