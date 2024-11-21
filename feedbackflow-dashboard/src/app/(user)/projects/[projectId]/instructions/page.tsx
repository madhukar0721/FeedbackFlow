import CopyBtn from "@/components/copy-btn";
import {Button} from "@/components/ui/button"; // Adjust the import path as necessary
import { ChevronLeft, MoveUpRight } from "lucide-react";
import Link from "next/link";

const Page = ({
  params,
}: {
  params: {
    projectId: string;
  };
}) => {
  if (!params.projectId) return <div> Invalid Project ID</div>;
  if (!process.env.WIDGET_URL) return <div>Missing WIDGET_URL</div>;
  

  return (
    <div>
       <div>
        <Link href={`/projects/${params.projectId}`} className="flex items-center text-zinc-800 mb-5 w-fit"><ChevronLeft className="h-5 w-5 mr-1" />Back</Link>
      </div>
      <h1 className="text-xl font-bold mb-2">Start Collecting Feedback</h1>
      <p className="lext-lg text-secondary-foreground">Embed the code in your site</p>
      <div className="bg-blue-950 p-4 my-5 rounded-md relative">
      <CopyBtn text={`<my-widget project-id="${params .projectId}"></my-widget>\n<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`} />
        <code className="text-white">
          {`<my-widget project-id="${params.projectId}"></my-widget>`}
          <br />
          {`<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
        </code>
        
        
        
      </div>
      <div className="flex  item-center gap-4">
      <p>Check out this demo example</p>

      <Link  target="_blank" href={"https://github.com/madhukar0721/FeedbackFlow/blob/main/demo_example.html"}><MoveUpRight /></Link>
      

      </div>
    </div>
  );
};

export default Page;
