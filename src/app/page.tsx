"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { formSchema, TForm } from "@/lib/schemas/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function Home() {
  const form = useForm<TForm>({
    resolver: zodResolver(formSchema),
    reValidateMode: "onChange",
  });

  const isSubmittable =
    !form.formState.isDirty ||
    form.formState.isSubmitting ||
    console.log("errore", form.formState.errors);

  return (
    <Card>
      <CardHeader>Page 1</CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Form {...form}>
          <form className="gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
          <Button
            type="submit"
            onClick={async () => await form.trigger(["firstName", "lastName"])}
          >
            Next
          </Button>
        </Form>
      </CardContent>
      <CardFooter>
        <Progress />
      </CardFooter>
    </Card>
  );
}
