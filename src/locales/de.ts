export default {
  page: {
    title: "Multi-form-page",
  },
  form: {
    general: {
      title: "Jetzt verfügbare Mietwohnungen unverbindlich anfragen",
    },
    fields: {
      fullName: {
        label: "Vor- und Nachname",
        placeholder: "Max Mustermann",
        error: "Bitte den vollständigen Namen eingeben (z.B.:Max Mustermann)",
      },
      email: {
        label: "E-Mail",
        placeholder: "Max@Mustermann.de",
        error: "Bitte eine korrekte E-Mail eingeben",
      },
      phoneNumber: {
        label: "Telefonnr.",
        placeholder: "+49123456789",
        error: "Bitte eine korrekte Telefonnr. eingeben (z.B. +49123456789)",
      },
      salary: {
        label: "Gehaltsspanne",
        error: "Bitte geben Sie ihre Gehaltsspanne an",
        options: {
          1: "0 - 1.000 €",
          2: "1.000 - 2.000 €",
          3: "2.000 - 3.000 €",
          4: "3.000 - 4.000 €",
          5: "Mehr als 4.000 €",
        },
      },
    },
    detailsPage: {
      progress: "Kontakt",
      cta: "Weiter",
    },
    salaryPage: {
      progress: "Gehaltsspanne",
      cta: "Weiter",
    },
    summaryPage: {
      title: "Nur noch ein Schritt",
      progress: "Zusammenfassung",
      cta: "Jetzt kostenlos anfragen",
    },
  },
} as const;
