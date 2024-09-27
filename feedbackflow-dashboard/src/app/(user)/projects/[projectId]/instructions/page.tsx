import { Copy } from "lucide-react";

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
      <h1 className="text-xl font-bold mb-2">Start Collecting Feedback</h1>
      <p className="lext-lg text-secondary-foreground">Embed the code in our site</p>
      <div className="bg-blue-950 p-4 rounded-md relative">
      <CopyBtn className="absolute top-2 right-2 text-white" />
        <code className="text-white">
          {`<my-widget project="${params.projectId}"></my-widget>`}
          <br />
          {`<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
        </code>
      </div>
    </div>
  );
};

export default Page;
