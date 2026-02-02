# Home Page & i18n Design Specification

## Visual Design
- **Theme**: Deep space/void aesthetic. Solid black background (`#000000`).
- **Title**: "Shadows of Void" in white text.
- **Aura**: A large, soft atmospheric purple aura behind the title.
- **Animation**: The aura will pulse using a "breathing" effect (opacity and scale transitions).
- **Layout**: 
  - Left Column: Centered pulsing title.
  - Right Column: Clean, modern login form (email/password).

## Internationalization (i18n)
- **Library**: `i18next` with `react-i18next`.
- **Detection**: `i18next-browser-languagedetector` (Browser-based).
- **Default Language**: English (`en`).
- **Supported Languages**: English (`en`), Portuguese (`pt-BR`).
- **Mandate**: All user-facing strings MUST be localized via i18n keys.

## Technical Architecture
- **State**: Zustand for global client-side state (if needed for i18n).
- **Forms**: TanStack Form for the login flow.
- **Styles**: Tailwind 4 with custom variables in `styles.css`.
