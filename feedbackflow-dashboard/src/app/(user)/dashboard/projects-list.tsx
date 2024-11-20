import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { projects } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";
import Link from "next/link";

type Project = InferSelectModel<typeof projects>;

type Props = {
  projects: Project[];
};

const ProjectsList = (props: Props) => {
  return (
    <div>
     
      <div className="">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {props.projects.map((project: Project) => {
            return (
              <li key={project.id}>
                <Card className="max-w-80 flex flex-col h-full">
                  <CardHeader className="flex-1">
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Link href={`/projects/${project.id}`}>
                      <Button>View Project</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsList;
