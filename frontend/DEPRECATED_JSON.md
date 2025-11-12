# Deprecated JSON Translation Files

## Status: ⚠️ DEPRECATED

The JSON translation files in `messages/` directory are **deprecated** and will be removed in a future release.

## What Changed?

All **content** (navigation, hero, footer, etc.) is now managed in **Sanity CMS**.

## What Stays in JSON?

**Only UI strings** that are part of the application interface, not content:

### Keep these types of strings:
- Error messages: "Loading...", "404 Not Found", "Something went wrong"
- Form validation: "Please enter a valid email", "Required field"
- Buttons: "Submit", "Cancel", "Close"
- Accessibility labels: "Close menu", "Skip to content"
- Date formatting: "Today", "Yesterday", "Last week"

### Move to Sanity:
- ✅ Navigation labels → **Navigation** document
- ✅ Hero content → **Hero** document
- ✅ Footer content → **Footer** document
- ✅ About content → **About** document
- ✅ All CMS-editable content → Sanity

## Current Files

### `messages/en.json` (DEPRECATED)
```json
{
  "nav": { ... },      // → Now in Sanity Navigation
  "hero": { ... },     // → Now in Sanity Hero
  "footer": { ... }    // → Now in Sanity Footer
}
```

### `messages/de.json` (DEPRECATED)
Same structure as English - all moved to Sanity.

## Migration Path

### Phase 1: ✅ DONE
- Created Sanity schemas
- Set up bilingual content structure
- Connected frontend to Sanity

### Phase 2: 🔄 NEXT (After migration)
- Remove `messages/*.json` files
- Remove `next-intl` dependency (optional)
- Keep only minimal UI strings if needed

### Phase 3: 🎯 FUTURE
- Implement UI strings in Sanity (optional)
- Complete CMS-driven approach

## How to Clean Up

**After running the migration and verifying everything works:**

```bash
# 1. Backup first (just in case)
cp -r frontend/messages frontend/messages.backup

# 2. Remove deprecated files
rm -rf frontend/messages/*.json

# 3. Remove next-intl if not needed for UI strings
cd frontend
npm uninstall next-intl

# 4. Remove next-intl config files if not needed
rm i18n/request.ts
rm i18n/config.ts
rm middleware.ts  # if only used for next-intl

# 5. Test thoroughly
npm run dev
```

## Testing Before Cleanup

1. Run migration: `cd studio && npm run migrate`
2. Start Sanity Studio: `npm run dev` (port 3444)
3. Verify all documents are created
4. Start frontend: `cd frontend && npm run dev`
5. Test both `/en` and `/de` routes
6. Verify all content displays correctly
7. Check that changing content in Studio updates the frontend

## Rollback Plan

If something breaks:

```bash
# Restore backup
cp -r frontend/messages.backup/* frontend/messages/

# Reinstall next-intl
npm install next-intl

# Restore config files from git
git checkout i18n/ middleware.ts
```

## Current Status

- ✅ Sanity integration complete
- ✅ Frontend fetching from Sanity
- ✅ Fallback content in place
- ⏳ **Waiting for migration to run**
- ⏳ **Waiting for testing confirmation**
- ⏳ Cleanup pending

## Questions?

**Q: Do I need to remove these files immediately?**
A: No! The fallback system ensures the site works. Remove files only after successful migration and testing.

**Q: What if I want to keep some translations in JSON?**
A: That's fine! Keep minimal UI strings in JSON, move all content to Sanity.

**Q: Can I still use next-intl?**
A: Yes! Use it for UI strings, but fetch content from Sanity.

**Q: How do I know if it's working?**
A: Check the console in development. If you see the fallback warning, run the migration.

---

✨ **Next Step**: Run the migration following `SANITY_SETUP.md`

