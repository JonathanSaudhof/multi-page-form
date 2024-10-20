import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  useFormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useScopedI18n } from "@/locales/client";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

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
  const t = useScopedI18n("form.fields");
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { error, formMessageId } = useFormField();

        return (
          <FormItem className="relative">
            <FormLabel className="text-gray-400 text-xs mx-auto">
              {formLabel}
            </FormLabel>
            <FormControl>
              <Input placeholder={placeholder} {...field} />
            </FormControl>
            {error ? (
              <p
                id={formMessageId}
                className={cn(
                  "absolute text-[0.8rem] font-medium text-destructive -bottom-5 left-0"
                )}
              >
                {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-expect-error
                  t(`${name}.error`)
                }
              </p>
            ) : null}
          </FormItem>
        );
      }}
    />
  );
}
