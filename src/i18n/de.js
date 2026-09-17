import { deUiTranslations } from './deUi.js';

export const de = {
  code: 'de',
  label: 'DE',
  translations: {
    ...deUiTranslations,
    // Global profile and navigation
    About: 'Über mich',
    Projects: 'Projekte',
    Skills: 'Kenntnisse',
    Contact: 'Kontakt',
    Email: 'E-Mail',
    'AI Automation & IT Specialist': 'Spezialist für AI Automation & IT',
    'I design and build practical AI workflows, business automations, and internal tools that reduce manual work and make everyday operations easier.':
      'Ich konzipiere und entwickle praxisnahe AI Workflows, Business-Automatisierungen und interne Tools, die manuelle Arbeit reduzieren und tägliche Abläufe vereinfachen.',
    'I focus on practical automation: understanding how work is actually done, finding repetitive steps, and building tools that make operations clearer and easier to manage. My work sits between AI, workflow automation, and IT support, with an emphasis on useful systems rather than technology for show.':
      'Mein Fokus liegt auf praxisnaher Automatisierung: reale Arbeitsabläufe verstehen, wiederkehrende Schritte erkennen und Tools entwickeln, die Prozesse transparenter und leichter steuerbar machen. Dabei verbinde ich AI, Workflow Automation und IT Support – mit Blick auf nützliche Systeme statt Technik um ihrer selbst willen.',
    'Open to IT & AI automation opportunities, freelance projects, and collaborations.':
      'Offen für Positionen im Bereich IT und AI Automation, Freelance-Projekte und Kooperationen.',

    // Process, skills and current work
    'Improving automation workflows for order handling, analytics, and job search.':
      'Automatisierungs-Workflows für Auftragsabwicklung, Analytics und Jobsuche weiterentwickeln.',
    'Documenting workflow decisions with clearer screenshots and practical examples.':
      'Workflow-Entscheidungen mit aussagekräftigeren Screenshots und praxisnahen Beispielen dokumentieren.',
    'Refining reusable automation patterns across AI, integrations, and IT support.':
      'Wiederverwendbare Automatisierungsmuster für AI, Integrationen und IT Support verfeinern.',
    'Understand the workflow': 'Workflow verstehen',
    'Map the current process, repetitive steps, data sources, and handoffs.':
      'Bestehenden Prozess, wiederkehrende Schritte, Datenquellen und Übergaben erfassen.',
    'Design the automation': 'Automatisierung konzipieren',
    'Choose the simplest reliable flow before adding AI or integrations.':
      'Zuerst den einfachsten zuverlässigen Ablauf wählen, dann AI oder Integrationen ergänzen.',
    'Build and connect': 'Umsetzen und verbinden',
    'Create the workflow, connect tools, and keep the logic easy to maintain.':
      'Workflow erstellen, Tools anbinden und die Logik wartbar halten.',
    'Test in real use': 'Im Praxiseinsatz testen',
    'Review outputs, fix edge cases, and make the result practical for daily work.':
      'Ergebnisse prüfen, Sonderfälle beheben und die Lösung für den Arbeitsalltag optimieren.',
    'AI & Automation': 'AI & Automation',
    'LLM workflows': 'LLM Workflows',
    'API integrations': 'API-Integrationen',
    'Business Integrations': 'Business-Integrationen',
    'IT & Development Tools': 'IT- & Development-Tools',
    'IT troubleshooting': 'IT-Fehleranalyse',
    'General IT systems': 'Allgemeine IT-Systeme',
    'JavaScript fundamentals': 'JavaScript-Grundlagen',
    'React basics': 'React-Grundlagen',

    // AI Job Match Analyzer
    'AI-powered Job Analysis Workflow': 'AI-gestützter Workflow zur Stellenanalyse',
    'AI automation that evaluates job vacancies, scores candidate fit, identifies missing skills, and automatically stores structured results in Google Sheets.':
      'Eine AI Automation, die Stellenanzeigen bewertet, den Candidate Fit einordnet, fehlende Kenntnisse erkennt und strukturierte Ergebnisse automatisch in Google Sheets speichert.',
    'Job Vacancy Form': 'Formular für Stellenanzeigen',
    'Prepare Vacancy Text': 'Stellentext aufbereiten',
    'Analyze Job Match': 'Job Match analysieren',
    'Save Result to Google Sheets': 'Ergebnis in Google Sheets speichern',
    'Formatted Response': 'Formatierte Antwort',
    'Reviewing job vacancies manually requires repeatedly reading job descriptions, comparing requirements with a candidate profile, identifying missing skills, and deciding whether an application is worthwhile.':
      'Bei der manuellen Prüfung von Stellenanzeigen müssen Beschreibungen immer wieder gelesen, Anforderungen mit dem Kandidatenprofil abgeglichen, fehlende Kenntnisse erkannt und die Erfolgsaussichten einer Bewerbung bewertet werden.',
    'The workflow automates this evaluation process. A job vacancy is submitted through an n8n form, analyzed by an AI Agent against a predefined candidate profile, converted into structured data, and automatically stored in Google Sheets.':
      'Der Workflow automatisiert diesen Bewertungsprozess. Eine Stellenanzeige wird über ein n8n-Formular eingereicht, von einem AI Agent mit einem vordefinierten Kandidatenprofil abgeglichen, in strukturierte Daten umgewandelt und automatisch in Google Sheets gespeichert.',
    'The workflow turns an unstructured job description into a consistent evaluation containing company, position, location, match score, decision, reasons, missing skills, and recommended next steps.':
      'Der Workflow überführt eine unstrukturierte Stellenbeschreibung in eine einheitliche Bewertung mit Unternehmen, Position, Standort, Match Score, Entscheidung, Begründung, fehlenden Skills und empfohlenen nächsten Schritten.',
    Workflow: 'Workflow',
    'The real n8n workflow used to analyze and structure job vacancy information.':
      'Der tatsächlich eingesetzte n8n Workflow zur Analyse und Strukturierung von Stelleninformationen.',
    'Structured Output': 'Strukturierte Ausgabe',
    'Structured Google Sheets output generated by the automation.':
      'Von der Automatisierung erzeugte, strukturierte Ausgabe in Google Sheets.',
    'Live Case Study': 'Case Study ansehen',

    // OrderPulse Business Analytics
    'Business Analytics & Operational Reporting Automation':
      'Business Analytics & automatisiertes operatives Reporting',
    'An automation workflow for monitoring customer orders, calculating business KPIs, synchronizing operational data, and delivering structured reports through Google Sheets and Telegram.':
      'Ein Automatisierungs-Workflow zur Überwachung von Kundenaufträgen, Berechnung von Business-KPIs, Synchronisierung operativer Daten und Bereitstellung strukturierter Reports über Google Sheets und Telegram.',
    'Read orders from Google Sheets': 'Aufträge aus Google Sheets einlesen',
    'Check active processing orders': 'Aktive Aufträge in Bearbeitung prüfen',
    'Notify if no processing orders exist': 'Meldung senden, wenn keine Aufträge in Bearbeitung sind',
    'Filter active processing orders': 'Aktive Aufträge in Bearbeitung filtern',
    'Calculate business metrics': 'Business-Kennzahlen berechnen',
    'Save report history': 'Report-Historie speichern',
    'Send Telegram report': 'Telegram-Report senden',
    'Update Processing Queue': 'Processing Queue aktualisieren',
    'Operational order data requires repeated manual monitoring and reporting. Teams need visibility into active orders, revenue, processing workload, employee performance, top-selling products, and order status.':
      'Operative Auftragsdaten erfordern wiederkehrende manuelle Kontrolle und Berichterstellung. Teams benötigen Transparenz zu aktiven Aufträgen, Umsatz, Auslastung, Mitarbeiterleistung, meistverkauften Produkten und Auftragsstatus.',
    'The workflow reads order data from Google Sheets, identifies active processing orders, calculates operational metrics, updates a dedicated Processing Queue, saves report history, generates formatted Telegram reports, and maintains a Google Sheets analytics dashboard.':
      'Der Workflow liest Auftragsdaten aus Google Sheets, erkennt aktive Aufträge in Bearbeitung, berechnet operative Kennzahlen, aktualisiert eine eigene Processing Queue, speichert die Report-Historie, erstellt formatierte Telegram-Reports und pflegt ein Analytics Dashboard in Google Sheets.',
    'The workflow centralizes order monitoring, KPI calculation, reporting, and processing visibility into one repeatable automation. It demonstrates how operational reporting tasks can be automated while keeping business information structured and easy to review.':
      'Der Workflow bündelt Auftragsüberwachung, KPI-Berechnung, Reporting und Transparenz zur Bearbeitung in einer wiederholbaren Automatisierung. Er zeigt, wie sich operative Reporting-Aufgaben automatisieren lassen, während Business-Informationen strukturiert und leicht prüfbar bleiben.',
    'Workflow Architecture': 'Workflow-Architektur',
    'The n8n workflow architecture for monitoring orders and generating reports.':
      'Die n8n Workflow-Architektur zur Auftragsüberwachung und Report-Erstellung.',
    'Telegram Reporting': 'Telegram-Reporting',
    'Automated Telegram report with active orders, revenue, average order value, processing items, top employees, top product, and timestamp.':
      'Automatisierter Telegram-Report mit aktiven Aufträgen, Umsatz, durchschnittlichem Auftragswert, Artikeln in Bearbeitung, Top-Mitarbeitern, Top-Produkt und Zeitstempel.',
    'Analytics Dashboard': 'Analytics Dashboard',
    'Google Sheets dashboard for total orders, processing orders, revenue, order status distribution, business metrics, and top employees.':
      'Google-Sheets-Dashboard für Gesamtaufträge, Aufträge in Bearbeitung, Umsatz, Statusverteilung, Business-Kennzahlen und Top-Mitarbeiter.',
    'Processing Queue': 'Processing Queue',
    'A dedicated Processing Queue sheet that contains active orders for operational review and daily planning.':
      'Ein eigenes Processing-Queue-Tab mit aktiven Aufträgen für die operative Prüfung und Tagesplanung.',
    'Warehouse teams': 'Lagerteams',
    'Customer support': 'Customer Support',
    'Operations managers': 'Operations Manager',
    'Daily production planning': 'Tägliche Produktionsplanung',

    // Order Pulse — Employee Workflow
    'Role-Based Order Processing Automation': 'Rollenbasierte Automatisierung der Auftragsbearbeitung',
    'An n8n workflow that processes order data, generates employee-specific reports, monitors active processing orders, and sends operational updates through Telegram.':
      'Ein n8n Workflow, der Auftragsdaten verarbeitet, mitarbeiterspezifische Reports erstellt, aktive Aufträge in Bearbeitung überwacht und operative Updates über Telegram sendet.',
    'Send a Telegram report': 'Telegram-Report senden',
    'Update the processing queue': 'Processing Queue aktualisieren',
    'Shared order data can be difficult to review from an employee perspective when active processing orders, product statistics, revenue values, and recurring reports need to be checked manually.':
      'Gemeinsam genutzte Auftragsdaten sind aus Mitarbeitersicht schwer überschaubar, wenn aktive Vorgänge, Produktstatistiken, Umsatzwerte und wiederkehrende Reports manuell geprüft werden müssen.',
    'The workflow reads order data from Google Sheets, filters active processing orders, calculates operational metrics, sends a Telegram report, logs report history, and synchronizes the processing queue.':
      'Der Workflow liest Auftragsdaten aus Google Sheets, filtert aktive Aufträge in Bearbeitung, berechnet operative Kennzahlen, sendet einen Telegram-Report, protokolliert die Report-Historie und synchronisiert die Processing Queue.',
    'This workflow demonstrates how a shared operational dataset can be transformed into a focused reporting flow for employee-level order monitoring. It complements the broader OrderPulse Business Analytics workflow by focusing on daily operational visibility rather than company-wide analytics.':
      'Dieser Workflow zeigt, wie sich ein gemeinsamer operativer Datenbestand in einen fokussierten Reporting-Ablauf für die Auftragskontrolle auf Mitarbeiterebene überführen lässt. Er ergänzt den umfassenderen Workflow OrderPulse Business Analytics mit einem Fokus auf tägliche operative Transparenz statt unternehmensweiter Analysen.',
    'Processing Orders': 'Aufträge in Bearbeitung',
    'Processing Revenue': 'Umsatz in Bearbeitung',
    'Average Order Value': 'Durchschnittlicher Auftragswert',
    'Total Items': 'Artikel gesamt',
    'Top Employee': 'Top-Mitarbeiter',
    'Top Product': 'Top-Produkt',
    'Workflow Overview': 'Workflow-Übersicht',
    'The n8n workflow reads orders, filters active processing work, calculates metrics, sends the report, logs history, and updates the queue.':
      'Der n8n Workflow liest Aufträge ein, filtert aktive Vorgänge, berechnet Kennzahlen, sendet den Report, protokolliert die Historie und aktualisiert die Queue.',
    'The synchronized Processing Queue keeps active processing orders visible in a dedicated operational view.':
      'Die synchronisierte Processing Queue hält aktive Aufträge in einer eigenen operativen Ansicht sichtbar.',
    'Employee Dashboard': 'Mitarbeiter-Dashboard',
    'The dashboard supports employee-level operational review with processing orders, revenue, average order value, item totals, and product or employee statistics.':
      'Das Dashboard unterstützt die operative Auswertung auf Mitarbeiterebene mit Aufträgen in Bearbeitung, Umsatz, durchschnittlichem Auftragswert, Artikelanzahl sowie Produkt- und Mitarbeiterstatistiken.',
    'Telegram Report': 'Telegram-Report',
    'The automated Telegram notification delivers the calculated order report without requiring manual report preparation.':
      'Die automatisierte Telegram-Benachrichtigung liefert den berechneten Auftragsreport ohne manuelle Vorbereitung.',

    // Customer support assistant
    'AI-Assisted Customer Support & Lead Routing Workflow':
      'AI-gestützter Workflow für Customer Support und Lead Routing',
    'An n8n workflow that classifies customer messages, routes support requests, generates data-grounded replies from mock Google Sheets records, logs interactions, and alerts humans when needed.':
      'Ein n8n Workflow, der Kundenanfragen klassifiziert, Support-Fälle weiterleitet, datenbasierte Antworten aus Demo-Datensätzen in Google Sheets erstellt, Interaktionen protokolliert und bei Bedarf Mitarbeitende informiert.',
    'Customer Message': 'Kundenanfrage',
    'Intent Classification': 'Intent-Klassifizierung',
    'Route Request': 'Anfrage weiterleiten',
    'Lookup Data / Handle Lead': 'Daten abrufen / Lead bearbeiten',
    'Generate Response': 'Antwort erstellen',
    'Log Interaction': 'Interaktion protokollieren',
    'Human Alert When Needed': 'Bei Bedarf Mitarbeitende informieren',
    'Webhook Response': 'Webhook-Antwort',
    'Customer-support messages often require manual classification, repeated order or product lookups, routine replies, and manual handoffs when a refund request or sales opportunity needs human attention.':
      'Anfragen im Customer Support erfordern häufig manuelle Klassifizierung, wiederholte Auftrags- oder Produktabfragen, Standardantworten und manuelle Übergaben, sobald Rückerstattungen oder Verkaufschancen menschliche Aufmerksamkeit benötigen.',
    'The workflow accepts a message through a webhook or manual trigger, uses OpenAI to classify its intent and extract relevant details, routes it through the appropriate path, looks up mock store data or records a lead, generates a concise grounded reply, logs the interaction, and alerts a human when needed.':
      'Der Workflow nimmt eine Nachricht über einen Webhook oder manuellen Trigger entgegen, klassifiziert mit OpenAI den Intent und extrahiert relevante Details. Anschließend wird die Anfrage über den passenden Pfad geführt, Demo-Shopdaten werden abgefragt oder ein Lead erfasst, eine knappe datenbasierte Antwort erstellt, die Interaktion protokolliert und bei Bedarf eine Person informiert.',
    'Looks up a matching order and prepares a concise status response.':
      'Sucht den passenden Auftrag und erstellt eine knappe Statusantwort.',
    'Checks order context, prepares an informational reply, and alerts support.':
      'Prüft den Auftragskontext, erstellt eine informative Antwort und benachrichtigt den Support.',
    'Finds matching mock product data and answers from the available record.':
      'Findet passende Demo-Produktdaten und antwortet auf Basis des verfügbaren Datensatzes.',
    'Captures the inquiry as a lead and notifies the sales contact.':
      'Erfasst die Anfrage als Lead und informiert den Sales-Kontakt.',
    'Provides a short fallback response for requests outside the defined paths.':
      'Gibt für Anfragen außerhalb der definierten Pfade eine kurze Fallback-Antwort aus.',
    'The complete n8n workflow, from incoming customer message through intent routing, data lookup, logging, alerts, and the final webhook response.':
      'Der vollständige n8n Workflow – von der eingehenden Kundenanfrage über Intent Routing, Datenabfrage, Logging und Benachrichtigungen bis zur finalen Webhook-Antwort.',
    'A structured JSON response returned by the workflow after the request has been processed.':
      'Eine strukturierte JSON-Antwort, die der Workflow nach der Verarbeitung zurückgibt.',
    'Orders Data': 'Auftragsdaten',
    'Mock order records used to demonstrate order-status and refund lookups.':
      'Demo-Auftragsdaten zur Veranschaulichung von Status- und Rückerstattungsabfragen.',
    'Products Data': 'Produktdaten',
    'Mock product records used to ground product-question responses.':
      'Demo-Produktdaten als Grundlage für Antworten auf Produktfragen.',
    'Interaction Logs': 'Interaktionsprotokolle',
    'Structured support interaction history stored in Google Sheets.':
      'Strukturierte Historie der Support-Interaktionen in Google Sheets.',
    'Sales Leads': 'Sales Leads',
    'Captured sales inquiries prepared for human follow-up.':
      'Erfasste Vertriebsanfragen zur weiteren Bearbeitung durch eine Person.',
    'Refund Alert': 'Rückerstattungsbenachrichtigung',
    'Telegram notification that escalates a refund or return request to a person.':
      'Telegram-Benachrichtigung, die eine Rückerstattungs- oder Retourenanfrage an eine Person eskaliert.',
    'Sales Lead Alert': 'Sales-Lead-Benachrichtigung',
    'Telegram notification that flags a new sales opportunity for follow-up.':
      'Telegram-Benachrichtigung, die eine neue Verkaufschance zur Nachverfolgung markiert.',
    'Google Sheets provides mock store data; there is no real Shopify API integration.':
      'Google Sheets stellt Demo-Shopdaten bereit; eine echte Shopify-API-Integration besteht nicht.',
    'The webhook does not include production authentication or rate limiting.':
      'Der Webhook verfügt nicht über produktionsreife Authentifizierung oder Rate Limiting.',
    'Refund and return requests are escalated, but the workflow does not issue refunds.':
      'Rückerstattungs- und Retourenanfragen werden eskaliert; der Workflow führt selbst keine Rückerstattungen aus.',
    'Telegram provides notifications rather than a complete ticketing system.':
      'Telegram dient als Benachrichtigungskanal und ersetzt kein vollständiges Ticket-System.',
    'Connect real Shopify, CRM, or helpdesk APIs': 'Echte Shopify-, CRM- oder Helpdesk-APIs anbinden',
    'Add webhook authentication and rate limiting': 'Webhook-Authentifizierung und Rate Limiting ergänzen',
    'Introduce confidence scoring and human review': 'Confidence Scoring und Human Review einführen',
    'Maintain conversation history': 'Gesprächsverlauf speichern',
    'Support multilingual responses': 'Mehrsprachige Antworten unterstützen',
    'View Case Study': 'Case Study ansehen',

    // Invoice processing
    'Human-in-the-Loop Invoice Extraction & Review Workflow':
      'Human-in-the-Loop Workflow für Rechnungsextraktion und Prüfung',
    'AI extracts structured invoice data while complete records are stored and uncertain results are routed to a visible human review queue.':
      'AI extrahiert strukturierte Rechnungsdaten. Vollständige Datensätze werden gespeichert, unsichere Ergebnisse landen in einer sichtbaren Queue zur manuellen Prüfung.',
    'Invoice Text': 'Rechnungstext',
    'Prepare Input': 'Eingabe aufbereiten',
    'OpenAI Structured Extraction': 'Strukturierte Extraktion mit OpenAI',
    'Parse & Normalize JSON': 'JSON parsen und normalisieren',
    'Needs Human Review?': 'Manuelle Prüfung erforderlich?',
    'Save Invoice': 'Rechnung speichern',
    'Save to Review Queue': 'In Review Queue speichern',
    'Telegram Reviewer Alert': 'Telegram-Benachrichtigung an Reviewer',
    'Manual invoice entry is repetitive and error-prone. Missing or inconsistent fields make invoices harder to validate, while silently accepting low-confidence AI output can create financial and operational risk.':
      'Die manuelle Rechnungserfassung ist repetitiv und fehleranfällig. Fehlende oder inkonsistente Felder erschweren die Prüfung; ungeprüft übernommene AI-Ergebnisse mit niedriger Confidence können finanzielle und operative Risiken verursachen.',
    'The workflow receives invoice text, extracts and normalizes a predictable set of fields, and uses an explicit review decision to separate complete records from uncertain cases. AI handles structured extraction while exceptions remain visible to a human reviewer.':
      'Der Workflow nimmt Rechnungstext entgegen, extrahiert und normalisiert einen klar definierten Feldsatz und trennt vollständige Datensätze anhand einer expliziten Prüfentscheidung von unsicheren Fällen. Die AI übernimmt die strukturierte Extraktion; Ausnahmen bleiben für einen menschlichen Reviewer sichtbar.',
    'The n8n architecture routes normalized invoice data into either the processed invoices sheet or a human review path with a Telegram notification.':
      'Die n8n Architektur leitet normalisierte Rechnungsdaten entweder in das Tab für verarbeitete Rechnungen oder in einen manuellen Prüfpfad mit Telegram-Benachrichtigung.',
    'Structured Extraction': 'Strukturierte Extraktion',
    'OpenAI converts invoice text into normalized JSON while preserving missing values as null and exposing confidence and review status.':
      'OpenAI wandelt Rechnungstext in normalisiertes JSON um, behält fehlende Werte als null bei und weist Confidence sowie Prüfstatus aus.',
    'Processed Invoices': 'Verarbeitete Rechnungen',
    'Complete, higher-confidence records are appended to the processed invoices sheet used as demo storage.':
      'Vollständige Datensätze mit höherer Confidence werden an das als Demo-Speicher genutzte Tab für verarbeitete Rechnungen angehängt.',
    'Review Queue': 'Review Queue',
    'Invoices requiring attention are stored separately with review status set to pending for human follow-up.':
      'Rechnungen mit Prüfbedarf werden separat mit dem Status pending für die manuelle Nachbearbeitung gespeichert.',
    'Telegram Review Alert': 'Telegram-Benachrichtigung zur Prüfung',
    'The reviewer receives a Telegram notification containing the available invoice fields and confidence value.':
      'Der Reviewer erhält eine Telegram-Benachrichtigung mit den verfügbaren Rechnungsfeldern und dem Confidence-Wert.',
    'Fictional Demo Invoice': 'Fiktive Demo-Rechnung',
    'A fictional invoice used to explain the business data in the portfolio walkthrough; it is not uploaded to or parsed by the current workflow.':
      'Eine fiktive Rechnung zur Erläuterung der Business-Daten im Portfolio; sie wird im aktuellen Workflow weder hochgeladen noch geparst.',
    'The webhook accepts invoice_text only; there is no PDF upload, OCR, or attachment ingestion.':
      'Der Webhook akzeptiert ausschließlich invoice_text; PDF-Upload, OCR und die Verarbeitung von Anhängen sind nicht implementiert.',
    'Google Sheets is demo storage rather than an accounting system or production database.':
      'Google Sheets dient als Demo-Speicher und nicht als Buchhaltungssystem oder Produktionsdatenbank.',
    'Approval, rejection, correction, and payment remain manual actions.':
      'Freigabe, Ablehnung, Korrektur und Zahlung bleiben manuelle Schritte.',
    'The webhook has no production authentication or rate limiting.':
      'Der Webhook verfügt weder über produktionsreife Authentifizierung noch über Rate Limiting.',
    'Duplicate detection and approved-vendor validation are not implemented.':
      'Duplikaterkennung und Prüfung gegen freigegebene Lieferanten sind nicht implementiert.',
    'There is no dedicated retry or error workflow.': 'Ein eigener Retry- oder Fehler-Workflow ist nicht vorhanden.',
    'The project has not been load-tested or production-hardened.':
      'Das Projekt wurde weder Lasttests unterzogen noch für den Produktionseinsatz gehärtet.',
    'Add PDF and image ingestion with OCR': 'PDF- und Bildverarbeitung mit OCR ergänzen',
    'Validate extracted data against a strict schema': 'Extrahierte Daten gegen ein striktes Schema validieren',
    'Add authenticated approval and rejection actions': 'Authentifizierte Freigabe- und Ablehnungsaktionen ergänzen',
    'Detect duplicate invoices': 'Doppelte Rechnungen erkennen',
    'Check suppliers against an approved-vendor list': 'Lieferanten gegen eine Freigabeliste prüfen',
    'Add retries, error handling, monitoring, and audit history':
      'Retries, Fehlerbehandlung, Monitoring und Audit-Historie ergänzen',
    'Integrate an accounting platform or database': 'Buchhaltungsplattform oder Datenbank integrieren',

    // Company knowledge RAG
    'RAG-Based Internal Knowledge & Policy Assistant':
      'RAG-basierter Assistent für internes Wissen und Richtlinien',
    'Fictional company policies are embedded in Supabase, relevant context is retrieved through semantic search, and OpenAI generates grounded internal answers.':
      'Fiktive Unternehmensrichtlinien werden als Embeddings in Supabase gespeichert, relevanter Kontext wird per semantischer Suche abgerufen und OpenAI erstellt darauf basierende interne Antworten.',
    'Company policies, internal procedures, and SOPs often live across multiple documents. Employees spend time searching manually, reading long policies, or asking colleagues the same recurring questions.':
      'Unternehmensrichtlinien, interne Abläufe und SOPs verteilen sich häufig auf mehrere Dokumente. Mitarbeitende verbringen Zeit mit manueller Suche, lesen lange Richtlinien oder stellen Kolleginnen und Kollegen immer wieder dieselben Fragen.',
    'The workflow separates knowledge ingestion from question answering. Fictional policy documents are embedded and stored in a Supabase pgvector vector store, while each employee question retrieves relevant company context before OpenAI generates a grounded answer.':
      'Der Workflow trennt Knowledge Ingestion und Question Answering. Fiktive Richtliniendokumente werden als Embeddings in einem Supabase pgvector Vector Store gespeichert. Bei jeder Mitarbeiterfrage wird zunächst relevanter Unternehmenskontext abgerufen, bevor OpenAI eine darauf basierende Antwort erstellt.',
    'Company Policies': 'Unternehmensrichtlinien',
    'Prepare Documents': 'Dokumente aufbereiten',
    'Load Document': 'Dokument laden',
    'Employee Question': 'Mitarbeiterfrage',
    'Question Embedding': 'Frage-Embedding',
    'Semantic Search': 'Semantische Suche',
    'Retrieve Relevant Documents': 'Relevante Dokumente abrufen',
    'Aggregate Context': 'Kontext zusammenführen',
    'OpenAI Grounded Answer': 'Kontextbasierte OpenAI-Antwort',
    'Vacation Policy': 'Urlaubsrichtlinie',
    'Remote Work Policy': 'Remote-Work-Richtlinie',
    'IT Support Policy': 'IT-Support-Richtlinie',
    'Expense Policy': 'Spesenrichtlinie',
    'Employee Onboarding Policy': 'Onboarding-Richtlinie',
    'RAG Architecture': 'RAG-Architektur',
    'The n8n workflow keeps manual knowledge ingestion separate from webhook-based question answering, retrieval, context aggregation, and response generation.':
      'Der n8n Workflow trennt die manuelle Knowledge Ingestion vom Webhook-basierten Question Answering mit Retrieval, Kontextaggregation und Antwortgenerierung.',
    'Supabase Vector Store': 'Supabase Vector Store',
    'The Supabase documents table stores policy content, document metadata, and pgvector embeddings for semantic retrieval.':
      'Die Supabase-Tabelle documents speichert Richtlinieninhalte, Dokumentmetadaten und pgvector Embeddings für das semantische Retrieval.',
    'A question embedding is matched against the vector store to retrieve relevant policy documents together with similarity scores.':
      'Das Embedding einer Frage wird mit dem Vector Store abgeglichen, um relevante Richtliniendokumente inklusive Similarity Scores abzurufen.',
    'Grounded Answer': 'Kontextbasierte Antwort',
    'A question about a stolen company laptop is answered from the fictional IT Support Policy included in the demo knowledge base.':
      'Eine Frage zu einem gestohlenen Firmenlaptop wird anhand der fiktiven IT-Support-Richtlinie aus der Demo-Wissensbasis beantwortet.',
    'Missing-Knowledge Fallback': 'Fallback bei fehlendem Wissen',
    'When a maternity-leave policy is not available in the demo knowledge base, the assistant explicitly reports that the information was not found.':
      'Da die Demo-Wissensbasis keine Richtlinie zum Mutterschutz enthält, weist der Assistent ausdrücklich darauf hin, dass die Information nicht gefunden wurde.',
    'The knowledge base contains fictional demo policies, not confidential company documents.':
      'Die Wissensbasis enthält fiktive Demo-Richtlinien und keine vertraulichen Unternehmensdokumente.',
    'Knowledge ingestion is started manually; there is no automatic document synchronization.':
      'Die Knowledge Ingestion wird manuell gestartet; eine automatische Dokumentsynchronisierung besteht nicht.',
    'There is no PDF, Google Drive, Notion, or SharePoint ingestion.':
      'PDF-, Google-Drive-, Notion- oder SharePoint-Ingestion ist nicht implementiert.',
    'Generated answers do not include source citations or metadata filtering.':
      'Generierte Antworten enthalten keine Quellenangaben oder Metadatenfilterung.',
    'Role-based access control is not implemented.': 'Eine rollenbasierte Zugriffskontrolle ist nicht implementiert.',
    'There is no reranking, retrieval evaluation framework, or production monitoring.':
      'Reranking, ein Framework zur Retrieval-Evaluierung und Production Monitoring sind nicht vorhanden.',
    'The demo has no chat UI or conversation memory.': 'Die Demo verfügt weder über eine Chat UI noch über Conversation Memory.',
    'This is a portfolio demo, not a production-ready knowledge platform.':
      'Dies ist eine Portfolio-Demo und keine produktionsreife Wissensplattform.',
    'Add PDF, Google Drive, Notion, and SharePoint ingestion':
      'Ingestion für PDF, Google Drive, Notion und SharePoint ergänzen',
    'Synchronize document updates automatically': 'Dokumentänderungen automatisch synchronisieren',
    'Add metadata filtering and source citations': 'Metadatenfilterung und Quellenangaben ergänzen',
    'Apply role-based access permissions': 'Rollenbasierte Zugriffsrechte umsetzen',
    'Introduce reranking and retrieval evaluation': 'Reranking und Retrieval-Evaluierung einführen',
    'Add monitoring and audit visibility': 'Monitoring und Audit-Transparenz ergänzen',
    'Build a chat UI with conversation history': 'Chat UI mit Gesprächsverlauf entwickeln',
    'HR policy assistant': 'Assistent für HR-Richtlinien',
    'IT helpdesk knowledge assistant': 'Wissensassistent für den IT Helpdesk',
    'Employee onboarding assistant': 'Assistent für Mitarbeiter-Onboarding',
    'Internal SOP search': 'Interne SOP-Suche',
    'Company documentation assistant': 'Assistent für Unternehmensdokumentation',
    'Credentials are not stored in the repository.': 'Credentials werden nicht im Repository gespeichert.',
    'Supabase and OpenAI credentials are configured through n8n Credentials.':
      'Supabase- und OpenAI-Credentials werden über n8n Credentials konfiguriert.',
    'All included policies are fictional demo content.': 'Alle enthaltenen Richtlinien sind fiktive Demo-Inhalte.',
    'A real company deployment would require access controls and a privacy review.':
      'Ein realer Unternehmenseinsatz würde Zugriffskontrollen und eine Datenschutzprüfung erfordern.',

    // Meta content
    'Vladyslav Lukianov is an AI Automation & IT Specialist who builds practical n8n workflows, business automations, and operational tools.':
      'Vladyslav Lukianov ist Spezialist für AI Automation und IT und entwickelt praxisnahe n8n Workflows, Business-Automatisierungen und operative Tools.',
    'Explore practical AI automation, n8n workflows, Google Sheets, Telegram, and operational reporting projects by Vladyslav Lukianov.':
      'Praxisnahe Projekte von Vladyslav Lukianov rund um AI Automation, n8n Workflows, Google Sheets, Telegram und operatives Reporting.',
    'Practical AI automation, n8n workflow, and IT projects by Vladyslav Lukianov.':
      'Praxisnahe Projekte von Vladyslav Lukianov aus den Bereichen AI Automation, n8n Workflows und IT.',
    'Vladyslav Lukianov — AI Automation & IT Specialist':
      'Vladyslav Lukianov — Spezialist für AI Automation & IT',
  },
};
