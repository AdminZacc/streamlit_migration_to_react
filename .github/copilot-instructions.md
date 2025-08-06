# Copilot Instructions for RuralHealthConnect

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a modern health information social platform built with Next.js 14, TypeScript, and Tailwind CSS. It's a clone of ruralhealthconnect.org with enhanced features for health professionals and community members.

## Tech Stack
- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Next.js API Routes, tRPC for type-safe APIs
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js v5 with multiple providers
- **File Upload**: Uploadthing for images and documents
- **Real-time**: Pusher for live updates (likes, comments, messages)
- **Deployment**: Vercel with edge functions

## Code Style Guidelines
- Use TypeScript for all files with strict type checking
- Prefer functional components with hooks over class components
- Use Tailwind CSS for styling with shadcn/ui components
- Follow Next.js 14 App Router conventions
- Use server components when possible, client components when needed
- Implement proper error boundaries and loading states
- Use Zod for schema validation on both client and server

## Key Features to Implement
1. **Authentication**: Multi-provider auth with email verification
2. **Posts**: Create, edit, delete posts with image uploads
3. **Social Features**: Like, comment, share functionality
4. **User Profiles**: Comprehensive user management
5. **Admin Dashboard**: User management, analytics, content moderation
6. **Messaging**: Real-time user-to-user messaging
7. **Badge System**: Achievement system for user engagement
8. **Analytics**: User activity tracking and insights
9. **Membership Tiers**: Different access levels for users
10. **Health Resources**: Medical information and resources

## Database Schema Patterns
- Use UUIDs for primary keys
- Implement soft deletes where appropriate
- Add created/updated timestamps to all entities
- Use proper foreign key relationships
- Implement database migrations carefully

## Security Considerations
- Validate all inputs with Zod schemas
- Implement rate limiting on APIs
- Use CSRF protection
- Sanitize user-generated content
- Implement proper role-based access control (RBAC)
- Secure file upload validation

## Performance Guidelines
- Use Next.js Image component for optimized images
- Implement pagination for large lists
- Use React.memo and useMemo appropriately
- Optimize database queries with proper indexing
- Implement caching strategies where beneficial

## File Structure Preferences
- Group components by feature in `/components`
- Use barrel exports (index.ts) for clean imports
- Keep API routes organized by feature
- Use absolute imports with `@/` prefix
- Separate business logic into custom hooks
