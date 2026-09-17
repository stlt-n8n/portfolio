# Vlad AI Assistant — frontend preview

The assistant is mounted once after the footer in `App.jsx`, outside `Routes`.
Messages, draft text and pending replies survive panel close/reopen and client-side
navigation. Reloading the document resets the conversation and anonymous session.
No dependencies, credentials, persistence, analytics or backend integration were added.

## Components and styling

- `PortfolioAssistant`: conversation state, current route and service boundary.
- `AssistantLauncher`: global Ask AI button using the existing button primitive.
- `AssistantPanel`: native modal dialog, header, focus restoration, Escape/outside
  click dismissal, scroll lock, and visual viewport tracking for mobile keyboards.
- `AssistantMessages`: welcome, suggestion buttons, message rendering, demo typing
  status, scroll history and a Latest messages control.
- `AssistantComposer`: multiline input, Enter/Shift+Enter, Send, trimming and the
  2,000-character limit. IME composition does not submit a message.
- `assistant.css`: scoped styles using existing colors, font, radius and shadows.
  Existing global reduced-motion rules apply. Mobile sheet uses the existing 720px
  breakpoint; desktop panel is 420px wide and up to 640px tall.

The panel is modal so background navigation cannot accidentally receive keyboard
focus. Closing returns focus to the launcher. On mobile, opening focuses Close
instead of the textarea to avoid immediately opening the software keyboard.
A small permanent spacer after the footer lets its content clear the launcher.

## Public demo transport and future live boundary

`src/services/assistantService.js` exports:

```js
sendAssistantMessage({ message, sessionId, currentPage }, { signal })
// Promise<{ message?: string, mode?: 'demo' }>
```

Public builds use demo mode by default. Sending a message waits briefly to preserve
the typing state and returns `{ mode: 'demo' }`; the localized UI then displays the
demo response. This path does not make an HTTP request.

The n8n request structure is retained in `sendLiveAssistantMessage()`: it still
sends `{ message, sessionId, currentPage }` and maps a successful
`{ success: true, reply: string }` payload to `{ message: reply }`. To intentionally
enable it later, provide both `VITE_ASSISTANT_MODE=live` and an HTTPS
`VITE_ASSISTANT_WEBHOOK_URL`. Non-HTTPS endpoints are rejected, so a public build
cannot fall back to localhost. Keep the response shape and cancellation contract
when connecting the future production endpoint.

`getAssistantSessionId()` creates an ID on first send with `crypto.randomUUID()`
(cryptographic random-byte fallback). It stays in module memory, without browser
storage or cookies. `currentPage` comes from `useLocation().pathname` at send time;
query strings and hash fragments are not included.

## QA performed

- Production Vite build and `git diff --check` pass.
- Home, Projects and all six individual case-study routes load; existing navigation
  and assistant availability checked. Fresh browser session has no console warnings
  or errors after navigation and chat interaction.
- Desktop 1280px, tablet 820px, mobile 390px and narrow 320px checked.
- 390 x 430 viewport checks a reduced keyboard-like available height; header and
  composer remain visible. This is not a physical iOS/Android keyboard test.
- Open/close, Escape, outside click, focus return, keyboard navigation, empty and
  whitespace-only input, Enter, Shift+Enter, Send and suggestions checked.
- Long unbroken 2,000-character message wraps without horizontal overflow.
- Sixteen-message mobile conversation, independent scrolling and Latest messages
  checked. Messages and draft survive route navigation and reopening. A pending
  response survives closing the panel.
- Service checks cover stable anonymous ID, request bounds and AbortSignal
  cancellation. The local n8n test webhook requires an active “Execute workflow”
  listener for each test request.

## Remaining manual device checks

On a real iPhone and Android device, open the chat, focus the textarea, type a
multiline message, rotate the screen and dismiss the keyboard. Verify Close and
Send remain reachable, safe-area spacing is comfortable, and the page retains its
scroll position after closing. Check VoiceOver/TalkBack announcements and OS
reduced-motion settings on those devices.
