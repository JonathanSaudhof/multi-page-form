import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, UseFormReturn, Path } from "react-hook-form";

export function CustomInput<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  required = false,
}: Readonly<{
  control: UseFormReturn<T>[`control`];
  name: Path<T>;
  label: string;
  placeholder: string;
  required?: boolean;
}>) {
  const formLabel = required ? `${label} *` : label;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{formLabel}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
