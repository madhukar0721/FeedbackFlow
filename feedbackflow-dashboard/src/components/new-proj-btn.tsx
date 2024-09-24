import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';


const NewProjBtn = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button> <Plus className="h-4 w-4 mr-1"/> Create Project</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Project</DialogTitle>
          <DialogDescription>
            Create a new Project to get started
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Project Name</Label>
                  <Input id="name" type="text" placeholder="Project Name" />
              </div>
              <div className="flex flex-col gap-2"> 
                  <Label htmlFor="url">URL</Label>
                  <Input id="url" type="text" placeholder="https://example.com/" />
              </div>
          </div>
          <div className="flex flex-col gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Description(Optional)" />
          </div>
          <DialogFooter> <Button type="submit">Create Project</Button></DialogFooter>
         
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default NewProjBtn;
