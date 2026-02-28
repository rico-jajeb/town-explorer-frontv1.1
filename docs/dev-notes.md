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
