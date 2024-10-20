import { cn } from "@/lib/utils";
import { useI18n } from "@/locales/client";

export function ProgressIndicator({
  currentStep,
}: Readonly<{ currentStep: number }>) {
  const t = useI18n();
  const steps = [
    t("form.detailsPage.progress"),
    t("form.salaryPage.progress"),
    t("form.summaryPage.progress"),
  ];

  if (currentStep > steps.length || currentStep < 1) {
    throw new Error("Current step is greater than the total number of steps");
  }

  return (
    <ol className="items-center w-full md:space-y-4 flex  space-y-0 pt-6 justify-between">
      {steps.map((step, index) => {
        const colorCase = currentStep - 1 - index;

        const color = {
          borderColor: "border-blue-600",
          textColor: "text-blue-600",
          darkBorderColor: "dark:border-blue-500",
          darkTextColor: "dark:text-blue-500",
        };

        // isCurrent
        const isCurrent = colorCase === 0;
        if (isCurrent) {
          color.borderColor = "border-blue-600";
          color.textColor = "text-blue-600";
          color.darkBorderColor = "dark:border-blue-500";
          color.darkTextColor = "dark:text-blue-500";
        }

        // isAhead
        if (colorCase < 0) {
          color.borderColor = "border-gray-500";
          color.textColor = "text-gray-500";
          color.darkBorderColor = "dark:border-gray-400";
          color.darkTextColor = "dark:text-gray-400";
        }

        // isDone
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
            key={step + index}
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

            {isCurrent ? (
              <>
                <span
                  className={cn(
                    "flex-grow border-t border-gray-500 dark:border-gray-400",
                    color.borderColor,
                    color.darkBorderColor
                  )}
                ></span>
                <span>
                  <h3 className="font-medium leading-tight text-sm">{step}</h3>
                </span>
              </>
            ) : null}

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
