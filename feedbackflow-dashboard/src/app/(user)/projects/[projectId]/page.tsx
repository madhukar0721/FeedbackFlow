import { db } from "@/db";
import { eq } from "drizzle-orm";
import { projects } from "@/db/schema";

const Page = async ({
    params,
  }: {
    params: {
      projectId: string;
    };
  }) => {
  
if(!params.projectId) return <div> Invalid Project ID</div>;

const project = await db.query.projects.findMany({
    where:(eq(projects.id , parseInt(params.projectId)))
})
    return (
        <div>
          Project Page {params.projectId}
        </div>
    );
}

export default Page;
