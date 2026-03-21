# Al Wali Fleet (Node.js/Express)

هذا المشروع يعالج مشاكل التشغيل على Replit ويقدم هيكلة منظمة لتكامل GitHub OAuth.

## Project structure

```txt
src/
  app.js
  server.js
  config/
    env.js
  controllers/
    authController.js
    healthController.js
  middleware/
    errorHandler.js
    requestLogger.js
  routes/
    authRoutes.js
    healthRoutes.js
  services/
    githubOAuthService.js
test/
  health.test.js
.env.example
```

## Replit Secrets (مطلوب)

أضف القيم التالية في **Replit Secrets** (ولا تضعها داخل الكود):

- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`
- `GITHUB_REDIRECT_URI`
- `PORT` (اختياري، عادة Replit يوفرها)

### Redirect URI الصحيح

يجب أن يكون مطابقًا حرفيًا بين Replit و GitHub OAuth App Settings، مثال:

`https://al-wali-fleet--pola25930.replit.app/auth/github/callback`

أي اختلاف (uppercase/lowercase، slash إضافي، دومين مختلف) يؤدي لفشل تسجيل الدخول.

## Run

```bash
npm install
npm start
```

## OAuth flow

1. `GET /auth/github` -> redirect إلى GitHub authorize URL.
2. GitHub يرجع إلى `GET /auth/github/callback?code=...`.
3. السيرفر يبادل `code` عبر `https://github.com/login/oauth/access_token` مع `Accept: application/json`.
4. عند النجاح، يتم جلب user profile من `https://api.github.com/user`.

## Logs & diagnostics

- يوجد middleware يسجل كل request مع status code ومدة التنفيذ.
- error handler يعرض رسالة خطأ واضحة + تفاصيل مفيدة في console.
- عند بدء التطبيق يطبع `Expected GitHub callback` للتحقق السريع من `GITHUB_REDIRECT_URI`.

## Test cases (عملية)

1. **Server health**
   - Request: `GET /health`
   - Expected: `200` + `{ "status": "ok" }`

2. **Missing secrets validation**
   - شغّل التطبيق بدون `GITHUB_CLIENT_ID` أو `GITHUB_CLIENT_SECRET`
   - Expected: فشل startup برسالة توضح variables الناقصة.

3. **OAuth redirect**
   - Request: `GET /auth/github`
   - Expected: redirect إلى `github.com/login/oauth/authorize` ويتضمن `client_id` و `redirect_uri`.

4. **OAuth callback with missing code**
   - Request: `GET /auth/github/callback`
   - Expected: `400` مع رسالة `Missing authorization code...`

5. **End-to-end login**
   - اضغط login من `/auth/github`
   - أكمل auth في GitHub
   - Expected: `200` مع بيانات المستخدم (`id`, `login`, `name`).

## Notes for Replit

- تأكد أن الخدمة تستمع على `0.0.0.0` (مطبق في `server.js`).
- إذا ظهر خطأ `redirect_uri_mismatch` في logs:
  1. انسخ رابط callback الفعلي من logs.
  2. الصقه في إعدادات GitHub OAuth App بنفس الصياغة.
  3. أعد تشغيل المشروع.
