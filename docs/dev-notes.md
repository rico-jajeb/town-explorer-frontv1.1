Core Roles
A. Admin Group

------ Super Admin → 1 account

Has full access to everything (manage users, posts, spots, resorts, approve or delete content).

Usually the developer or main owner of the platform.

------Staff Admins → 1–5 accounts (depends on team)

Can approve posts, manage content, moderate users.

Limited from deleting super admin or managing system settings.

Purpose: keeps your platform safe and ensures content is moderated.

B. Owners

These are people who own or manage specific listings:

------Resort Owner

Can add/update/delete their resort listings.

Can see bookings or reservations if you implement them.

------Tourist Spot Owner / Manager

Can add/update/delete their tourist spot listings.

Maybe add events, schedules, or pricing.

Purpose: allows user-generated content while keeping each owner limited to their own content.

C.------ Regular Users / Tourists

Can view content, search places, and maybe leave reviews.

Cannot modify listings or approve content.

Purpose: these are your app’s consumers.

📝 Authentication Overview — SPA with HttpOnly Cookies
1️⃣ Overview

The application uses Laravel Sanctum with HttpOnly cookies to handle user authentication securely. The design ensures that sensitive authentication data is never exposed to JavaScript, protecting against XSS attacks.

Key features of this authentication system:

Secure session management: User sessions are stored in HttpOnly cookies, automatically sent by the browser.

CSRF protection: A separate CSRF token is provided for frontend requests.

Persistent login: Users remain logged in until session expiration or explicit logout.

Automatic handling: Frontend does not manually store or attach authentication tokens.

2️⃣ Login Flow (Conceptual)

CSRF Initialization:

Frontend requests a CSRF token from the backend.

Backend sets two cookies:

laravel_session → HttpOnly, used for session authentication

XSRF-TOKEN → accessible by JavaScript, used for CSRF protection

User Login:

Frontend submits user credentials to the login endpoint.

Backend validates credentials, creates a session, and regenerates the session ID.

The session cookie is automatically stored by the browser.

Authenticated Requests:

All subsequent requests to protected endpoints automatically include the session cookie.

Backend validates the session and CSRF token to authorize actions.

Logout:

Frontend calls logout endpoint.

Backend invalidates the session and deletes the session cookie.

User is logged out across all tabs of the same browser.

3️⃣ Security Considerations

HttpOnly cookies: Cannot be accessed by JavaScript, protecting against XSS.

CSRF token: Ensures that malicious websites cannot perform unauthorized actions on behalf of the user.

Session regeneration: Prevents session fixation attacks.

Automatic cookie handling: Reduces the chance of accidental token exposure in frontend code.

4️⃣ When to Use This System

This authentication flow is ideal for:

Single-page applications (SPAs) where the frontend and backend are controlled by the same team.

Applications where security against XSS and CSRF is critical.

Projects that do not need token-based authentication for third-party apps or mobile clients.

5️⃣ Benefits Compared to Token-Based Authentication

Higher security: Tokens are not stored in localStorage or exposed to JavaScript.

Simpler frontend: Automatic cookie handling eliminates manual token management.

CSRF protection built-in: No extra configuration needed for same-origin SPAs.

User Management Module Documentation

1. Overview

The User Management Module handles retrieval, caching, and management of user data within the system. This module allows the frontend to efficiently display user lists, minimize API calls, and maintain reactive state while supporting temporary caching during a user session.

Key features:

Fetch and display user lists from the API.

In-memory caching using Pinia for reactive state.

Optional session-based caching (sessionStorage) to persist data across page reloads.

Force refresh support for updates or administrative changes.

2. Module Structure
   Pinia Store

File: stores/userStore.ts

Purpose: Manage user state and provide actions to fetch, refresh, and cache user data.

State

Property Type Description
users any[] Array of users fetched from the API
usersLoaded boolean Tracks if users have been loaded into store
loading boolean Indicates if the store is currently fetching data

Actions

Method Parameters Description
fetchUsers(force = false) force: boolean Fetches user list from API. If force = true, ignores cache and reloads fresh data. Stores results in Pinia and optionally in sessionStorage.
Service Layer

File: service/users/userService.ts

Purpose: Handles API communication for fetching and updating user data.

Methods

Method Description
getCustomersSmall() Fetches a small user list from the protected API endpoint /api/display-user and maps the data for frontend consumption.
updateUser(userId, data) (Optional) Updates user information via API. Typically used alongside fetchUsers(true) to refresh store after changes. 3. Caching Strategy
In-memory caching (Pinia)

Users are stored in Pinia’s reactive state.

Reduces unnecessary API calls during a session.

Data is reactive — any component accessing users will automatically update.

Session storage caching (optional)

sessionStorage persists data within the current browser tab.

Survives page reloads, cleared automatically when the tab closes.

Recommended for improving page reload performance without server-side caching.

TTL can be implemented (e.g., 5 minutes) to ensure cache doesn’t become stale.

Example implementation:

const cached = sessionStorage.getItem('users');
if (cached) {
const parsed = JSON.parse(cached);
if (Date.now() - parsed.timestamp < 5 _ 60 _ 1000) {
this.users = parsed.data;
this.usersLoaded = true;
return;
}
} 4. Usage Examples
Fetching Users
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()

// Fetch users with caching
await userStore.fetchUsers()

// Force refresh after updating a user
await userStore.fetchUsers(true)
Updating Users
import { UserService } from '@/service/users/userService'

// Update user info in API
await UserService.updateUser(userId, updatedData)

// Refresh the Pinia store to reflect changes
await userStore.fetchUsers(true) 5. Best Practices

Use fetchUsers() by default for efficient caching.

Use fetchUsers(true) after any API update to ensure data consistency.

Use sessionStorage TTL to avoid stale data if caching is enabled.

Avoid storing large datasets in sessionStorage to prevent performance issues.

Keep reactive Pinia state for frontend components; sessionStorage is only a backup for reloads.

6. Technical Notes

Designed for client-side caching; no server-side cache is required.

TTL or cache invalidation is optional but recommended.

The module is fully reactive and modular, supporting scaling to larger user lists or additional user-related actions.

✅ Outcome

Reduced API calls

Improved page performance and UX

Easy to maintain and extend

Supports real-time updates via forced refresh
