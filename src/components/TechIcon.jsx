function TechIcon({ name }) {
  const normalized = name.toLowerCase();

  if (normalized.includes('github') || normalized.includes('git')) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 7.5h10M7 12h10M7 16.5h7" />
      </svg>
    );
  }

  if (normalized.includes('api') || normalized.includes('webhook') || normalized.includes('rest')) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.5 8.5 5 12l3.5 3.5M15.5 8.5 19 12l-3.5 3.5M13 6l-2 12" />
      </svg>
    );
  }

  if (normalized.includes('ai') || normalized.includes('llm') || normalized.includes('openai')) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4v16M4 12h16M7 7l10 10M17 7 7 17" />
      </svg>
    );
  }

  if (normalized.includes('analytics') || normalized.includes('data')) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 18V9M12 18V5M19 18v-7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 8h12v8H6zM9 5v3M15 5v3M9 16v3M15 16v3" />
    </svg>
  );
}

export default TechIcon;
