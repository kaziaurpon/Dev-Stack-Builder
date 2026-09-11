import type { Technology } from "../types/technology";
import TechCard from "./TechCard";

interface TechGridProps {
  technologies: Technology[];
  stackIds: string[];
  onAdd: (tech: Technology) => void;
}

export default function TechGrid({ technologies, stackIds, onAdd }: TechGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          isAdded={stackIds.includes(tech.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}
