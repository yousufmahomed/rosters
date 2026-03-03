
# Madadeni & NPH Hospital Digital Roster System

A modernized, mobile-first web portal for medical staff at **Madadeni Hospital** and **Newcastle Provincial Hospital (NPH)**. This system replaces static PDF/paper rosters with an interactive, auto-highlighting digital directory to streamline hospital communication and on-call handovers.

## 🚀 Features

* **Real-Time Highlighting:** Automatically detects the current date and highlights the active on-call team in yellow for instant recognition.
* **One-Touch Dialing:** All staff contact numbers and ward extensions are hyperlinked with `tel:` protocols, allowing mobile users to call directly from the browser.
* **Unified Directory:** Centralized access to all major departments including Internal Medicine, OBGYN, Surgery, Paediatrics, Psychiatry, and Specialist Clinics.
* **Unit-Specific Reminders:** Integrated clinical guardrails (e.g., MHCA observation reminders in Psych, NPO status in Ortho, and Apgar reminders in NICU).
* **Responsive Design:** Optimized for ward rounds on smartphones, tablets, and desktop workstations.

## 🛠️ Technical Stack

* **HTML5:** Semantic structure for medical data tables.
* **CSS3:** Custom styling featuring a professional medical color palette (South African Department of Health inspired Maroon & White).
* **JavaScript (Vanilla):** Light-weight logic for DOM manipulation, auto-scrolling to the current date, and dynamic cell population.
* **FontAwesome:** Vector icons for intuitive navigation.

## 📂 Project Structure

```text
├── index.html            # Main Hospital Hub / Navigation
├── style.css             # Master Stylesheet (Maroon/Gold Theme)
├── department.css        # Department-specific layout overrides
├── images/               # Clinical hero images and icons
└── departments/          # Individual Roster Pages
    ├── internal-med.html
    ├── obgyn.html
    ├── surgery.html
    ├── paediatrics.html
    └── ...etc

