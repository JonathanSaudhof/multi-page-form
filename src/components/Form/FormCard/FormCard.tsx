import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type FormCardProps = {
  title: string;
  footer?: React.ReactNode;
  content: React.ReactNode;
};

export function FormCard({ title, footer, content }: Readonly<FormCardProps>) {
  return (
    <Card className="max-w-[500px]">
      <CardHeader>
        <CardTitle className="text-xl font-medium self-center">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">{content}</CardContent>
      <CardFooter className="flex-row-reverse">{footer}</CardFooter>
    </Card>
  );
}
