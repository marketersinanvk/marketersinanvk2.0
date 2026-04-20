# Firebase Security Specification - Marketer Sinan VK Portfolio

## 1. Data Invariants
- Only verified administrators can create, update, or delete content (projects, blog posts, services, settings).
- Anonymous or authenticated users can read all public-facing content (projects, blog posts, services).
- All document IDs must be valid alphanumeric strings.
- All timestamps must be server-generated.
- Project category must be one of: ["Web", "Graphics", "Video Editing"].

## 2. The "Dirty Dozen" Payloads (Red Team Test Cases)
1. **Malicious Write:** Anonymous user trying to delete a project.
2. **Identity Spoof:** Authenticated user (non-admin) trying to create a blog post.
3. **Ghost Field Injection:** Admin updating a project with hidden fields like `maliciousScript`.
4. **ID Poisoning:** Document ID with 2KB of junk characters.
5. **Timestamp Fraud:** Client sending a fake `createdAt` date from 2010.
6. **Relation Orphan:** Creating a blog post with a non-existent author ID (if applicable).
7. **Type Mismatch:** Sending a number for a "title" field.
8. **Size Flooding:** Sending a 500KB string for a meta description.
9. **Category Bypass:** Setting a project category to "Hacker".
10. **Admin Escalation:** A user trying to write to the `/admins/` collection to make themselves an admin.
11. **Blanket Query:** A user trying to list the entire `/admins/` collection.
12. **PII Leak:** An admin accidentally storing user emails in a public `projects` document (handled by field-level rules).

## 3. Test Runner (Draft Logic)
- `projects/delete`: `FAIL` for non-admin.
- `blog/create`: `FAIL` for non-admin.
- `cms/update`: `FAIL` if `affectedKeys().hasOnly(['field'])` is not met.
- `admins/read`: `FAIL` for all except the admin themselves.
