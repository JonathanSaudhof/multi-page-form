import { cn } from "@/lib/utils";

export function ProgressIndicator({ currentStep }: { currentStep: number }) {
  const steps = [
    {
      title: "User info",
    },
    {
      title: "Salary info",
    },
    {
      title: "Summary",
    },
  ];

  return (
    <ol className="items-center w-full space-y-4 flex  sm:space-y-0 pt-6 justify-between">
      {steps.map((step, index) => {
        const colorCase = currentStep - 1 - index;

        const color = {
          borderColor: "border-blue-600",
          textColor: "text-blue-600",
          darkBorderColor: "dark:border-blue-500",
          darkTextColor: "dark:text-blue-500",
        };

        if (colorCase === 0) {
          color.borderColor = "border-blue-600";
          color.textColor = "text-blue-600";
          color.darkBorderColor = "dark:border-blue-500";
          color.darkTextColor = "dark:text-blue-500";
        }

        if (colorCase < 0) {
          color.borderColor = "border-gray-500";
          color.textColor = "text-gray-500";
          color.darkBorderColor = "dark:border-gray-400";
          color.darkTextColor = "dark:text-gray-400";
        }

        if (colorCase > 0) {
          color.borderColor = "border-green-600";
          color.textColor = "text-green-600";
          color.darkBorderColor = "dark:border-green-500";
          color.darkTextColor = "dark:text-green-500";
        }

        return (
          <li
            className={cn(
              "flex items-center gap-2 grow justify-between mr-2",
              color.textColor,
              color.darkTextColor
            )}
            key={index}
          >
            <span
              className={cn(
                "flex items-center justify-center w-6 h-6 border rounded-full shrink-0 text-xs",
                color.borderColor,
                color.darkBorderColor
              )}
            >
              {index + 1}
            </span>
            <span
              className={cn(
                "flex-grow border-t border-gray-500 dark:border-gray-400",
                color.borderColor,
                color.darkBorderColor
              )}
            ></span>
            <span>
              <h3 className="font-medium leading-tight text-xs">
                {step.title}
              </h3>
            </span>

            <span
              className={cn(
                "flex-grow border-t border-gray-500 dark:border-gray-400",
                color.borderColor,
                color.darkBorderColor
              )}
            ></span>
          </li>
        );
      })}
    </ol>
  );
}
