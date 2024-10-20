import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProgressIndicator } from "../ProgressIndicator/ProgressIndicator";
import { useTenantFormContext } from "@/context/FormContext";

type FormCardProps = {
  title: string;
  footer?: React.ReactNode;
  content: React.ReactNode;
};

export function FormCard({ title, footer, content }: Readonly<FormCardProps>) {
  const { pageIndex } = useTenantFormContext();
  return (
    <Card className="max-w-[500px] my-6 mx-6">
      <CardHeader>
        <CardTitle className="text-xl font-medium self-center">{}</CardTitle>
        <ProgressIndicator currentStep={pageIndex} />
      </CardHeader>
      <CardContent className="flex flex-col gap-4 py-6">{content}</CardContent>
      <CardFooter className="flex-row-reverse py-6">{footer}</CardFooter>
    </Card>
  );
}
