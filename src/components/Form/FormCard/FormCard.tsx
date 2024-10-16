import {
  Card,
  CardContent,
  CardDescription,
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
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">{content}</CardContent>
      <CardFooter className="flex-row-reverse">{footer}</CardFooter>
    </Card>
  );
}
