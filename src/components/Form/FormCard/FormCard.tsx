import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProgressIndicator } from "../ProgressIndicator/ProgressIndicator";
import { useTenantFormContext } from "@/context/FormContext";
import { useI18n } from "@/locales/client";

type FormCardProps = {
  title?: string;
  footer?: React.ReactNode;
  content: React.ReactNode;
};

export function FormCard({ footer, content, title }: Readonly<FormCardProps>) {
  const { pageIndex } = useTenantFormContext();
  const t = useI18n();

  return (
    <Card className="max-w-[500px] my-6 mx-6">
      <CardHeader>
        <CardTitle className="text-xl text-center font-medium self-center py-4">
          {title ?? t("form.general.title")}
        </CardTitle>
        <ProgressIndicator currentStep={pageIndex} />
      </CardHeader>
      <CardContent className="flex flex-col gap-4 py-6">{content}</CardContent>
      <CardFooter className="flex-row-reverse py-6">{footer}</CardFooter>
    </Card>
  );
}
