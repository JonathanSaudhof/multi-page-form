"use client";
import { CustomInput } from "@/components/Form/CustomInput/CustomInput";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTenantFormContext } from "@/context/FormContext";
import { TPageTwoForm, pageTwoSchema } from "@/lib/schemas/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Progress } from "@radix-ui/react-progress";
import { useRouter } from "next/navigation";
import { Form, useForm } from "react-hook-form";

export default function FormContactPage() {
  const { updateFormState } = useTenantFormContext();
  const router = useRouter();

  const form = useForm<TPageTwoForm>({
    resolver: zodResolver(pageTwoSchema),
    reValidateMode: "onChange",
  });

  const handleSubmit = async (data: TPageTwoForm) => {
    updateFormState(data);
    router.push("/form-summary");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
        <CardDescription>{/* <Progress /> */}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Form {...form}>
          <form className="gap-4">
            <CustomInput
              control={form.control}
              name="email"
              label="E-Mail"
              placeholder="john.doe@example.com"
              required
            />
          </form>
          <Button type="submit" onClick={form.handleSubmit(handleSubmit)}>
            Next
          </Button>
        </Form>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
