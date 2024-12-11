import { useFocusStates } from "@/hooks/useFocusStates";
import {
  contactFormSchema,
  ContactFormValues,
  defaultValues,
} from "./formValidation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { AutosizeTextarea } from "../ui/textarea";
import ShinyButton from "../ui/shiny-button";
import { useState } from "react";
import toast from "react-hot-toast";
import { Send } from "lucide-react";

interface ContactFormProps {
  setContactFormOpen: (value: boolean) => void;
  setIsMessageSent: (value: boolean) => void;
}

export default function ContactForm({
  setContactFormOpen,
  setIsMessageSent,
}: ContactFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { focusStates, handleFocus } = useFocusStates<
    "name" | "email" | "message"
  >();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  });

  const { control, handleSubmit, formState, reset } = form;

  const onSubmit = async (data: ContactFormValues) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent! Thank You!");
        setContactFormOpen(false);
        setIsMessageSent(true);
        reset();
      } else {
        throw new Error("Something went wrong. Please try again.");
      }
    } catch (error) {
      if (typeof error === "string") {
        toast.error(error);
      } else if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unknown error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-8"
      >
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem
              className={cn(
                "relative h-14 space-y-0 rounded-2xl border border-gray-500 transition-all duration-300",
                {
                  "border-gray-300 ring-2 ring-gray-300 ring-offset-2 ring-offset-card":
                    focusStates["name"],
                },
                {
                  "border-destructive": formState.errors.name,
                },
                {
                  "ring-2 ring-destructive ring-offset-2":
                    formState.errors.name && focusStates["name"],
                },
              )}
            >
              <FormLabel
                className={cn(
                  "absolute left-5 text-lg text-muted-foreground transition-all",
                  focusStates["name"] || field.value
                    ? "top-1.5 text-sm"
                    : "top-3.5",
                )}
              >
                Name
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onFocus={() => handleFocus("name", true)}
                  onBlur={() => handleFocus("name", false)}
                  className="h-full rounded-2xl border-transparent pl-5 pt-5 text-lg shadow-none focus-visible:ring-0"
                />
              </FormControl>
              <FormMessage className="absolute -bottom-[25px] left-4 pl-1 pt-0.5 font-light text-destructive" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem
              className={cn(
                "relative h-14 space-y-0 rounded-2xl border border-gray-500 transition-all duration-300",
                {
                  "border-gray-300 ring-2 ring-gray-300 ring-offset-2 ring-offset-card":
                    focusStates["email"],
                },
                {
                  "border-destructive": formState.errors.email,
                },
                {
                  "ring-2 ring-destructive ring-offset-2":
                    formState.errors.email && focusStates["email"],
                },
              )}
            >
              <FormLabel
                className={cn(
                  "absolute left-5 text-lg text-muted-foreground transition-all",
                  focusStates["email"] || field.value
                    ? "top-1.5 text-sm"
                    : "top-3.5",
                )}
              >
                Email
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onFocus={() => handleFocus("email", true)}
                  onBlur={() => handleFocus("email", false)}
                  className="h-full rounded-2xl border-transparent pl-5 pt-5 text-lg shadow-none focus-visible:ring-0"
                />
              </FormControl>
              <FormMessage className="absolute -bottom-[25px] left-4 pl-1 pt-0.5 font-light text-destructive" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="message"
          render={({ field }) => (
            <FormItem
              className={cn(
                "relative space-y-0 rounded-2xl border border-gray-500 transition-all duration-300",
                {
                  "border-gray-300 ring-2 ring-gray-300 ring-offset-2 ring-offset-card":
                    focusStates["message"],
                },
                {
                  "border-destructive": formState.errors.message,
                },
                {
                  "ring-2 ring-destructive ring-offset-2":
                    formState.errors.message && focusStates["message"],
                },
              )}
            >
              <FormLabel
                className={cn(
                  "absolute left-5 text-lg text-muted-foreground transition-all",
                  focusStates["message"] || field.value
                    ? "top-1.5 text-sm"
                    : "top-3.5",
                )}
              >
                Message
              </FormLabel>
              <FormControl>
                <AutosizeTextarea
                  {...field}
                  onFocus={() => handleFocus("message", true)}
                  onBlur={() => handleFocus("message", false)}
                  className="min-h-14 resize-none rounded-2xl border-transparent pl-5 pt-5 !text-lg !leading-6 shadow-none focus-visible:ring-0"
                />
              </FormControl>
              <FormMessage className="absolute -bottom-[25px] left-4 pl-1 pt-0.5 font-light text-destructive" />
            </FormItem>
          )}
        />
        <div className="mx-auto pt-6">
          <ShinyButton
            disabled={isLoading}
            type="submit"
            className={cn(
              "w-60 transform rounded-full py-3 transition-all duration-500 ease-in-out",
              { "animate-bounce-slow h-14 w-14 opacity-70": isLoading },
            )}
          >
            {!isLoading ? (
              <span>Send</span>
            ) : (
              <Send className="flex size-6 w-full items-center justify-center pr-0.5 pt-0.5" />
            )}
          </ShinyButton>
        </div>
      </form>
    </Form>
  );
}
