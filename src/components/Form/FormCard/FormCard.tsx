import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useI18n } from "@/locales/client";
import { ProgressIndicator } from "../ProgressIndicator/ProgressIndicator";

type FormCardProps = {
  title?: string;
  index: number;
  footer?: React.ReactNode;
  content: React.ReactNode;
};

export function FormCard({
  footer,
  content,
  title,
  index,
}: Readonly<FormCardProps>) {
  const t = useI18n();

  return (
    <Card className="flex flex-col max-w-[500px] my-6 mx-6 h-[550px] md:h-[600px] md:p-6">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl text-center font-medium self-center py-4">
          {title ?? t("form.general.title")}
        </CardTitle>
        <ProgressIndicator currentStep={index} />
      </CardHeader>
      <CardContent className="flex flex-col gap-4 py-4 flex-1">
        {content}
      </CardContent>
      <CardFooter className="flex-row-reverse md:py-6">{footer}</CardFooter>
    </Card>
  );
}
