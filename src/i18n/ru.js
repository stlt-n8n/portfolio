import { ruUiTranslations } from './ruUi.js';

export const ru = {
  code: 'ru',
  label: 'RU',
  translations: {
    ...ruUiTranslations,
    // Global profile and navigation
    About: 'Обо мне',
    Projects: 'Проекты',
    Skills: 'Навыки',
    Contact: 'Контакты',
    Email: 'Эл. почта',
    'AI Automation & IT Specialist': 'Специалист по AI-автоматизации и IT',
    'I design and build practical AI workflows, business automations, and internal tools that reduce manual work and make everyday operations easier.':
      'Я проектирую и создаю практичные AI-воркфлоу, бизнес-автоматизации и внутренние инструменты, которые сокращают ручную работу и упрощают ежедневные процессы.',
    'I focus on practical automation: understanding how work is actually done, finding repetitive steps, and building tools that make operations clearer and easier to manage. My work sits between AI, workflow automation, and IT support, with an emphasis on useful systems rather than technology for show.':
      'Я занимаюсь практичной автоматизацией: разбираюсь, как устроена реальная работа, нахожу повторяющиеся операции и создаю инструменты, которые делают процессы понятнее и управляемее. Мои проекты объединяют AI, автоматизацию воркфлоу и IT-поддержку — без технологий ради технологий.',
    'Open to IT & AI automation opportunities, freelance projects, and collaborations.':
      'Открыт к предложениям в сфере IT и AI-автоматизации, фриланс-проектам и сотрудничеству.',

    // Process, skills and current work
    'Improving automation workflows for order handling, analytics, and job search.':
      'Совершенствую воркфлоу для обработки заказов, аналитики и поиска работы.',
    'Documenting workflow decisions with clearer screenshots and practical examples.':
      'Документирую решения по воркфлоу с понятными скриншотами и практическими примерами.',
    'Refining reusable automation patterns across AI, integrations, and IT support.':
      'Развиваю переиспользуемые паттерны автоматизации для AI, интеграций и IT-поддержки.',
    'Understand the workflow': 'Понять рабочий процесс',
    'Map the current process, repetitive steps, data sources, and handoffs.':
      'Описать текущий процесс, повторяющиеся шаги, источники данных и точки передачи.',
    'Design the automation': 'Спроектировать автоматизацию',
    'Choose the simplest reliable flow before adding AI or integrations.':
      'Сначала выбрать самый простой надёжный сценарий, затем добавлять AI и интеграции.',
    'Build and connect': 'Собрать и подключить',
    'Create the workflow, connect tools, and keep the logic easy to maintain.':
      'Создать воркфлоу, подключить инструменты и сохранить логику простой в поддержке.',
    'Test in real use': 'Проверить в реальной работе',
    'Review outputs, fix edge cases, and make the result practical for daily work.':
      'Проверить результаты, обработать граничные случаи и адаптировать решение для ежедневной работы.',
    'AI & Automation': 'AI и автоматизация',
    'LLM workflows': 'LLM-воркфлоу',
    'API integrations': 'API-интеграции',
    'Business Integrations': 'Бизнес-интеграции',
    'IT & Development Tools': 'IT и инструменты разработки',
    'IT troubleshooting': 'Диагностика IT-проблем',
    'General IT systems': 'Общие IT-системы',
    'JavaScript fundamentals': 'Основы JavaScript',
    'React basics': 'Основы React',

    // AI Job Match Analyzer
    'AI-powered Job Analysis Workflow': 'AI-воркфлоу для анализа вакансий',
    'AI automation that evaluates job vacancies, scores candidate fit, identifies missing skills, and automatically stores structured results in Google Sheets.':
      'AI-автоматизация оценивает вакансии, определяет соответствие кандидата, выявляет недостающие навыки и автоматически сохраняет структурированные результаты в Google Sheets.',
    'Job Vacancy Form': 'Форма вакансии',
    'Prepare Vacancy Text': 'Подготовить текст вакансии',
    'Analyze Job Match': 'Проанализировать соответствие',
    'Save Result to Google Sheets': 'Сохранить результат в Google Sheets',
    'Formatted Response': 'Форматированный ответ',
    'Reviewing job vacancies manually requires repeatedly reading job descriptions, comparing requirements with a candidate profile, identifying missing skills, and deciding whether an application is worthwhile.':
      'При ручном анализе вакансий приходится снова и снова читать описания, сопоставлять требования с профилем кандидата, выявлять недостающие навыки и решать, стоит ли откликаться.',
    'The workflow automates this evaluation process. A job vacancy is submitted through an n8n form, analyzed by an AI Agent against a predefined candidate profile, converted into structured data, and automatically stored in Google Sheets.':
      'Воркфлоу автоматизирует оценку. Вакансия поступает через форму n8n, AI Agent сравнивает её с заранее заданным профилем кандидата, преобразует результат в структурированные данные и автоматически сохраняет их в Google Sheets.',
    'The workflow turns an unstructured job description into a consistent evaluation containing company, position, location, match score, decision, reasons, missing skills, and recommended next steps.':
      'Воркфлоу превращает неструктурированное описание вакансии в единую оценку: компания, должность, локация, Match Score, решение, аргументы, недостающие навыки и рекомендуемые следующие шаги.',
    Workflow: 'Воркфлоу',
    'The real n8n workflow used to analyze and structure job vacancy information.':
      'Реальный n8n-воркфлоу для анализа и структурирования информации о вакансии.',
    'Structured Output': 'Структурированный результат',
    'Structured Google Sheets output generated by the automation.':
      'Структурированный результат работы автоматизации в Google Sheets.',
    'Live Case Study': 'Открыть кейс',

    // OrderPulse Business Analytics
    'Business Analytics & Operational Reporting Automation':
      'Автоматизация бизнес-аналитики и операционной отчётности',
    'An automation workflow for monitoring customer orders, calculating business KPIs, synchronizing operational data, and delivering structured reports through Google Sheets and Telegram.':
      'Воркфлоу для мониторинга заказов, расчёта бизнес-KPI, синхронизации операционных данных и отправки структурированных отчётов через Google Sheets и Telegram.',
    'Read orders from Google Sheets': 'Получить заказы из Google Sheets',
    'Check active processing orders': 'Проверить активные заказы в обработке',
    'Notify if no processing orders exist': 'Уведомить, если заказов в обработке нет',
    'Filter active processing orders': 'Отфильтровать активные заказы в обработке',
    'Calculate business metrics': 'Рассчитать бизнес-показатели',
    'Save report history': 'Сохранить историю отчётов',
    'Send Telegram report': 'Отправить отчёт в Telegram',
    'Update Processing Queue': 'Обновить Processing Queue',
    'Operational order data requires repeated manual monitoring and reporting. Teams need visibility into active orders, revenue, processing workload, employee performance, top-selling products, and order status.':
      'Операционные данные по заказам требуют регулярного ручного контроля и отчётности. Команде нужна прозрачная информация об активных заказах, выручке, нагрузке, результатах сотрудников, популярных товарах и статусах заказов.',
    'The workflow reads order data from Google Sheets, identifies active processing orders, calculates operational metrics, updates a dedicated Processing Queue, saves report history, generates formatted Telegram reports, and maintains a Google Sheets analytics dashboard.':
      'Воркфлоу получает данные о заказах из Google Sheets, определяет активные заказы в обработке, рассчитывает операционные показатели, обновляет отдельную Processing Queue, сохраняет историю, формирует отчёты для Telegram и поддерживает аналитический дашборд в Google Sheets.',
    'The workflow centralizes order monitoring, KPI calculation, reporting, and processing visibility into one repeatable automation. It demonstrates how operational reporting tasks can be automated while keeping business information structured and easy to review.':
      'Воркфлоу объединяет мониторинг заказов, расчёт KPI, отчётность и контроль обработки в одной воспроизводимой автоматизации. Он показывает, как автоматизировать операционную отчётность, сохранив бизнес-данные структурированными и удобными для проверки.',
    'Workflow Architecture': 'Архитектура воркфлоу',
    'The n8n workflow architecture for monitoring orders and generating reports.':
      'Архитектура n8n-воркфлоу для мониторинга заказов и формирования отчётов.',
    'Telegram Reporting': 'Отчётность в Telegram',
    'Automated Telegram report with active orders, revenue, average order value, processing items, top employees, top product, and timestamp.':
      'Автоматический отчёт в Telegram: активные заказы, выручка, средний чек, товары в обработке, лучшие сотрудники, популярный товар и время формирования.',
    'Analytics Dashboard': 'Аналитический дашборд',
    'Google Sheets dashboard for total orders, processing orders, revenue, order status distribution, business metrics, and top employees.':
      'Дашборд в Google Sheets с общим числом заказов, заказами в обработке, выручкой, распределением по статусам, бизнес-показателями и результатами сотрудников.',
    'Processing Queue': 'Processing Queue',
    'A dedicated Processing Queue sheet that contains active orders for operational review and daily planning.':
      'Отдельный лист Processing Queue с активными заказами для операционного контроля и ежедневного планирования.',
    'Warehouse teams': 'Складские команды',
    'Customer support': 'Служба поддержки',
    'Operations managers': 'Операционные менеджеры',
    'Daily production planning': 'Ежедневное производственное планирование',

    // Order Pulse — Employee Workflow
    'Role-Based Order Processing Automation': 'Ролевая автоматизация обработки заказов',
    'An n8n workflow that processes order data, generates employee-specific reports, monitors active processing orders, and sends operational updates through Telegram.':
      'n8n-воркфлоу обрабатывает данные заказов, формирует отчёты для сотрудников, отслеживает активные заказы в обработке и отправляет операционные обновления через Telegram.',
    'Send a Telegram report': 'Отправить отчёт в Telegram',
    'Update the processing queue': 'Обновить очередь обработки',
    'Shared order data can be difficult to review from an employee perspective when active processing orders, product statistics, revenue values, and recurring reports need to be checked manually.':
      'Сотрудникам сложно работать с общими данными по заказам, когда активные заказы, статистику товаров, выручку и регулярные отчёты приходится проверять вручную.',
    'The workflow reads order data from Google Sheets, filters active processing orders, calculates operational metrics, sends a Telegram report, logs report history, and synchronizes the processing queue.':
      'Воркфлоу получает заказы из Google Sheets, фильтрует активные позиции, рассчитывает операционные показатели, отправляет отчёт в Telegram, сохраняет историю и синхронизирует очередь обработки.',
    'This workflow demonstrates how a shared operational dataset can be transformed into a focused reporting flow for employee-level order monitoring. It complements the broader OrderPulse Business Analytics workflow by focusing on daily operational visibility rather than company-wide analytics.':
      'Этот воркфлоу показывает, как превратить общий набор операционных данных в целевой процесс отчётности для контроля заказов на уровне сотрудников. Он дополняет более широкий OrderPulse Business Analytics, концентрируясь на ежедневной работе, а не на аналитике всей компании.',
    'Processing Orders': 'Заказы в обработке',
    'Processing Revenue': 'Выручка по заказам в обработке',
    'Average Order Value': 'Средняя стоимость заказа',
    'Total Items': 'Всего товаров',
    'Top Employee': 'Лучший сотрудник',
    'Top Product': 'Популярный товар',
    'Workflow Overview': 'Обзор воркфлоу',
    'The n8n workflow reads orders, filters active processing work, calculates metrics, sends the report, logs history, and updates the queue.':
      'n8n-воркфлоу получает заказы, фильтрует активные позиции, рассчитывает показатели, отправляет отчёт, сохраняет историю и обновляет очередь.',
    'The synchronized Processing Queue keeps active processing orders visible in a dedicated operational view.':
      'Синхронизированная Processing Queue показывает активные заказы в отдельном операционном представлении.',
    'Employee Dashboard': 'Дашборд сотрудника',
    'The dashboard supports employee-level operational review with processing orders, revenue, average order value, item totals, and product or employee statistics.':
      'Дашборд помогает сотруднику контролировать заказы в обработке, выручку, среднюю стоимость заказа, общее число товаров, а также статистику по товарам и сотрудникам.',
    'Telegram Report': 'Отчёт в Telegram',
    'The automated Telegram notification delivers the calculated order report without requiring manual report preparation.':
      'Автоматическое уведомление в Telegram доставляет рассчитанный отчёт без ручной подготовки.',

    // Customer support assistant
    'AI-Assisted Customer Support & Lead Routing Workflow':
      'AI-воркфлоу для поддержки клиентов и маршрутизации лидов',
    'An n8n workflow that classifies customer messages, routes support requests, generates data-grounded replies from mock Google Sheets records, logs interactions, and alerts humans when needed.':
      'n8n-воркфлоу классифицирует сообщения клиентов, направляет запросы поддержки, формирует ответы на основе демо-данных из Google Sheets, протоколирует взаимодействия и при необходимости уведомляет специалиста.',
    'Customer Message': 'Сообщение клиента',
    'Intent Classification': 'Классификация намерения',
    'Route Request': 'Маршрутизация запроса',
    'Lookup Data / Handle Lead': 'Поиск данных / обработка лида',
    'Generate Response': 'Формирование ответа',
    'Log Interaction': 'Запись взаимодействия',
    'Human Alert When Needed': 'Уведомление специалиста при необходимости',
    'Webhook Response': 'Ответ webhook',
    'Customer-support messages often require manual classification, repeated order or product lookups, routine replies, and manual handoffs when a refund request or sales opportunity needs human attention.':
      'Сообщения в поддержку часто приходится вручную классифицировать, повторно искать заказы или товары, составлять типовые ответы и передавать специалисту запросы на возврат или потенциальные продажи.',
    'The workflow accepts a message through a webhook or manual trigger, uses OpenAI to classify its intent and extract relevant details, routes it through the appropriate path, looks up mock store data or records a lead, generates a concise grounded reply, logs the interaction, and alerts a human when needed.':
      'Воркфлоу принимает сообщение через webhook или ручной триггер, с помощью OpenAI определяет намерение и извлекает важные детали. Затем направляет запрос по нужному сценарию, ищет данные в демо-магазине или регистрирует лид, формирует краткий ответ на основе данных, записывает взаимодействие и при необходимости уведомляет специалиста.',
    'Looks up a matching order and prepares a concise status response.':
      'Находит нужный заказ и формирует краткий ответ о его статусе.',
    'Checks order context, prepares an informational reply, and alerts support.':
      'Проверяет данные заказа, готовит информационный ответ и уведомляет поддержку.',
    'Finds matching mock product data and answers from the available record.':
      'Находит подходящие демо-данные товара и отвечает на основе доступной записи.',
    'Captures the inquiry as a lead and notifies the sales contact.':
      'Регистрирует обращение как лид и уведомляет специалиста по продажам.',
    'Provides a short fallback response for requests outside the defined paths.':
      'Возвращает короткий запасной ответ для запросов вне заданных сценариев.',
    'The complete n8n workflow, from incoming customer message through intent routing, data lookup, logging, alerts, and the final webhook response.':
      'Полный n8n-воркфлоу: от входящего сообщения и маршрутизации по намерению до поиска данных, логирования, уведомлений и итогового ответа webhook.',
    'A structured JSON response returned by the workflow after the request has been processed.':
      'Структурированный JSON-ответ, который воркфлоу возвращает после обработки запроса.',
    'Orders Data': 'Данные заказов',
    'Mock order records used to demonstrate order-status and refund lookups.':
      'Демо-записи заказов для проверки статуса и обработки запросов на возврат.',
    'Products Data': 'Данные товаров',
    'Mock product records used to ground product-question responses.':
      'Демо-записи товаров, на которых основаны ответы на вопросы о продуктах.',
    'Interaction Logs': 'Журнал взаимодействий',
    'Structured support interaction history stored in Google Sheets.':
      'Структурированная история обращений в поддержку, сохранённая в Google Sheets.',
    'Sales Leads': 'Лиды',
    'Captured sales inquiries prepared for human follow-up.':
      'Зафиксированные обращения потенциальных клиентов для дальнейшей обработки специалистом.',
    'Refund Alert': 'Уведомление о возврате',
    'Telegram notification that escalates a refund or return request to a person.':
      'Уведомление в Telegram передаёт запрос на возврат специалисту.',
    'Sales Lead Alert': 'Уведомление о новом лиде',
    'Telegram notification that flags a new sales opportunity for follow-up.':
      'Уведомление в Telegram отмечает новую возможность продажи для дальнейшей обработки.',
    'Google Sheets provides mock store data; there is no real Shopify API integration.':
      'Google Sheets содержит демо-данные магазина; реальной интеграции с Shopify API нет.',
    'The webhook does not include production authentication or rate limiting.':
      'Webhook не поддерживает production-аутентификацию и rate limiting.',
    'Refund and return requests are escalated, but the workflow does not issue refunds.':
      'Запросы на возврат передаются специалисту, но сам воркфлоу не выполняет возврат средств.',
    'Telegram provides notifications rather than a complete ticketing system.':
      'Telegram используется для уведомлений и не заменяет полноценную тикет-систему.',
    'Connect real Shopify, CRM, or helpdesk APIs': 'Подключить реальные API Shopify, CRM или helpdesk',
    'Add webhook authentication and rate limiting': 'Добавить аутентификацию webhook и rate limiting',
    'Introduce confidence scoring and human review': 'Добавить оценку уверенности и проверку специалистом',
    'Maintain conversation history': 'Сохранять историю диалога',
    'Support multilingual responses': 'Поддержать многоязычные ответы',
    'View Case Study': 'Открыть кейс',

    // Invoice processing
    'Human-in-the-Loop Invoice Extraction & Review Workflow':
      'Human-in-the-Loop воркфлоу для извлечения и проверки данных счетов',
    'AI extracts structured invoice data while complete records are stored and uncertain results are routed to a visible human review queue.':
      'AI извлекает структурированные данные счетов: полные записи сохраняются, а неоднозначные результаты направляются в видимую очередь для ручной проверки.',
    'Invoice Text': 'Текст счёта',
    'Prepare Input': 'Подготовка входных данных',
    'OpenAI Structured Extraction': 'Структурированное извлечение через OpenAI',
    'Parse & Normalize JSON': 'Разбор и нормализация JSON',
    'Needs Human Review?': 'Нужна ручная проверка?',
    'Save Invoice': 'Сохранить счёт',
    'Save to Review Queue': 'Добавить в очередь проверки',
    'Telegram Reviewer Alert': 'Уведомить проверяющего в Telegram',
    'Manual invoice entry is repetitive and error-prone. Missing or inconsistent fields make invoices harder to validate, while silently accepting low-confidence AI output can create financial and operational risk.':
      'Ручной ввод счетов однообразен и подвержен ошибкам. Пропущенные или несогласованные поля усложняют проверку, а автоматическое принятие результатов AI с низкой уверенностью создаёт финансовые и операционные риски.',
    'The workflow receives invoice text, extracts and normalizes a predictable set of fields, and uses an explicit review decision to separate complete records from uncertain cases. AI handles structured extraction while exceptions remain visible to a human reviewer.':
      'Воркфлоу получает текст счёта, извлекает и нормализует заданный набор полей, а затем отделяет полные записи от сомнительных по явному признаку проверки. AI выполняет структурированное извлечение, а исключения остаются видимыми для специалиста.',
    'The n8n architecture routes normalized invoice data into either the processed invoices sheet or a human review path with a Telegram notification.':
      'Архитектура n8n направляет нормализованные данные либо на лист обработанных счетов, либо в сценарий ручной проверки с уведомлением в Telegram.',
    'Structured Extraction': 'Структурированное извлечение',
    'OpenAI converts invoice text into normalized JSON while preserving missing values as null and exposing confidence and review status.':
      'OpenAI преобразует текст счёта в нормализованный JSON, сохраняет отсутствующие значения как null и указывает уверенность и статус проверки.',
    'Processed Invoices': 'Обработанные счета',
    'Complete, higher-confidence records are appended to the processed invoices sheet used as demo storage.':
      'Полные записи с более высокой уверенностью добавляются на лист обработанных счетов, который используется как демо-хранилище.',
    'Review Queue': 'Очередь проверки',
    'Invoices requiring attention are stored separately with review status set to pending for human follow-up.':
      'Счета, требующие внимания, сохраняются отдельно со статусом pending для последующей ручной проверки.',
    'Telegram Review Alert': 'Уведомление о проверке в Telegram',
    'The reviewer receives a Telegram notification containing the available invoice fields and confidence value.':
      'Проверяющий получает в Telegram доступные поля счёта и значение уверенности.',
    'Fictional Demo Invoice': 'Вымышленный демонстрационный счёт',
    'A fictional invoice used to explain the business data in the portfolio walkthrough; it is not uploaded to or parsed by the current workflow.':
      'Вымышленный счёт показывает бизнес-данные в демонстрации портфолио; текущий воркфлоу не загружает и не разбирает этот файл.',
    'The webhook accepts invoice_text only; there is no PDF upload, OCR, or attachment ingestion.':
      'Webhook принимает только invoice_text; загрузка PDF, OCR и обработка вложений не реализованы.',
    'Google Sheets is demo storage rather than an accounting system or production database.':
      'Google Sheets используется как демо-хранилище, а не бухгалтерская система или production-база данных.',
    'Approval, rejection, correction, and payment remain manual actions.':
      'Подтверждение, отклонение, исправление и оплата остаются ручными операциями.',
    'The webhook has no production authentication or rate limiting.':
      'У webhook нет production-аутентификации и rate limiting.',
    'Duplicate detection and approved-vendor validation are not implemented.':
      'Поиск дубликатов и проверка по списку одобренных поставщиков не реализованы.',
    'There is no dedicated retry or error workflow.': 'Отдельного воркфлоу для повторов и обработки ошибок нет.',
    'The project has not been load-tested or production-hardened.':
      'Проект не проходил нагрузочное тестирование и подготовку к production.',
    'Add PDF and image ingestion with OCR': 'Добавить обработку PDF и изображений с OCR',
    'Validate extracted data against a strict schema': 'Проверять извлечённые данные по строгой схеме',
    'Add authenticated approval and rejection actions': 'Добавить защищённые действия подтверждения и отклонения',
    'Detect duplicate invoices': 'Выявлять дубликаты счетов',
    'Check suppliers against an approved-vendor list': 'Проверять поставщиков по списку одобренных',
    'Add retries, error handling, monitoring, and audit history':
      'Добавить повторы, обработку ошибок, мониторинг и историю аудита',
    'Integrate an accounting platform or database': 'Интегрировать бухгалтерскую платформу или базу данных',

    // Company knowledge RAG
    'RAG-Based Internal Knowledge & Policy Assistant':
      'RAG-ассистент по внутренним знаниям и политикам',
    'Fictional company policies are embedded in Supabase, relevant context is retrieved through semantic search, and OpenAI generates grounded internal answers.':
      'Вымышленные политики компании сохраняются в Supabase как embeddings, релевантный контекст извлекается семантическим поиском, а OpenAI формирует ответы на его основе.',
    'Company policies, internal procedures, and SOPs often live across multiple documents. Employees spend time searching manually, reading long policies, or asking colleagues the same recurring questions.':
      'Политики компании, внутренние процедуры и SOP часто разбросаны по разным документам. Сотрудники тратят время на ручной поиск, чтение длинных инструкций и одни и те же вопросы коллегам.',
    'The workflow separates knowledge ingestion from question answering. Fictional policy documents are embedded and stored in a Supabase pgvector vector store, while each employee question retrieves relevant company context before OpenAI generates a grounded answer.':
      'Воркфлоу разделяет загрузку знаний и ответы на вопросы. Вымышленные документы преобразуются в embeddings и сохраняются в vector store Supabase pgvector. Для каждого вопроса сотрудника сначала извлекается релевантный контекст компании, и только затем OpenAI формирует ответ на его основе.',
    'Company Policies': 'Политики компании',
    'Prepare Documents': 'Подготовить документы',
    'Load Document': 'Загрузить документ',
    'Employee Question': 'Вопрос сотрудника',
    'Question Embedding': 'Embedding вопроса',
    'Semantic Search': 'Семантический поиск',
    'Retrieve Relevant Documents': 'Найти релевантные документы',
    'Aggregate Context': 'Объединить контекст',
    'OpenAI Grounded Answer': 'Ответ OpenAI на основе контекста',
    'Vacation Policy': 'Политика отпусков',
    'Remote Work Policy': 'Политика удалённой работы',
    'IT Support Policy': 'Политика IT-поддержки',
    'Expense Policy': 'Политика расходов',
    'Employee Onboarding Policy': 'Политика адаптации сотрудников',
    'RAG Architecture': 'RAG-архитектура',
    'The n8n workflow keeps manual knowledge ingestion separate from webhook-based question answering, retrieval, context aggregation, and response generation.':
      'n8n-воркфлоу отделяет ручную загрузку знаний от ответов через webhook, включая retrieval, объединение контекста и генерацию ответа.',
    'Supabase Vector Store': 'Supabase Vector Store',
    'The Supabase documents table stores policy content, document metadata, and pgvector embeddings for semantic retrieval.':
      'Таблица documents в Supabase хранит тексты политик, метаданные документов и pgvector embeddings для семантического поиска.',
    'A question embedding is matched against the vector store to retrieve relevant policy documents together with similarity scores.':
      'Embedding вопроса сопоставляется с vector store, чтобы получить релевантные документы и оценки сходства.',
    'Grounded Answer': 'Ответ на основе контекста',
    'A question about a stolen company laptop is answered from the fictional IT Support Policy included in the demo knowledge base.':
      'Ответ на вопрос о краже корпоративного ноутбука формируется по вымышленной политике IT-поддержки из демонстрационной базы знаний.',
    'Missing-Knowledge Fallback': 'Ответ при отсутствии знаний',
    'When a maternity-leave policy is not available in the demo knowledge base, the assistant explicitly reports that the information was not found.':
      'Когда в демонстрационной базе нет политики по декретному отпуску, ассистент прямо сообщает, что информация не найдена.',
    'The knowledge base contains fictional demo policies, not confidential company documents.':
      'База знаний содержит вымышленные демонстрационные политики, а не конфиденциальные документы компании.',
    'Knowledge ingestion is started manually; there is no automatic document synchronization.':
      'Загрузка знаний запускается вручную; автоматической синхронизации документов нет.',
    'There is no PDF, Google Drive, Notion, or SharePoint ingestion.':
      'Загрузка из PDF, Google Drive, Notion и SharePoint не реализована.',
    'Generated answers do not include source citations or metadata filtering.':
      'В сгенерированных ответах нет ссылок на источники и фильтрации по метаданным.',
    'Role-based access control is not implemented.': 'Ролевое управление доступом не реализовано.',
    'There is no reranking, retrieval evaluation framework, or production monitoring.':
      'Reranking, система оценки retrieval и production-мониторинг не реализованы.',
    'The demo has no chat UI or conversation memory.': 'В демо нет Chat UI и памяти диалога.',
    'This is a portfolio demo, not a production-ready knowledge platform.':
      'Это демонстрационный проект для портфолио, а не готовая production-платформа знаний.',
    'Add PDF, Google Drive, Notion, and SharePoint ingestion':
      'Добавить загрузку из PDF, Google Drive, Notion и SharePoint',
    'Synchronize document updates automatically': 'Автоматически синхронизировать обновления документов',
    'Add metadata filtering and source citations': 'Добавить фильтрацию по метаданным и ссылки на источники',
    'Apply role-based access permissions': 'Реализовать ролевые права доступа',
    'Introduce reranking and retrieval evaluation': 'Добавить reranking и оценку качества retrieval',
    'Add monitoring and audit visibility': 'Добавить мониторинг и прозрачность аудита',
    'Build a chat UI with conversation history': 'Создать Chat UI с историей диалога',
    'HR policy assistant': 'Ассистент по HR-политикам',
    'IT helpdesk knowledge assistant': 'Ассистент базы знаний IT Helpdesk',
    'Employee onboarding assistant': 'Ассистент по адаптации сотрудников',
    'Internal SOP search': 'Поиск по внутренним SOP',
    'Company documentation assistant': 'Ассистент по документации компании',
    'Credentials are not stored in the repository.': 'Учётные данные не хранятся в репозитории.',
    'Supabase and OpenAI credentials are configured through n8n Credentials.':
      'Учётные данные Supabase и OpenAI настраиваются через n8n Credentials.',
    'All included policies are fictional demo content.': 'Все политики в проекте — вымышленный демо-контент.',
    'A real company deployment would require access controls and a privacy review.':
      'Для реального внедрения в компании потребуются контроль доступа и проверка требований к конфиденциальности.',

    // AI Portfolio Assistant & Lead Qualification
    'AI Portfolio Assistant & Lead Qualification': 'AI-ассистент портфолио и квалификация лидов',
    'Portfolio RAG, intent routing & lead qualification':
      'RAG для портфолио, маршрутизация запросов и квалификация лидов',
    'An AI assistant for my portfolio that combines RAG, intent routing, conversation context, and lead qualification through n8n, OpenAI, and Supabase.':
      'AI-ассистент для моего портфолио: объединяет RAG, маршрутизацию запросов, контекст диалога и квалификацию лидов с помощью n8n, OpenAI и Supabase.',
    'A static portfolio presents projects, but visitors still have to search manually for relevant experience, technologies, and capabilities.':
      'Статичное портфолио показывает проекты, но посетителю приходится самому искать сведения об опыте, технологиях и навыках, которые важны именно ему.',
    'The assistant uses curated portfolio knowledge to answer relevant questions, directs potential work inquiries to a dedicated lead path, and keeps unrelated requests outside the portfolio scope.':
      'Ассистент отвечает на вопросы по подготовленной базе знаний портфолио, отдельно обрабатывает запросы о работе и сотрудничестве и не выходит за рамки темы портфолио.',
    'The Vercel-hosted website reaches a local n8n webhook through a temporary Cloudflare HTTPS tunnel. After normalization and validation, GPT-4.1-mini classifies the request and routes it to one of three paths.':
      'Сайт на Vercel обращается к локальному webhook n8n через временный HTTPS-туннель Cloudflare. После нормализации и проверки GPT-4.1-mini классифицирует запрос и направляет его по одному из трёх сценариев.',
    'Retrieves relevant portfolio knowledge from Supabase and generates a grounded answer.':
      'Находит подходящие сведения о портфолио в Supabase и формирует ответ на их основе.',
    'Retrieves relevant capabilities and responds to hiring or project inquiries with a public contact CTA.':
      'Находит сведения о подходящих компетенциях и отвечает на предложения о работе или проекте, предлагая открытые способы связи.',
    'Returns a fixed portfolio-scoped reply without invoking the general answer flow.':
      'Возвращает готовый ответ о тематике портфолио, не запуская обычную генерацию.',
    'The repository contains 49 curated portfolio chunks. OpenAI text-embedding-3-small creates 1,536-dimensional embeddings for Supabase PostgreSQL/pgvector; retrieval is configured for up to four matching chunks. The repository does not verify the live vector-row count.':
      'В репозитории находятся 49 подготовленных фрагментов знаний о портфолио. OpenAI text-embedding-3-small создаёт векторы размерности 1536 для Supabase PostgreSQL/pgvector; поиск настроен на выдачу до четырёх подходящих фрагментов. Репозиторий не подтверждает фактическое число записей в рабочем индексе.',
    'The frontend sends up to eight previous user and assistant messages with each request. History helps resolve follow-up questions, while retrieved portfolio knowledge remains the factual source. The backend does not retain conversations between requests.':
      'С каждым запросом frontend передаёт до восьми предыдущих сообщений пользователя и ассистента. История помогает понять уточняющие вопросы, но источником фактов остаются найденные материалы портфолио. Backend не сохраняет диалог между запросами.',
    'A separate lead path handles hiring, collaboration, and automation inquiries. It can point visitors to public contact details, but the current MVP does not store leads in a CRM or trigger lead alerts.':
      'Отдельный сценарий обрабатывает предложения о работе, сотрудничестве и автоматизации. Он может подсказать открытые контакты, но в текущем MVP лиды не сохраняются в CRM и уведомления о них не отправляются.',
    'Grounded portfolio answer': 'Ответ на основе данных портфолио',
    'The assistant answers a question about technologies using retrieved portfolio knowledge.':
      'Ассистент отвечает на вопрос о технологиях, опираясь на найденные материалы портфолио.',
    'Contextual follow-up': 'Уточняющий вопрос',
    'A follow-up about a RAG project stays connected to the preceding conversation.':
      'Вопрос о RAG-проекте учитывает предшествующий контекст диалога.',
    'Potential lead': 'Запрос о сотрудничестве',
    'An invoice automation inquiry follows the lead-aware response path.':
      'Запрос об автоматизации счетов обрабатывается по сценарию для потенциальных клиентов.',
    'Intent-routing workflow': 'Воркфлоу маршрутизации запросов',
    'The n8n workflow validates messages and routes portfolio questions, potential leads, and off-topic requests.':
      'Воркфлоу n8n проверяет сообщения и разделяет вопросы о портфолио, запросы о сотрудничестве и сообщения не по теме.',
    'Knowledge ingestion workflow': 'Воркфлоу загрузки знаний',
    'A separate n8n workflow prepares portfolio knowledge for embedding and storage in Supabase.':
      'Отдельный воркфлоу n8n готовит сведения о портфолио для создания векторов и хранения в Supabase.',
    'The public Portfolio currently presents the assistant in DEMO MODE; its live backend is not enabled in this build.':
      'На публичном сайте ассистент сейчас работает в DEMO MODE; live backend в этой сборке не включён.',
    'n8n runs locally behind a temporary Cloudflare Quick Tunnel, so backend availability depends on the local runtime and tunnel.':
      'n8n работает локально через временный Cloudflare Quick Tunnel. Доступность backend зависит от работы локального компьютера и туннеля.',
    'Conversation history is request-scoped; there is no persistent server-side memory.':
      'История передаётся только в рамках запроса; постоянного хранения диалогов на сервере нет.',
    'Potential leads are not stored in a CRM.':
      'Потенциальные клиенты не сохраняются в CRM.',
    'The public webhook does not yet have production-grade authentication or rate limiting.':
      'Для публичного webhook пока не реализованы аутентификация и ограничение частоты запросов уровня production.',
    'A production rollout would require stable backend hosting, a permanent domain, webhook authentication, rate limiting, and privacy-aware persistence for conversations or leads.':
      'Для production-версии нужны стабильный хостинг backend, постоянный домен, защита webhook, ограничение частоты запросов и хранение диалогов или лидов с учётом приватности.',
    'Project 07 · Case Study': 'Проект 07 · Кейс',
    'Open screenshot': 'Открыть скриншот',
    'Assistant in action': 'Ассистент в работе',
    'Portfolio answers, follow-ups, and lead inquiries':
      'Ответы о портфолио, уточнения и запросы о сотрудничестве',
    'Real chat examples show the visitor experience; the public site currently displays a demo preview.':
      'Реальные примеры чата показывают работу ассистента; на публичном сайте сейчас доступна демо-версия.',
    Architecture: 'Архитектура',
    'One entry point, three intent paths': 'Одна точка входа, три сценария',
    'RAG & Knowledge Base': 'RAG и база знаний',
    'Curated facts before generated answers': 'Сначала проверенные факты, затем ответ',
    'Conversation Context': 'Контекст диалога',
    'Lead Qualification': 'Квалификация лидов',
    'Workflow Evidence': 'Воркфлоу проекта',
    'The routing and ingestion workflows': 'Маршрутизация и загрузка знаний',
    'These n8n screenshots document the backend paths behind the chat examples.':
      'На скриншотах n8n показаны backend-сценарии, которые стоят за примерами чата.',
    'Current MVP Limitations': 'Текущие ограничения MVP',
    'What remains before a production rollout': 'Что нужно до полноценного запуска',
    'AI portfolio assistant built with n8n, OpenAI, Supabase and RAG, featuring intent routing, contextual follow-ups and lead qualification.':
      'AI-ассистент портфолио на n8n, OpenAI, Supabase и RAG: маршрутизация запросов, ответы с учётом контекста и квалификация лидов.',

    // Meta content
    'Vladyslav Lukianov is an AI Automation & IT Specialist who builds practical n8n workflows, business automations, and operational tools.':
      'Vladyslav Lukianov — специалист по AI-автоматизации и IT, создающий практичные n8n-воркфлоу, бизнес-автоматизации и операционные инструменты.',
    'Explore practical AI automation, n8n workflows, Google Sheets, Telegram, and operational reporting projects by Vladyslav Lukianov.':
      'Практические проекты Владислава Лукьянова в сфере AI-автоматизации, n8n, Google Sheets, Telegram и операционной отчётности.',
    'Practical AI automation, n8n workflow, and IT projects by Vladyslav Lukianov.':
      'Практические проекты Владислава Лукьянова по AI-автоматизации, n8n и IT.',
    'Vladyslav Lukianov — AI Automation & IT Specialist':
      'Vladyslav Lukianov — специалист по AI-автоматизации и IT',
  },
};
