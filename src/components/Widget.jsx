import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import tailwindStyles from "../index.css?inline";

export const Widget = () => {
  const [rating, setRating] = useState(3);
  const [submitted, setSubmitted] = useState(false);

  const onStarClick = (index) => {
    setRating(index + 1);
  };

  const submit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      feedback: form.feedback.value,
      rating: rating,
    };
    console.log(data);
    setSubmitted(true);
  };

  return (
    <>
    <style>{tailwindStyles}</style>
    <div className=" widget fixed bottom-8 right-8 z-index-50 ">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="rounded-xl text-md shadow-lg hover:scale-105">
            <MessageCircleIcon className='mr-1 h-5 w-5' />
            Feedback
          </Button>
        </PopoverTrigger>
        
        <PopoverContent className=" widget w-full max-w-md rounded-lg p-4 shadow-lg bg-card mr-4">
    <style>{tailwindStyles}</style>
          {submitted ? (
            <div>
              <h3 className="text-lg font-bold">
                Thank you for your feedback!!
              </h3>
              <p className="mt-4">
                We appreciate your feedback. It helps us to improve our product
                and provide better service to our customers.{" "}
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-lg">Send your Feedback</h3>
              <form className="space-y-2" onSubmit={submit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="feedback">Feedback</Label>
                  <Textarea
                    id="feedback"
                    placeholder="Tell us what you think"
                    className="min-h-24"
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center mx-4">
                      {[...Array(5)].map((_, index) => (
                        <StarIcons
                          key={index}
                          className={`h-5 w-5 cursor-pointer ${
                            rating > index
                              ? "fill-primary"
                              : "fill-muted stroke-muted-foreground"
                          }`}
                          onClick={() => onStarClick(index)}
                        />
                      ))}
                    </div>
                    <Button>Submit</Button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
</>
  );
};

function StarIcons(props) {
  return (
    <svg
    {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
     
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}
