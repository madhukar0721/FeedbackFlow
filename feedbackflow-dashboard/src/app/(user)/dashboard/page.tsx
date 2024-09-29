import NewProjBtn from "@/components/new-proj-btn";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import ProjectsList from "./projects-list";
export default async function Page() {
  const allProjects = await db.select().from(projects);
  const { userId } = auth();

  if (!userId) return null;

  const userProjects = await db
    .select()
    .from(projects)
    .where(eq(projects.userId, userId));
  console.log(userId);
  console.log(allProjects);

  return (
    <div>
      <div className="flex items-center justify-center gap-3 mb-8">
          <h1 className="text-3xl font-bold text-center "> Your Projects </h1>
          <NewProjBtn />
      </div>
      <ProjectsList projects={userProjects} />
    </div>
  );
}
